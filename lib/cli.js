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

var template = require('./theme/template');
var context = require('./theme/context');

/**
 * @namespace bashprompt.cli
 */
var cli = {};

/**
 * Run CLI
 *
 * {@link bashprompt.cli.run}
 */
cli.run = function () {

    'use strict';

    var program = require('nomnom');

    // Command Build
    program.command('build')
        .help('Build Bash prompt')
        .callback(function () {

            var tpl_source = '';
            tpl_source += '{{start_space:233,243}}';
            tpl_source += '{{username:233,243}}';
            tpl_source += '{{at:233,243}}';
            tpl_source += '{{hostname:233,243}}';
            tpl_source += '{{hostname_space_start:233,243}}';
            tpl_source += '{{hostname_arrow:243,238}}';
            tpl_source += '{{hostname_space_end:233,238}}';
            tpl_source += '{{path:248,238}}';
            tpl_source += '{{path_space:248,238}}';
            tpl_source += '{{path_arrow:238,236}}';
            tpl_source += '{{git_space_start:248,236}}';
            tpl_source += '{{git_branch_name:248,236}}';
            tpl_source += '{{git_space_end:248,236}}';
            tpl_source += '{{git_arrow:236,0}}';
            tpl_source += '{{end_space:236,0}}';

            var tpl_context = context.build();
            var tpl_compiled = template.compile(tpl_source, tpl_context);

            var res = template.render(tpl_compiled);
            process.stdout.write(res);
        }
    );

    // Option --version
    program.option('version', {
        full: 'version',
        flag: true,
        help: 'Show version number',
        callback: function () {
            return require('../package.json').version;
        }
    });

    // Option --verbose / -v
    program.option('verbose', {
        abbr: 'v',
        full: 'verbose',
        flag: true,
        help: 'Verbose mode ( more info on what is doing )'
    });

    // Option --help / -h
    program.option('help', {
        abbr: 'h',
        full: 'help',
        flag: true,
        help: 'Display this info and exit'
    });

    program.parse();
};

/** @module bashprompt/cli */
module.exports = cli;