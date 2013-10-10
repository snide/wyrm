module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    connect: {
      server: {
        options: {
          port: 9000,
          base: 'docs/build/html'
        }
      }
    },
    
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
        cmd: 'cd docs && rm -rf build && make html'
      }
    },

    watch: {
      sass: {
        files: ['sass/*.sass'],
        tasks: ['compass:dev']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      build: {
        files: ['theme/**/*.css', 'theme/**/*.js', 'docs/source/**/*.rst', 'theme/**/*.html'],
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
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['connect', 'watch']);

}
