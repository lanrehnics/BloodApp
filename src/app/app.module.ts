import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DatePage } from '../pages/date/date';
import { NativeMapPage } from '../pages/native-map/native-map';
import {QuizPage} from '../pages/quiz/quiz';
import {QuizResultPage} from '../pages/quiz-result/quiz-result'

@NgModule({
  declarations: [
    MyApp,
    DatePage,
    NativeMapPage,
    HomePage,
    QuizPage,
    QuizResultPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DatePage,
    NativeMapPage,
    HomePage,
    QuizPage,
    QuizResultPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
