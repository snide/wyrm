module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    open : {
      dev: {
        path: 'http://localhost:9898'
      }
    },

    connect: {
      server: {
        options: {
          port: 9898,
          base: 'docs',
          livereload: true
        }
      }
    },

    sass: {
      dev: {
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

    exec: {
      bower_update: {
        cmd: 'bower update'
      },
      kss: {
        cmd: 'kss-node sass/ docs/ -sass css/wyrm_test.css --template docs_template'
      }
    },

    watch: {
      build: {
        files: ['sass/**/*.sass', 'bower_components/**/*.sass', 'docs_template/*.html'],
        tasks: ['sass:dev','exec:kss']
      },
      livereload: {
        files: ['docs/**/*'],
        options: { livereload: true }
      }
    },

    release: {
      options: {
        npm: false, //default: true
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['connect','open','watch']);
  grunt.registerTask('test', ['sass:dev']);
  grunt.registerTask('build', ['release']);

}
