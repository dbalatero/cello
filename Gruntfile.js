module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.initConfig({
    responsive_images: {
      thumb: {
        options: {
          sizes: [,{
            name: '@1x',
            width: 744,
          },{
            name: 'small',
            width: 366
          },{
            name: "small",
            width: 732,
            suffix: "@x2"
          },{
            name: '@2x',
            width: 1488
          }]
        },
        files: [{
          expand: true,
          src: ['projects/**/thumb/*.{jpg,gif,png}'],
          cwd: 'assets/img/_source/',
          dest: 'assets/img/'
        }]
      },detail: {
        options: {
          sizes: [,{
            name: '@1x',
            width: 1488,
          },{
            name: 'small',
            width: 744
          },{
            name: "small",
            width: 1488,
            suffix: "@x2"
          },{
            name: '@2x',
            width: 3696
          }]
        },
        files: [{
          expand: true,
          src: ['projects/**/detail/*.{jpg,gif,png}'],
          cwd: 'assets/img/_source/',
          dest: 'assets/img/'
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
        files: ['*.html', '_layouts/*.html', '_includes/*.html', 
                'blog/*.html', 'approach/*.html', 'contact/*.html', 'projects/*.html']
      }, // html
    }
  }) // init config
  grunt.registerTask('images', [ 'responsive_images:thumb', 'responsive_images:detail']);
  grunt.registerTask('default', 'watch');
  
}; //exports