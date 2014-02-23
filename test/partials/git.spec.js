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

var assert = require('assert');
var childsync = require('execSync');

describe('bashprompt.partials.git spec', function () {

    'use strict';

    describe('bashprompt.partial.git instance', function () {

        var git = require('../../lib/partials/git');

        it('should not be null', function () {
            assert.notEqual(git, null);
            assert.notEqual(git, undefined);
        });

    });

//  TODO
//  * TravisCI fails on creating git repos for testing fixtures.
//    Workarounds?
//
//  describe('supports synchronous execution model', function () {
//
//        var git = require('../../lib/partials/git');
//
//        //
//        // Prepare git tests fixture folders.
//        //
//        // /tmp/.bptest/git/invalid
//        //  - Contains a folder with no repo.
//        //
//        // /tmp/.bptest/git/valid
//        //  - Contains a folder with a repo.
//        //  - A file foo.txt is created added and commited.
//        //
//        before(function () {
//            childsync.run('mkdir -p /tmp/.bptest/git/invalid; ' +
//                'mkdir -p /tmp/.bptest/git/valid; ' +
//                'cd /tmp/.bptest/git/valid; ' +
//                'git init -q; ' +
//                'echo "bar" > foo.txt; ' +
//                'git add foo.txt; ' +
//                'git commit -aqm "first commit"; ');
//        });
//
//        describe('tries to get branch info', function () {
//
//            it('from non-valid repo folder result.error.code is > 0', function () {
//                process.chdir('/tmp/.bptest/git/invalid');
//                var res = git.branchInfoSync();
//                assert.notEqual(res.code, 0);
//            });
//
//            it('from valid repo folder result.error.code is === 0', function () {
//                process.chdir('/tmp/.bptest/git/valid');
//                var res = git.branchInfoSync();
//                assert.equal(res.code, 0);
//                assert.equal(res.stdout, '## master\n');
//                assert.equal(res.name, 'master');
//            });
//
//        });
//
//        /**
//         * Clean git tests fixture folders.
//         *
//         * /tmp/.bptest/git
//         *  - Removes this directory.
//         */
//        after(function () {
//            process.chdir(process.env.HOME);
//            childsync.run('rm -rf /tmp/.bptest/git');
//        });
//
//    });

});