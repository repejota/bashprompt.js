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

var user = require('./../partials/user');
var hostname = require('./../partials/hostname');
var cwd = require('./../partials/cwd');
var git = require('./../partials/git');

/**
 * @namespace bashprompt.context
 */
var context = {};

/**
 * Builds Bash prompt context
 *
 * {@link bashprompt.context.build}
 */
context.build = function () {

    // TODO
    // * Add git! Currently only supports sync partials.
    // git.branchInfo(function (err, branchName) {
    //     if (!err && branchName) {
    //         prompt.push(colorize.format(' ', 238, 236));
    //         prompt.push(colorize.format(branchName.name, 248, 236));
    //         prompt.push(colorize.format(' ', 248, 236));
    //         prompt.push(colorize.format('', 236, 0));
    //     } else {
    //         prompt.push(colorize.format('', 238, 0));
    //     }
    //     cback(prompt);
    // });

    'use strict';

    var context = {
        start_space: ' ',
        username: user.username(),
        at: '@',
        hostname: hostname.shortHostname(),
        hostname_space: ' ',
        hostname_arrow: ' ',
        path: cwd.currentWorkDirectory(),
        path_space: ' ',
        path_arrow: ''
    };

    return context;
};

/** @module bashprompt/context */
module.exports = context;