//
// BEGIN LICENSE BLOCK
//
// The MIT License (MIT)
//
// Copyright (c) 2014 Raül Pérez
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of
// this software and associated documentation files (the "Software"), to deal in
// the Software without restriction, including without limitation the rights to
// use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
// the Software, and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
// FOR A PARTICULAR PURPOSE AND NON INFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
// COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
// IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// END LICENSE BLOCK
//

(function (exports) {

    'use strict';

    /**
     * CLI Options & Commands library
     * @type {Object}
     */
    var nomnom = require('nomnom');

    /**
     * Our CLI parser instance
     * @type {Object}
     */
    var parser = nomnom.script('bp');

    /**
     * Commands
     */

    // Command Build
    parser.command('build')
        .callback(function (options) {
            var builder = require('./builder');
            console.log(builder.build());
        })
        .help('Build Bash prompt');

    /**
     * Global Options
     */

    // Option --version
    parser.option('version', {
        full: 'version',
        flag: true,
        help: 'Show version number',
        callback: function () {
            return require('../package.json').version;
        }
    });

    // Option --verbose // -v
    parser.option('verbose', {
        abbr: 'v',
        full: 'verbose',
        flag: true,
        help: 'Verbose mode ( more info on what is doing )'
    });

    // Option --help // -h
    parser.option('help', {
        abbr: 'h',
        full: 'help',
        flag: true,
        help: 'Display this info and exit'
    });

    parser.parse();

}(typeof exports === 'object' && exports || this));