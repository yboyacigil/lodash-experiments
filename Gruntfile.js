module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    "build/arrays.js": "src/arrays.js"
                }
            }
        }
    });

    grunt.registerTask("default", ["babel"]);
};