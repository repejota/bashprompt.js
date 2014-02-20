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

    var colorize = require('./colorize');

    var username, hostname, cwd, git;

    /**
     * Username partial
     *
     * @type {Object}
     */
    username = require('./partials/username');

    /**
     * Hostname partial
     *
     * @type {Object}
     */
    hostname = require('./partials/hostname');

    /**
     * Current Working Directory partial
     *
     * @type {Object}
     */
    cwd = require('./partials/cwd');

    /**
     * GIT DCVS partial
     *
     * @type {Object}
     */
    git = require('./partials/git');

    /**
     * Build method
     *
     * @returns {string}
     */
    exports.build = function () {
        var prompt = '';
        prompt += colorize(' ', 233, 243);
        prompt += colorize(username(), 233, 243);
        prompt += colorize('@', 233, 243);
        prompt += colorize(hostname(), 233, 243);
        prompt += colorize(' ', 233, 243);
        prompt += colorize(' ', 243, 238);
        prompt += colorize(cwd(), 248, 238);
        prompt += colorize(' ', 248, 238);
        prompt += colorize(' ', 238, 236);
        prompt += colorize(git(), 248, 236);
        prompt += colorize(' ', 248, 236);
        prompt += colorize('', 236, 0);
        return '\\[' + prompt + '\\] ';
    };

}(typeof exports === 'object' && exports || this));