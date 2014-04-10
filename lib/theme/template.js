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

var DEFAULT_OPEN_TAG = '{{';
var DEFAULT_CLOSE_TAG = '}}';

function getTemplatePartials(source) {
    'use strict';
    var open = DEFAULT_OPEN_TAG.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
    var close = DEFAULT_CLOSE_TAG.replace(/[-[\]()*\s]/g, '\\$&').replace(/\$/g, '\\$');
    var r = new RegExp(open + '(.+?)' + close, 'g');
    return source.match(r) || [];
}

exports.compile = function (source, context) {
    'use strict';

    var isUndefinedOrNull = (typeof source === 'undefined' ||
                             typeof source === null);

    // Returns blank string if template source is undefined or null.
    if (isUndefinedOrNull) { return ''; }

    var partials = getTemplatePartials(source);

    var res = source;

    partials.forEach(function (partial) {

        // get the expression
        var expr = partial.substring(DEFAULT_OPEN_TAG.length, partial.length - DEFAULT_CLOSE_TAG.length);

        // parse expression
        var expr_key = expr.split(':')[0];
        var expr_args = expr.split(':')[1];

        var expr_value = context[expr_key];

        // If partial has value, process the token.
        if (typeof expr_value !== 'undefined') {

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
            if (expr_arg_fg && expr_arg_bg) {
                expr_value = colorize.format(expr_value, expr_arg_fg, expr_arg_bg);
            }

            res = res.replace(partial, expr_value);
        }
        // If partial has no value, remove token.
        else {
            res = res.replace(partial, '');
        }
    });
    return res;
};

exports.render = function (prompt) {

    'use strict';

    var res = '\\[' + prompt + '\\]';
    return res;
};
