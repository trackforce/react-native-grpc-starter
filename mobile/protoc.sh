#!/bin/bash

proto_files=$(ls -d ../backend/proto/*)

./node_modules/.bin/pbjs -t static-module -w es6 -o src/pb/index.js ${proto_files}
./node_modules/.bin/pbts -o src/pb/index.d.ts src/pb/index.js