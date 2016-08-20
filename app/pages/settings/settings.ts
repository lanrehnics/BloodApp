import { Component, ApplicationRef } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
declare const codePush: CodePushCordovaPlugin;
@Component({
  templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
  isUpdateAvailable: boolean = false;
  status: string = '';
  isProcessing: boolean = false;
  currentPackage: ILocalPackage;
  downloadProgress: DownloadProgress;
  constructor(private appRef: ApplicationRef, private platform: Platform) {
  }
  ngOnInit() {
    this.platform.ready().then(()=>this.getCurrentPackage())
  }
  getCurrentPackage() {
    codePush.getCurrentPackage((result: ILocalPackage) => {
      this.currentPackage = result;
      this.appRef.tick();
    })
  }
  checkForUpdate(key) {
    this.isProcessing = true;
    this.status = 'Checking for Update'
    codePush.checkForUpdate((result) => {
      this.isUpdateAvailable = result !== null;
      this.status = result === null ? 'Up to Date' : 'Update Available'
      this.isProcessing = false;
      this.appRef.tick();
    }, null, key);
  }

  syncHandler(status: SyncStatus) {
    switch (status) {
      case SyncStatus.UP_TO_DATE:
        this.status = 'Up-to-date';
        break;
      case SyncStatus.UPDATE_INSTALLED:
        this.status = 'Update Installed';
        break;
      case SyncStatus.UPDATE_IGNORED:
        this.status = 'Update Ignored';
        break;
      case SyncStatus.ERROR:
        this.status = 'Error';
        break;
      case SyncStatus.IN_PROGRESS:
        this.status = 'In Progress';
        break;
      case SyncStatus.CHECKING_FOR_UPDATE:
        this.status = 'Checking for Update';
        break;
      case SyncStatus.AWAITING_USER_ACTION:
        this.status = 'Awaiting User Action';
        break;
      case SyncStatus.DOWNLOADING_PACKAGE:
        this.status = 'Downloading Package';
        break;
      case SyncStatus.INSTALLING_UPDATE:
        this.status = 'Installing Update';
        break;
    }
    this.appRef.tick();
  }
  updateDownloadProgress(progress: DownloadProgress) {
    this.downloadProgress = progress;
    this.appRef.tick();
  }
  sync() {
     codePush.sync((status) => this.syncHandler(status), {
      updateDialog: true,
      installMode: InstallMode.IMMEDIATE
     },
      (progress) => this.updateDownloadProgress(progress));
  }

}
