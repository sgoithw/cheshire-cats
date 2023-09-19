#!/bin/bash

docker run -v $(pwd):/app -w /app  node bash -it -c "npm install"