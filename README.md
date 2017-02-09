# borschik-tech-babili

Borschik JS tech with babili as minifier.

[![NPM version](https://badge.fury.io/js/borschik-tech-babili.png)](http://badge.fury.io/js/borschik-tech-babili)
[![Dependency Status](https://david-dm.org/tadatuta/borschik-tech-babili.png)](https://david-dm.org/tadatuta/borschik-tech-babili)

[babili](https://github.com/babel/babili) based plugin to build JS files with [borschik](https://github.com/bem/borschik).

## Installation
```sh
$ npm install borschik borschik-tech-babili
```

## Usage
```sh
$ ./node_modules/.bin/borschik -t babili -i test.js
```
You can provide custom options to `babili` with `--tech-options`
```
$ ./node_modules/.bin/borschik -t babili -i test.css --tech-options='{"babili":{"mangle":false}}'
```

See https://github.com/babel/babili/tree/master/packages/babel-preset-babili#options for available options.
