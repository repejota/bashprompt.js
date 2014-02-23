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

module.exports = function (grunt) {

    'use strict';

    // load all grunt tasks
    var matchdep = require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Configuration tasks
    grunt.initConfig({

        shell: {
            test: {
                options: {
                    stdout: true
                },
                command: './node_modules/.bin/mocha --colors --recursive -R spec'
            },
            coverage: {
                options: {
                    stdout: true
                },
                command: './node_modules/.bin/istanbul cover --print detail ./node_modules/.bin/_mocha -- --colors --recursive -R spec'
            }
        },

        jsdoc: {
            build: {
                options: {
                    destination: 'doc/api'
                },
                src: ['lib/**/*.js', 'bin/bp']
            }
        },

        bashlint: {
            build: {
                options: {
                    force: true
                },
                src: ['contrib/bp.sh']
            }
        },

        jshint: {
            build: {
                files: {
                    src: ['lib/**/*.js', 'Gruntfile.js', 'bin/bp']
                }
            }
        },

        clean: {
            build: {
                files: [{
                    dot: true,
                    src: ['doc/api', 'coverage']
                }]
            },
            prune: {
                files: [{
                    dot: true,
                    src: ['node_modules', 'npm-debug.log']
                }]
            }
        }

    });

    // Build task
    grunt.registerTask('build', [
        'clean:build',
        'jshint:build',
        'bashlint:build',
        'jsdoc:build'
    ]);

    // Prune task
    grunt.registerTask('prune', [
        'clean'
    ]);

    // Check task
    grunt.registerTask('check', [
        'bashlint',
        'jshint'
    ]);

    // Test task
    grunt.registerTask('test', [
        'shell:test'
    ]);

    // Coverage task
    grunt.registerTask('coverage', [
        'shell:coverage'
    ]);

    // Doc task
    grunt.registerTask('doc', [
        'clean:build',
        'jsdoc'
    ]);

    // Default task
    grunt.registerTask('default', ['build']);

};
