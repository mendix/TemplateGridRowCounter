// Generated on 2015-10-30 using generator-mendix 1.0.0 :: http://github.com/JelteMX/generator-mendix
'use strict';

// In case you seem to have trouble starting Mendix through `grunt start-mendix`, you might have to set the path to the Mendix application.
// If it works, leave MODELER_PATH at null
var MODELER_PATH = null;
var MODELER_ARGS = '/file:{path}';

var path = require('path'),
    mendixApp = require('node-mendix-modeler-path'),
    shelljs = require('shelljs');

// In case you have a different path to the test project (currently in ./test/Test.mpr) point TEST_PATH to the Test-project (full path). Otherwise, leave at null
var TEST_PATH = null;
// Use this example if you want to point it to a different subfolder and specific Test project Name:
// var TEST_PATH = path.join(shelljs.pwd(), './<custom folder>/<Custom Test Project Name>.mpr');

module.exports = function (grunt) {
  var pkg = grunt.file.readJSON("package.json");
  grunt.verbose;
  grunt.initConfig({
    watch: {
      autoDeployUpdate: {
        "files": [ "./src/**/*" ],
        "tasks": [ "newer:copy", "compress" ],
        options: {
          debounceDelay: 250,
          livereload: true
        }
      }
    },
    compress: {
      makezip: {
        options: {
          archive: "./dist/" + pkg.name + ".mpk",
          mode: "zip"
        },
        files: [{
            expand: true,
            date: new Date(),
            store: false,
            cwd: "./src",
            src: ["**/*"]
          }]
      }
    },
    copy: {
      deployment: {
        files: [
          { dest: "./test/deployment/web/Widgets", cwd: "./src/", src: ["**/*"], expand: true }
        ]
      },
      mpks: {
        files: [
          { dest: "./test/Widgets", cwd: "./dist/", src: [ pkg.name + ".mpk"], expand: true }
        ]
      }
    },
    clean: {
      build: [
          "./dist/" + pkg.name + "/*",
          "./test/deployment/web/Widgets/" + pkg.name + "/*",
          "./test/Widgets/" + pkg.name + ".mpk"
        ]            
    }
  });
  
  grunt.loadNpmTasks("grunt-contrib-compress");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-newer");

  grunt.registerTask("start-mendix", function () {
    var done = this.async(),
        testProjectPath = TEST_PATH !== null ? TEST_PATH : path.join(shelljs.pwd(), '/test/Test.mpr');

    if (MODELER_PATH !== null || (mendixApp.err === null && mendixApp.output !== null && mendixApp.output.cmd && mendixApp.output.arg)) {
      grunt.util.spawn({
        cmd: MODELER_PATH || mendixApp.output.cmd,
        args: [
          (MODELER_PATH !== null ? MODELER_ARGS : mendixApp.output.arg).replace('{path}', testProjectPath)
        ]
      }, function () {
        done();
      });
    } else {
      console.error('Cannot start Modeler, see error:');
      console.log(mendixApp.err);
      done();
    }    
  });

  grunt.registerTask(
    "default",
    "Watches for changes and automatically creates an MPK file, as well as copying the changes to your deployment folder",
    [ "watch" ]
  );

  grunt.registerTask(
    "clean build",
    "Compiles all the assets and copies the files to the build directory.", 
    [ "clean", "compress", "copy" ]
  );

  grunt.registerTask(
    "build", 
    [ "clean build" ]
  );
};