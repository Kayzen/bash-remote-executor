#!/bin/bash

# build image
docker build -t bash-remote-executor .

# stop running container if there is one
docker rm -f bash-remote-executor-container

# create a directory for output logs
mkdir -p "$OUTPUT_LOG_DIR"

# run the image
docker run --env COMMAND="$COMMAND" \
           --env PASSWORD="$PASSWORD" \
           -p "$PORT":3000 \
           --mount type=bind,source="$OUTPUT_LOG_DIR",destination=/app/out \
           --restart always \
           --detach \
           --name bash-remote-executor-container \
           bash-remote-executor
