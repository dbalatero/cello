module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.initConfig({
    responsive_images: {
      prod: {
        options: {
          sizes: [,{
            name: '@1x',
            width: 1000,
            quality: 90
          },{
            name: 'small',
            width: 600,
            quality: 80
          },{
            name: "small",
            width: 1200,
            suffix: "@2x",
            quality: 80
          },{
            name: '@2x',
            width: 2000,
            quality: 90
          }]
          
        },
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'assets/img/gallery/_source/',
          dest: 'assets/img/gallery/'
        }]
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/script.js': ['assets/js/*.js']
        } // files
      } // my_target
    }, // uglify
    compass: {
      dev: {
        options: {
          config: 'config.rb'
        } // options
      } //dev
    }, // compass
    watch : {
      options: { livereload: true },
      scripts: {
        files: ['assets/js/*.js'],
        tasks: ['uglify']
      }, // script
      sass: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['compass:dev']
      }, // sass
      html: {
        files: ['*.html', '_layouts/*.html', '_includes/*.html']
      }, // html
    }
  }) // init config
  grunt.registerTask('images', 'responsive_images:prod');
  grunt.registerTask('default', 'watch');
  
}; //exports