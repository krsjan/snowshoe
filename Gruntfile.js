// Gruntfile with the configuration of grunt-express and grunt-open. No livereload yet!
module.exports = function (grunt) {
  'use strict';
  var path = require('path');

  // Configure Grunt 
  grunt.initConfig({

    // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
    watch: {
      live: {
        options: {
          livereload: true
        },
        files  : ['public/js/**/*.js', 'public/css/*', 'public/views/**/*', 'public/translation/*']
      },
      css : {
        files: ['less/*.less'],
        tasks: ['less:dev']
      }
    },
    less : {
      dev: {
        files            : {
          "public/css/app.css": "less/app.less"
        },
        compress         : true,
        sourceMap        : true,
        sourceMapRootpath: '/'
      }
    }
  });

  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  // Creates the `server` task
  grunt.registerTask('snowshoe', ['watch:live', 'watch:css']);
};