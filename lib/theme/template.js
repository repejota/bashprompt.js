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

var colorize = require('./../colorize');

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
 * Compiles a template source string binding context context into it.
 *
 * @param source {string} - Template source string
 * @param context {object} - JSON object with template context context.
 * @param open_tag {string} - Token opening tag.
 * @param close_tag {string} - Token closing tag.
 */
template.compile = function (source, context) {
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

        // get the expression
        var expr = match.substring(template.DEFAULT_OPEN_TAG.length, match.length - template.DEFAULT_CLOSE_TAG.length);

        // parse expression
        var expr_key = expr.split(':')[0];
        var expr_args = expr.split(':')[1];

        // check expression
        if (typeof context[expr_key] !== 'undefined') {

            // check args
            var expr_arg_fg, expr_arg_bg;

            if (typeof expr_args !== 'undefined') {

                // arguments list
                var list = expr_args.split(',');

                // foreground
                if (typeof list[0] !== 'undefined') {
                    expr_arg_fg = list[0];
                }

                // background
                if (typeof list[1] !== 'undefined') {
                    expr_arg_bg = list[1];
                }
            }
            // execute expression
            res = res.replace(match, context[expr_key]);
            if (expr_arg_fg && expr_arg_bg) {
                res = colorize.format(res, expr_arg_fg, expr_arg_bg);
            }
            // TODO
            // Support for change only foreground or only background?
            // If so... I can get the 'previous' color?
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