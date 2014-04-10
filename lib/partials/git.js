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

var childsync = require('execSync');

function getBranchName(status) {
    'use strict';
    var name = '';
    var matches = status.match(/^## ([A-Za-z0-9.-]+)/);
    if (matches) { name = matches[1]; }
    return name;
}

function hasPendingCommits(lines) {
    'use strict';
    var pending = [];
    function isPending(line) {
        if (/^ M/.test(line)) {
            return true;
        }
        return false;
    }
    pending = lines.filter(isPending);
    return pending.length;
}

function hasUntrackedFiles(lines) {
    'use strict';
    var untracked = [];
    function isUntracked(line) {
        if (/^\?\?/.test(line)) {
            return true;
        }
        return false;
    }
    untracked = lines.filter(isUntracked);
    return untracked.length;
}

exports.branchInfoSync = function () {
    'use strict';
    var cmd = 'git status -sb --ignore-submodules';
    var branchInfo = childsync.exec(cmd);
    // Check if error code > 0. Means that has occurred an error!
    if (branchInfo.code > 0) { return branchInfo; }
    // Result all lines
    var lines = branchInfo.stdout.trim().split('\n');
    // First line ( it contains branch name )
    var status = lines.shift().trim();
    branchInfo.name = getBranchName(status);
    branchInfo.has_pending_commits = hasPendingCommits(lines);
    branchInfo.has_untracked_files = hasUntrackedFiles(lines);
    return branchInfo;
};
