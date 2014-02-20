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

    var user, hostname, cwd, git;

    /**
     * Username partial
     *
     * @type {Object}
     */
    user = require('./partials/user');

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
    exports.build = function (cback) {
        var prompt = [];
        prompt.push(colorize(' ', 233, 243));
        prompt.push(colorize(user.username(), 233, 243));
        prompt.push(colorize('@', 233, 243));
        prompt.push(colorize(hostname.shortHostname(), 233, 243));
        prompt.push(colorize(' ', 233, 243));
        prompt.push(colorize(' ', 243, 238));
        prompt.push(colorize(cwd(), 248, 238));
        prompt.push(colorize(' ', 248, 238));
        git.branchInfo(function (err, branchName) {
            if (!err && branchName) {
                prompt.push(colorize(' ', 238, 236));
                prompt.push(colorize(branchName.name, 248, 236));
                prompt.push(colorize(' ', 248, 236));
                prompt.push(colorize('', 236, 0));
            } else {
                prompt.push(colorize('', 238, 0));
            }
            cback(prompt);
        });
    };

    /**
     * Draws Bash prompt
     *
     * @returns {string}
     */
    exports.draw = function (prompt) {
        process.stdout.write('\\[' + prompt.join('') + '\\] ');
    };

}(typeof exports === 'object' && exports || this));