requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: '/public/js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        lib: './components',
        angular: './components/angular'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
    }
});

// Start the main app logic.
requirejs(['app'], function (app) {
    app.init();
});