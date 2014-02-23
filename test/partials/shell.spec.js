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

describe('bashprompt.shell.user spec', function () {
    'use strict';

    describe('bashprompt.partial.user instance', function () {

        var shell = require('../../lib/partials/shell');

        it('should not be null', function () {
            assert.notEqual(shell, null);
            assert.notEqual(shell, undefined);
        });

        it('shows current number of jobs running', function () {
            assert.equal(shell.countJobs(), '\\j');
        });

        it('shows bashename of the shell\'s terminal device', function () {
            assert.equal(shell.baseName(), '\\l');
        });

        it('shows the name of the shell', function () {
            assert.equal(shell.name(), '\\s');
        });

        it('shows the version of the shell', function () {
            assert.equal(shell.version(), '\\v');
        });

        it('shows the release version of the shell', function () {
            assert.equal(shell.releaseVersion(), '\\V');
        });

    });

});