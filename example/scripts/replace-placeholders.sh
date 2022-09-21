#!/bin/bash

if [[ "$OSTYPE" == "darwin"* ]]; then
  sed -i '' -e "s/APPCUES_ACCOUNT_ID/$1/g" ./src/App.tsx
  sed -i '' -e "s/APPCUES_APPLICATION_ID/$2/g" ./src/App.tsx
else
  sed -i -e "s/APPCUES_ACCOUNT_ID/$1/g" ./src/App.tsx
  sed -i -e "s/APPCUES_APPLICATION_ID/$2/g" ./src/App.tsx
fi