<?php

namespace cakes\view;

class Page {
    public function render($path) {
        include($path);
    }
}
