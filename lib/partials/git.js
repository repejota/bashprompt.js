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

/**
 * Git Branch Info object type
 *
 * @typedef {Object} bashPrompt~partials~git~branchInfo
 * @property {string} name - The branch name
 */
var branchInfo = {
    name: null
};

/**
 * @class bashPrompt.Partials.git
 * @constructor
 */
var git = {

    /**
     * Get the branch name of a Git repository.
     *
     * {@link bashPrompt.Partials.git.branchInfo}
     *
     * @param callback
     */
    branchInfo: function (callback) {
        'use strict';

        var child = require('child_process'),
            cmd;

        cmd = 'git status -sb --ignore-submodules';

        child.exec(cmd, function (err, stdout, stderr) {
            // Check for errors
            if (err || !stdout) {
                return callback(err, null);
            }

            var lines = stdout.trim().split('\n');

            var status = lines.shift().trim();

            // Get the branch name
            var matches = status.match(/^## ([A-Za-z0-9.-]+)/);
            if (matches) {
                branchInfo.name = matches[1];
            }

            callback(null, branchInfo);
        });
    }

};

/** @module bashPrompt/partials/git */
module.exports = git;

