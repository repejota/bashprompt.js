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
template.DEFAULT_CLOSE_TAG = '}}';

/**
 * Compiles a template source string binding context values into it.
 *
 * @param source {string} - Template source string
 * @param values {object} - JSON object with template context values.
 * @param open_tag {string} - Token opening tag.
 * @param close_tag {string} - Token closing tag.
 */
template.compile = function (source, values) {
    'use strict';

    var isUndefinedOrNull = (typeof source === 'undefined' ||
                             typeof source === null);

    // Returns blank string if template source is undefined or null.
    if (isUndefinedOrNull) { return ''; }

    var open = template.DEFAULT_OPEN_TAG.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
    var close = template.DEFAULT_CLOSE_TAG.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
    var r = new RegExp(open + '(.+?)' + close, 'g');
    var matches = source.match(r) || [];
    var res = source;
    matches.forEach(function (match) {
        //chop {{ and }}
        var key = match.substring(template.DEFAULT_OPEN_TAG.length, match.length - template.DEFAULT_CLOSE_TAG.length);
        if (typeof values[key] !== 'undefined') {
            res = res.replace(match, values[key]);
        }
    });
    return res;
};

/**
 * Renders a template binding context values to source.
 *
 * @param prompt
 * @param callback
 */
template.render = function (prompt) {
    'use strict';

    var res = '\\[' + prompt + '\\] ';
    return res;
};

/** @module bashprompt/theme/template */
module.exports = template;