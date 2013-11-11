
module.exports = function (grunt) {


grunt.initConfig({
  imagemin: {                          // Task
//    static: {                          // Target
//      options: {                       // Target options
//        optimizationLevel: 3
//      },
//      files: {                         // Dictionary of files
//        'dist/img.png': 'src/img.png', // 'destination': 'source'
//        'dist/img.jpg': 'src/img.jpg',
//        'dist/img.gif': 'src/img.gif'
//      }
//    }
    dynamic: {
        options: {
            optimizationLevel: 4
        },
    files: [{
        expand: true,                  // Enable dynamic expansion
        cwd: 'public/images',                   // Src matches are relative to this path
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
        dest: 'public/dist/images'                  // Destination path prefix
    }]
    }
  }
});

grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['imagemin']);
};
