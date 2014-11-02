'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jscs');

    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jscs: {
	    all: {
		options: {
		    'standard': 'Idiomatic',
		    'reportFull': true
		},
		files: {
		    src: ['server.js']
		}
	    }
	},
	jshint: {
	    all: ['server.js']
	}
    });
    grunt.registerTask('test', ['jshint', 'jscs']);
    grunt.registerTask('default', ['test']);
};
