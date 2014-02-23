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

var child = require('child_process');
var childsync = require('execSync');

/**
 * @namespace bashprompt.partials.git
 */
var git = {};

function getBranchName(stdout) {
    'use strict';


}

/**
 * Get the branch name of a Git repository asynchronously.
 *
 * {@link bashprompt.partials.git.branchInfo}
 *
 * @param callback {function} - Function to execute once info is retrieved.
 */
git.branchInfo = function (callback) {
    'use strict';

    var cmd = 'git status -sb --ignore-submodules';

    child.exec(cmd, function (err, stdout, stderr) {

        // Check for errors
        if (err || !stdout) { return callback(err); }

        // Supprocess results all lines
        var lines = stdout.trim().split('\n');

        // First line ( it contains branch name )
        var status = lines.shift().trim();

        // Get the branch name
        var matches = status.match(/^## ([A-Za-z0-9.-]+)/);
        if (matches) { branchInfo.name = matches[1]; }

        callback(branchInfo);
    });
};

/**
 * Get the branch name of a Git repository synchronously.
 *
 * {@link bashprompt.partials.git.branchInfoSync}
 *
 * @returns {branchInfo} - Current branch info.
 */
git.branchInfoSync = function () {

    'use strict';

    var cmd = 'git status -sb --ignore-submodules';

    var branchInfo = childsync.exec(cmd);

    // Check if error code > 0. Means that has occurred an error!
    if (branchInfo.code>0) { return branchInfo; }

    // Supprocess results all lines
    var lines = branchInfo.stdout.trim().split('\n');

    // First line ( it contains branch name )
    var status = lines.shift().trim();

    // Get the branch name
    var matches = status.match(/^## ([A-Za-z0-9.-]+)/);
    if (matches) { branchInfo.name = matches[1]; }

    return branchInfo;
};

/** @module bashprompt/partials/git */
module.exports = git;
