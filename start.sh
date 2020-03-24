#!/bin/bash

# build image
docker build -t qa-automation-executor .

# stop running container if there is one
docker rm -f qa-automation-executor-container

# create a directory for output logs
mkdir -p "$OUTPUT_LOG_DIR"

# run the image
docker run --env COMMAND="$COMMAND" \
           --env PASSWORD="$PASSWORD" \
           -p "$PORT":3000 \
           --mount type=bind,source="$OUTPUT_LOG_DIR",destination=/app/out \
           --restart always \
           --detach \
           --name qa-automation-executor-container \
           qa-automation-executor
