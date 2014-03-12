requirejs.config({
    baseUrl: "bower_components",
    paths: {
        modules: "../modules",
		easyPath: "../modules/folder1"
    }
});

require(["modules/folder1/myModule", "easyPath/myModule"], function() {
	console.log("done");
});
