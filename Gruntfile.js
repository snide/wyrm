module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    compass: {
      dev: {
        options: {
          config: 'sass/config.rb',
          basePath: 'sass',
          force: true
        }
      }
    },
    
    exec: {
      build_sphinx: {
        cmd: 'cd docs && make html'
      }
    },

    watch: {
      sass: {
        files: ['sass/*.sass'],
        tasks: ['compass:dev']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      build: {
        files: ['**/*.css', '**/*.js', '**/*.rst'],
        tasks: ['exec:build_sphinx']
      },
      /* watch our files for change, reload */
      livereload: {
        files: ['docs/build/html/**/*.html', 'docs/build/html/_static/*.css', 'docs/build/html/_static/*.js'],
        options: {
          livereload: true
        }
      },
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', 'watch');

}
