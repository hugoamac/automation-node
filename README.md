# Automation Application in NodeJS

This application provides a small restful api for storing automation commands in NodeJS, AngularJS and Docker.

### Tech

This application uses open source projects to work

* [Node.js] - evented I/O for the backend.
* [Express] - fast node.js network app framework.
* [mochajs] - tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases.
* [chaijs] -  BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [sinonjs] - Standalone test spies, stubs and mocks for JavaScript. 
Works with any unit testing framework.
* [ESLint] - The linting utility for JavaScript.

### Installation

Tha application require [Node.js] v8+ to run.


Clone this repository with git command bellow:

```sh
git clone git@github.com:hugoamac/automation-node.git
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd automation-node
$ npm install -d
$ node node_modules/.bin/bower install
$ npm start
```

### Tests


The application was developed using the mocha test execution api and the eslint library as code writing linter. In this way the configuration to execute the tests of the code, you only have to execute the command below.

```sh
npm test
```


### Docker

The application is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

Enter the src / config folder and replace the extension of the development.format file for development.json and after:

```sh
cd automation-node
docker build -t hugoamac/automation-node .
docker run -p 8080:8080 -d hugoamac/automation-node
```

If you have the installation of docker-compose, then you executing should the commando bellow.

```sh
cd automation-node
docker-compose up -d
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
http://yourdockerip:8080/
```

License
----

**Free Software Yeah!**
