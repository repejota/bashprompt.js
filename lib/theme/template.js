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
 * @namespace bashprompt.theme.template
 */
var template = {};

/**
 * Default template opening tag.
 *
 * @type {string}
 */
template.DEFAULT_OPEN_TAG = '{{';

/**
 * Default template closing tag.
 *
 * @type {string}
 */
template.DEFAULT_CLOSE_TAG = '{{';

/**
 * Compiles a template source string binding context values into it.
 *
 * @param source {string} - Template source string
 * @param values {object} - JSON object with template context values.
 * @param open_tag {string} - Token opening tag.
 * @param close_tag {string} - Token closing tag.
 */
template.compile = function (source, values, open_tag, close_tag) {
    'use strict';

    var opening = open_tag || template.DEFAULT_OPEN_TAG;
    var closing = close_tag || template.DEFAULT_CLOSE_TAG;

    var open = opening.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
    var close = closing.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
    var r = new RegExp(open + '(.+?)' + close, 'g');
    var matches = source.match(r) || [];

    matches.forEach(function (match) {
        //chop {{ and }}
        var key = match.substring(opening.length, match.length - closing.length);
        if (typeof values[key] !== 'undefined') {
            source = source.replace(match, values[key]);

            console.log(source);
        }
    });
};

/**
 * Renders a template binding context values to source.
 *
 * @param prompt
 * @param callback
 */
template.render = function (prompt, callback) {
    'use strict';

    var res = '\\[' + prompt.join('') + '\\] ';
    callback(null, res);
};

/** @module bashprompt/theme/template */
module.exports = template;