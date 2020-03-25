# Bash remote executor

Server that runs a predefined bash command when it receives a request to specific port with correct password

For example: http://123.234.34.56:27442/?password=123 can trigger a command `protractor` on the server's machine

If another request is made while previous command is still running, that command will be forcefully stopped, so there is never two commands running at the same time

Output of commands will be available in the `out` directory

### Prerequisites

- NodeJS 12+

### Install

```
npm install
npm install -g pm2
```

### To start

Run the following command, but change the environment variables first (COMMAND, PASSWORD, PORT):
```
COMMAND='cd /directory/with/protractor/code && protractor' \
PASSWORD='PASSWORD HERE' \
PORT=RANDOM_PORT_HERE \
pm2 start
```

### To stop
```
pm2 delete all
```
