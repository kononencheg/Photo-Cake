<?php

set_include_path(implode(PATH_SEPARATOR, array(
    realpath($_SERVER["DOCUMENT_ROOT"] . '/../lib'),
    get_include_path(),
)));

function loadClass($className) {
    $classPath = str_replace('\\', \DIRECTORY_SEPARATOR, $className) . '.php';

    $includePaths = explode(PATH_SEPARATOR, ini_get('include_path'));
    foreach($includePaths as $path) {
        if(file_exists($path . DIRECTORY_SEPARATOR . $classPath)) {
            require($classPath);
            break;
        }
    }

    return class_exists($className, false);
}

spl_autoload_register('loadClass');
