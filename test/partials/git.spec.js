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

    describe('supports synchronous execution model', function () {

        var git = require('../../lib/partials/git');

        describe('tries to get branch info', function () {

            before(function () {
                childsync.run('rm -rf /tmp/.bptest/git; ' +
                    'mkdir -p /tmp/.bptest/git/invalid; ' +
                    'mkdir -p /tmp/.bptest/git/valid; ' +
                    'cd /tmp/.bptest/valid; ' +
                    'git init -q; ' +
                    'echo "bar" > foo.txt; ' +
                    'git add foo.txt; ' +
                    'git commit -aqm "first commit"');
            });

            it('from non-valid repo folder result code is > 0', function () {
                process.chdir('/tmp/.bptest/git/invalid');
                var branchInfo = git.branchInfoSync();
                assert.notEqual(branchInfo.code, 0);
            });

            it('from valid repo folder result code is > 0', function () {
                process.chdir('/tmp/.bptest/git/valid');
                var branchInfo = git.branchInfoSync();
                assert.equal(branchInfo.code, 0);
            });

        });

    });

});