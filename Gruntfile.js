module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		develop: {
			local: {
				file: 'index.js'
			}
		},
		watch: {
			options: {
				nospawn: true
			},
			server: {
				files: [
					'index.js',
					'server/**/*.js',
					'server/**/*.json'
				],
				tasks: [
					'develop:local'
				]
			}
		}
	});

	grunt.registerTask('default', ['develop:local', 'watch']);
};
