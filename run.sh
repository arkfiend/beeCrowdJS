#!/bin/bash
docker run -it --rm \
  --name beecrowd \
  -v "$PWD:/app" \
  -w /app \
  node:12 bash
