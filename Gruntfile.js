module.exports = function (grunt) {

    'use strict';

    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // Custom settings
    var config = {
    };

    // Configuration tasks
    grunt.initConfig({

        config: config,

        jshint: {
            build: {
                files: {
                    src: ['src/**/*.js', 'Gruntfile.js']
                }
            }
        },

        clean: {
            prune: {
                files: [{
                    dot: true,
                    src: ['node_modules', 'bower_components']
                }]
            }
        }

    });

    // Build task
    grunt.registerTask('build', [
    ]);

    // Dist task
    grunt.registerTask('dist', [
    ]);

    // Prune task
    grunt.registerTask('reset', [
        'prune'
    ]);

    // Release task
    grunt.registerTask('release', [
    ]);

    // Check task
    grunt.registerTask('check', [
        'jshint'
    ]);

    // Default task
    grunt.registerTask('default', ['build']);

};
