var fs = require('fs'),
    cp = require('child_process');

var JS_FOLDER = 'public/js/';

desc('Show tasks');
task('default', function() {
    cp.exec('jake -T', function(error, stdout, stderr) {
        console.log(stdout);
    });
});

desc('Glue and compress javascript client');
task('compress-js', compressJS);

desc('Compile LESS files into CSS');
task('compile-css', compileCSS);

desc('Watch JS changing to auto compress');
task('watch-js', function() {
    fs.watch(JS_FOLDER, function (event, filename) {
        console.log('event is: ' + event);
        if (filename) {
            console.log('filename provided: ' + filename);
        } else {
            console.log('filename not provided');
        }
    });
});

function compileCSS() {
    cp.exec('cd public; ' +
            'rm css/style.css; ' +
            'lessc -x css/style.less >> css/style.css');
}

function combine(files) {
    var result = '';

    for (var i in files) {
        result += fs.readFileSync(JS_FOLDER + files[i]);
    }

    return result;
}

function compressJS() {
    var includes = JSON.parse(fs.readFileSync('public/js/includes.json'));

    var file = null;
    for (var group in includes) {
        file = JS_FOLDER + group;

        fs.writeFileSync(file + '.js', combine(includes[group]));
        console.log('Created "' + file + '.js".');

        /*(function(file) {
            cp.exec('uglifyjs -v -nc -o ' + file + '.min.js ' + file + '.js',
                function (error, stdout, stderr) {
                    var mainStats = fs.statSync(file + '.js');
                    var minStats = fs.statSync(file + '.min.js');
                    var rate = Math.round(100 * minStats.size/mainStats.size);

                    console.log('Created "' + file + '.min.js" (' + rate + '%).');
                }
            );
        })(file);*/
    }
}