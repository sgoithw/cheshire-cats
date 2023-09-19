#!/bin/bash

docker run -v $(pwd):/app -w /app -p 8080:8080  node bash -it -c "npm run dev"