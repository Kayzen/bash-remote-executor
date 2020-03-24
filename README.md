# Bash remote executor

Server that runs a predefined bash command when it receives a request to specific port with correct password, for example: http://123.234.34.56:27442/?password=123 can trigger a command `protractor` on the server's machine

To start run the following command, but change the environment variables first (COMMAND, PASSWORD, PORT, OUTPUT_LOG_DIR):
```
COMMAND='cd /directory/with/protractor/code && protractor' \
PASSWORD='PASSWORD HERE' \
PORT=27442 \
OUTPUT_LOG_DIR=/tmp/qa-automation-executor-out \
./start.sh
```

To stop:
```
./stop.sh
```
