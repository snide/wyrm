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
          config: 'docs/source/_themes/wyrm_theme/sass/config.rb',
          basePath: 'docs/source/_themes/wyrm_theme/sass',
          force: true
        }
      }
    },
    
    copy: {
      sphinx_rtd_theme : {
        files: [
          {
            expand: true,
            cwd: 'docs/source/_themes/wyrm_theme', 
            src: ['**', '!**/theme.sass', '!**/*.css', '!**/config.rb'],
            dest: '../sphinx_rtd_theme/sphinx_rtd_theme'
          }
        ]
      }
    },

    exec: {
      build_sphinx: {
        cmd: 'cd docs && rm -rf build && make html'
      }
    },

    watch: {
      sass: {
        files: ['docs/source/_themes/wyrm_theme/sass/*.sass', 'sass/**/*.sass'],
        tasks: ['compass:dev']
      },
      /* watch and see if our javascript files change, or new packages are installed */
      build: {
        files: ['docs/source/_themes/**/static/*.css', 'docs/source/_themes/**/static/*.js', 'docs/source/**/*.rst', 'docs/source/_themes/**/*.html'],
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

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');

  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('build', ['copy']);

}
