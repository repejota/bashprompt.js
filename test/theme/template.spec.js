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

describe('bashprompt.theme.template spec', function () {
    'use strict';

    describe('bashprompt.theme.template instance', function () {

        var template = require('../../lib/theme/template');

        it('should not be null', function () {
            assert.notEqual(template, null);
            assert.notEqual(template, undefined);
        });

        it('compiles blank template to a blank string', function () {
            var source = '';
            var context = {};
            var result = template.compile(source, context);
            assert.equal(result, '');
        });

        it('compiles undefined template to a blank string', function () {
            var source;
            var context = {};
            var result = template.compile(source, context);
            assert.equal(result, '');
        });

        it('compiles null template to a blank string', function () {
            var source;
            var context = null;
            var result = template.compile(source, context);
            assert.equal(result, '');
        });

        it('compiles simple key/value substitution', function () {
            var source = '{{foo}}';
            var context = {
                foo: 'bar'
            };
            var result = template.compile(source, context);
            assert.equal(result, 'bar');
        });

        it('compiles multiple key/value substitutions', function () {
            var source = 'Value 1: {{one}} - Value 2: {{two}}';
            var context = {
                one: 'foo',
                two: 'bar'
            };
            var result = template.compile(source, context);
            assert.equal(result, 'Value 1: foo - Value 2: bar');
        });

        it('leaves untouched tokens that not exists', function () {
            var source = '{{foo}} exists but {{bar}} don\'t';
            var context = {
                foo: 'foo token'
            };
            var result = template.compile(source, context);
            assert.equal(result, 'foo token exists but {{bar}} don\'t');
        });

    });

});