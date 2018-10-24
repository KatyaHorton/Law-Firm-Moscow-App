module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({

        imagemin: {
          dynamic: {
            options: {
              progressive: true
            },
            files: [{
              expand: true,
              cwd: 'client/src/components/images/',
              src: ['**/*.{png,jpg,JPG,svg}'],
              dest: 'client/src/components/images/'
            }]
          }
        },
        concat: {
            "options": { "separator": ";" },
            "build": {

            }
        }
    });

    // Load required modules
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Task definitions
    grunt.registerTask('default', ['concat'], ['imagemin']);


};
