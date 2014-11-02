'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	jshint: {
	    all: ['lib/*.js']
	}
    });
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('default', ['test']);
};
