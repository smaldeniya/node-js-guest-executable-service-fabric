module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-execute');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.js", 'src/**/*.json'],
                    dest: "bin/",
                    ext: ".js"
                }]
            }
        },
        watch: {
            files: ['src/**/*.js', 'src/**/*.json'],
            tasks: ['babel']
        },
        execute: {
            target: {
                src: ['bin/server.js']
            }
        },
        eslint: {
            options: {
                configFile: './eslint.json'
            },
            target: ['src/**/*.js']
        }

    });

    grunt.registerTask('default', ['eslint', 'babel']);
    grunt.registerTask('dev', ['eslint', 'babel', 'watch']);

};
