var uglifyjs = require('uglify-js');
var fs = require('fs');

var args = process.argv;

var content = '';
var isMinify = false;
var outputFile = null;

var arg = null;
var file = null;
while(args.length > 0) {
    arg = args.shift();

    switch(arg) {
        case '--css':
        case '--js': {
            content += fs.readFileSync(args.shift()).toString() + '\n';
            break;
        }

        case '--css_output_file':
        case '--js_output_file': {
            outputFile = args.shift();
            break;
        }

        case '--minify': {
            isMinify = true;
            break;
        }
    }
}

if (isMinify) {
    var ast = uglifyjs.parser.parse(content);
    ast = uglifyjs.uglify.ast_mangle(ast);
    ast = uglifyjs.uglify.ast_squeeze(ast);
    content = uglifyjs.uglify.gen_code(ast);
}

if (outputFile !== null) {
    fs.writeFileSync(outputFile, content);
}
