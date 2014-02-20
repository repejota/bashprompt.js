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

(function (exports) {
    'use strict';

    /**
     * The  number of jobs currently managed by the shell
     *
     * @returns {string}
     */
    exports.countJobs = function () {
        return "\\j";
    };

    /**
     * The basename of the shell's terminal device name
     *
     * @returns {string}
     */
    exports.baseName = function () {
        return "\\l";
    };

    /**
     * the  name  of  the shell, the basename of $0 (the portion following the final slash)
     * @returns {string}
     */
    exports.name = function () {
        return "\\s";
    };

    /**
     * The version of bash (e.g., 2.00)
     *
     * @returns {string}
     */
    exports.version = function () {
        return "\\v";
    };

    /**
     * The release of bash, version + patchlevel (e.g., 2.00.0)
     *
     * @returns {string}
     */
    exports.releaseVersion = function () {
        return "\\V";
    };

}(typeof exports === 'object' && exports || this));