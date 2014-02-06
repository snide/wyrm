module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    sass: {
      test: {
        options: {
          style: 'expanded',
          loadPath: ['bower_components/bourbon/app/assets/stylesheets', 'bower_components/neat/app/assets/stylesheets', 'bower_components/font-awesome/scss']
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'css',
          ext: '.css'
        }]
      }
    },

    release: {
      options: {
        npm: false, //default: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('test', ['sass:test']);
  grunt.registerTask('build', ['release']);

}
