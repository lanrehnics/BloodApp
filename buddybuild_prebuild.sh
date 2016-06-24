#!/usr/bin/env bash

cd /Users/buddybuild/workspace

if [ -z ${PLATFORM+x} ]; then
  echo '=== Detected environmental variable PLATFORM is set: $PLATFORM'
  ionic build $PLATFORM
else
  echo '=== Could not detect environmental variable PLATFORM. ionic prepare both ios and android. PLATFORM: $PLATFORM'
  ionic build android ios
fi
