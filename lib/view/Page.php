<?php

namespace view;

class Page {
    public function render($path) {
        include($path);
    }
}
