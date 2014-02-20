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
 * @class bashPrompt.colorize
 * @constructor
 */
var colorize = {

    /**
     * Format an string
     *
     * {@link bashPrompt.colorize.format}
     *
     * @param str {string} - String to colorize
     * @param fg {int} - Foreground color code
     * @param bg {int} - Background color code
     * @returns {string} - Colorized string
     */
    format: function (str, fg, bg) {

        'use strict';

        var res = '';

        if (fg) {
            res += '\\e[38;5;' + fg + 'm';
        }
        if (bg) {
            res += '\\e[48;5;' + bg + 'm';
        }

        res += str;

        res += '\\e[0m';

        return res;
    }

};

/** @module bashPrompt/colorize */
module.exports = colorize;
