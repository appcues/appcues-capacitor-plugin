#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' -e "s/APPCUES_APPLICATION_ID/$2/g" ../app/src/main/AndroidManifest.xml
  sed -i '' -e "s/GOOGLE_SERVICES_KEY/$3/g" ../app/google-services.json
else
  sed -i -e "s/APPCUES_APPLICATION_ID/$2/g" ../app/src/main/AndroidManifest.xml
  sed -i -e "s/GOOGLE_SERVICES_KEY/$3/g" ../app/google-services.json
fi