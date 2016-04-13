module.exports = function(grunt) {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.initConfig({
    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: [__dirname],
          livereload: true
        }
      }
    },
    watch: {
      all: {
        files: ['index.html','js/*.js'],
        options: {
          livereload: true
        }
      }
    },
    open: {
      all: {       
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });
  
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);
};