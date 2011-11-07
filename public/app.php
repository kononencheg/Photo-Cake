<?php

require_once('../lib/net/request.php');
require_once('../lib/auth/session.php');

$request = new Request(Request::GET);

$session = new Session();
$session->app = $request->getSource();

?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        
        <title>Заказ торта</title>

        <link rel="stylesheet/less" type="text/css" href="/css/app/style.less">
        
        <script src="/js/lib/less.js" type="text/javascript"></script>
    </head>
        
    <body class="j-item-selector">
        <div class="container">
            <div id="title_step"
                 class="j-selection-item j-template-container step current"
                 data-template-id="title_template"
                 data-template-url="/templates/app/title-step.html"
                 data-db-path=""></div>

            <div id="first_step"
                 class="j-selection-item j-template-container step"
                 data-template-id="first_step_template"
                 data-template-url="/templates/app/first-step.html"
                 data-db-path="view"></div>

            <div id="second_step"
                 class="j-selection-item j-template-container step"
                 data-template-id="second_step_template"
                 data-template-url="/templates/app/second-step.html"
                 data-db-path="view"
                 data-init-on="ui-select"></div>

            <div id="third_step"
                 class="j-selection-item j-template-container step"
                 data-template-url="/templates/app/third-step.html"
                 data-init-on="ui-select"></div>

            <div id="result_step"
                 class="j-selection-item j-template-container step"
                 data-template-url="/templates/app/share-step.html"
                 data-init-on="ui-select"></div>
        </div>

        <script src="/js/lib/tuna.js"></script>

        <script src="/js/lib/tuna/utils/i-notifier.js"></script>
        <script src="/js/lib/tuna/utils/notifier.js"></script>

        <script src="/js/lib/tuna/net/i-request.js"></script>
        <script src="/js/lib/tuna/net/request.js"></script>

        <script src="/js/lib/tuna/dom.js"></script>

        <script src="/js/lib/tuna/tmpl/data/data-node.js"></script>
        <script src="/js/lib/tuna/tmpl/data/path-evaluator.js"></script>

        <script src="/js/lib/tuna/tmpl/settings/spot.js"></script>
        <script src="/js/lib/tuna/tmpl/settings/attribute.js"></script>
        <script src="/js/lib/tuna/tmpl/settings/condition.js"></script>
        <script src="/js/lib/tuna/tmpl/settings/list.js"></script>
        <script src="/js/lib/tuna/tmpl/settings/template.js"></script>

        <script src="/js/lib/tuna/tmpl/markup/i-markup-extractor.js"></script>
        <script src="/js/lib/tuna/tmpl/markup/spot-extractor.js"></script>
        <script src="/js/lib/tuna/tmpl/markup/list-extractor.js"></script>
        <script src="/js/lib/tuna/tmpl/markup/attribute-extractor.js"></script>
        <script src="/js/lib/tuna/tmpl/markup/condition-extractor.js"></script>
        <script src="/js/lib/tuna/tmpl/markup/markup-template-builder.js"></script>

        <script src="/js/lib/tuna/tmpl/unit/i-list-item-router.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/list-container-router.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/compiled-unit.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/spot.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/attribute.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/condition.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/list.js"></script>
        <script src="/js/lib/tuna/tmpl/unit/template.js"></script>

        <script src="/js/lib/tuna/tmpl/compile/i-item-compiler.js"></script>
        <script src="/js/lib/tuna/tmpl/compile/template-compiler.js"></script>
        <script src="/js/lib/tuna/tmpl/compile/spot-compiler.js"></script>
        <script src="/js/lib/tuna/tmpl/compile/attribute-compiler.js"></script>
        <script src="/js/lib/tuna/tmpl/compile/condition-compiler.js"></script>
        <script src="/js/lib/tuna/tmpl/compile/list-compiler.js"></script>

        <script src="/js/lib/tuna/tmpl/template-transformer.js"></script>
        <script src="/js/lib/tuna/tmpl/i-transform-handler.js"></script>

        <script src="/js/lib/tuna/ui/container.js"></script>
        <script src="/js/lib/tuna/ui/data-container.js"></script>
        <script src="/js/lib/tuna/ui/template-container.js"></script>
        <script src="/js/lib/tuna/ui/item-selector.js"></script>
        
        <script src="/js/lib/tuna/ui/modules.js"></script>
        <script src="/js/lib/tuna/ui/modules/module.js"></script>
        <script src="/js/lib/tuna/ui/modules/template-container.js"></script>
        <script src="/js/lib/tuna/ui/modules/item-selector.js"></script>

        <script src="/js/lib/tuna/control/data-dispatcher.js"></script>
        <script src="/js/lib/tuna/control/view-controller.js"></script>

        <script src="/js/lib/jquery/jquery-1.6.4.js"></script>

        <script src="/js/lib/jquery/ui/jquery.ui.core.js"></script>
        <script src="/js/lib/jquery/ui/jquery.ui.widget.js"></script>
        <script src="/js/lib/jquery/ui/jquery.ui.mouse.js"></script>
        <script src="/js/lib/jquery/ui/jquery.ui.slider.js"></script>

        <script src="/js/lib/sizzle.js"></script>
        <script src="/js/lib/json.js"></script>
        <script src="/js/lib/swfobject.js"></script>

        <script src="/js/src/ui/popup.js"></script>
        <script src="/js/src/ui/carousel.js"></script>

        <script src="/js/src/ui/modules/swf.js"></script>
        <script src="/js/src/ui/modules/popup.js"></script>
        <script src="/js/src/ui/modules/slider.js"></script>
        <script src="/js/src/ui/modules/carousel.js"></script>

        <script src="/js/src/app/title-controller.js"></script>
        <script src="/js/src/app/first-step-controller.js"></script>
        <script src="/js/src/app/second-step-controller.js"></script>
        <script src="/js/src/app/third-step-controller.js"></script>
        <script src="/js/src/app/selection-popup-controller.js"></script>

        <!-- Инициализация -->
        <script>
            var DIMENSIONS_URL    = '/api/dimensions.php';
            var RECIPES_URL       = '/api/recipes.php';
            var PHOTO_GALLERY_URL = '/api/photo-gallery.php';
            var USER_INFO_URL     = '/api/user-info.php';
            var CITIES_URL        = '/api/cities.php';

            // Хранилище
            var db = new tuna.control.DataDispatcher();

            // Контейнер страницы
            var body = new tuna.ui.DataContainer(document.body);
            body.setDB(db); // Глобальное хранилище
            body.requireModule('template-container'); // модули
            body.requireModule('item-selector');

            var stepSelector = null;
            tuna.dom.addOneEventListener(document.body, 'ui-item-selector-init', function(event) {
                stepSelector = event.data;
            });

            body.initModules();

        </script>
    </body>
</html>