'use strict';

const chalk = require('chalk');

class Logger {
    constructor(level) {
        this.levels = ['debug', 'info', 'warning', 'error'];
        this.level = this.levels.indexOf(level);
    }

    debug(message) {
        this.log(this.levels.indexOf('debug'), message);
    }

    info(message) {
        this.log(this.levels.indexOf('info'), message);
    }

    warn(message) {
        this.log(this.levels.indexOf('warning'), message);
    }

    warning(message) {
        this.log(this.levels.indexOf('warning'), message);
    }

    error(message) {
        this.log(this.levels.indexOf('error'), message);
    }

    log(level, message) {
        if (level < 0) {
            level = 0;
        }

        if (level < this.level) {
            return;
        }

        let output = (new Date()).toISOString() + ' ';

        const levelName = this.levels[level];
        if (levelName === 'debug') {
            output += chalk.cyan(levelName);
        }
        if (levelName === 'info') {
            output += chalk.green(levelName);
        }
        if (levelName === 'warning') {
            output += chalk.yellow(levelName);
        }
        if (levelName === 'error') {
            output += chalk.red(levelName);
        }

        output += ' ';
        output += chalk.gray(message.constructor.name);
        output += ' ';

        if (message instanceof Error) {
            message = message.message + "\n" + message.stack;
        }
        if (message instanceof Object) {
            message = JSON.stringify(message);
        }

        output += message;

        console.log(output);
    }
}

let level = 'debug';
if (process.env.NODE_ENV == 'prod') {
    level = 'info';
}

module.exports = new Logger(level);
