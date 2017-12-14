module.exports = function(grunt) {

  var css = grunt.file.read('style.css' , []);

  grunt.initConfig({
    replace: {
      dist: {
        options: {
          patterns: [
            {
              match: 'mycss',
              replacement: css
            }
          ]
        },
        files: [
          {expand: true, flatten: true, src: ['index.html'], dest: '../dev'}
        ]
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                         // Dictionary of files
          'style.css': 'style.scss'       // 'destination': 'source'
        }
      }
    },
    watch: {
      files: ['style.scss'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['sass', 'link_html']);
};