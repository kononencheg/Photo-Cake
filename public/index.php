<?php

session_start();

if (isset($_GET['i'])){
    $cakeID = new MongoId($_GET['i']);

    $mongo = new Mongo();
    $db = $mongo->cakes;

    $cake = $db->dummy_cakes->findOne(array('_id' => $cakeID));
}

?>
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8">

	    <?php if (isset($cake)) { ?>
		    <link rel="image_src" href="http://<?php echo $_SERVER['HTTP_HOST'] . $cake['cake'] ?>" />
        <?php } ?>

	    <title>Фотонаторте</title>

	    <link href="/css/dummy.css"  media="screen" rel="stylesheet" type="text/css" />

        <!--script type="text/javascript" src="/js/lib/swfobject.js"></script-->
        <script type="text/javascript" src="http://yandex.st/share/share.js"></script>

        <!--script>
            var DECO_DATA = '{"weightsList":[1,1.5,2,2.5,3,3.5,4,4.5,5],"ratiosList":[0.6,0.55,0.5,0.45,0.4,0.38,0.32,0.3,0.25],"personsList":[6,10,15,20,25,30,35,40,45],"decoSelectors":[{"deco":[{"url":"/img/app/deco/cherry.png","autorotate":true,"name":"cherry","description":"Вишня"},{"url":"/img/app/deco/grape.png","autorotate":true,"name":"grape","description":"Виноград"},{"url":"/img/app/deco/kiwi.png","autorotate":true,"name":"kiwi","description":"Киви"},{"url":"/img/app/deco/raspberry.png","autorotate":true,"name":"raspberry","description":"Малина"},{"url":"/img/app/deco/strawberry.png","autorotate":true,"name":"strawberry","description":"Клубника"},{"url":"/img/app/deco/orange.png","autorotate":true,"name":"orange","description":"Апельсин"},{"url":"/img/app/deco/peach.png","autorotate":true,"name":"peach","description":"Персик"},{"url":"/img/app/deco/lemon.png","autorotate":true,"name":"lemon","description":"Лимон"}]},{"deco":[{"url":"/img/app/deco/pig1.png","autorotate":false,"name":"pig1","description":"Сахарная фигурка"},{"url":"/img/app/deco/car1.png","autorotate":false,"name":"car1","description":"Сахарная фигурка"},{"url":"/img/app/deco/hare1.png","autorotate":false,"name":"hare1","description":"Сахарная фигурка"},{"url":"/img/app/deco/hedgehog1.png","autorotate":false,"name":"hedgehog1","description":"Сахарная фигурка"},{"url":"/img/app/deco/moose1.png","autorotate":false,"name":"moose1","description":"Сахарная фигурка"},{"url":"/img/app/deco/owl1.png","autorotate":false,"name":"owl1","description":"Сахарная фигурка"},{"url":"/img/app/deco/pin1.png","autorotate":false,"name":"pin1","description":"Сахарная фигурка"},{"url":"/img/app/deco/sheep1.png","autorotate":false,"name":"sheep1","description":"Сахарная фигурка"},{"url":"/img/app/deco/raven1.png","autorotate":false,"name":"raven1","description":"Сахарная фигурка"},{"url":"/img/app/deco/bear1.png","autorotate":false,"name":"bear1","description":"Сахарная фигурка"},{"url":"/img/app/deco/car2.png","autorotate":false,"name":"car2","description":"Сахарная фигурка"},{"url":"/img/app/deco/car3.png","autorotate":false,"name":"car3","description":"Сахарная фигурка"},{"url":"/img/app/deco/mat1.png","autorotate":false,"name":"mat1","description":"Сахарная фигурка"},{"url":"/img/app/deco/doll1.png","autorotate":false,"name":"doll1","description":"Сахарная фигурка"},{"url":"/img/app/deco/doll2.png","autorotate":false,"name":"doll2","description":"Сахарная фигурка"}]},{"deco":[{"url":"/img/app/deco/flower1.png","autorotate":false,"name":"flower1","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower2.png","autorotate":false,"name":"flower2","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower3.png","autorotate":false,"name":"flower3","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower4.png","autorotate":false,"name":"flower4","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower5.png","autorotate":false,"name":"flower5","description":"Сахарная фигурка"},{"url":"/img/app/deco/flower6.png","autorotate":false,"name":"flower6","description":"Сахарная фигурка"}]}]}';

            function $(id) { return document.getElementById(id); }

            function show(id) { $(id).style.display = 'block'; }
            function hide(id) { $(id).style.display = 'none'; }

            function handleEmail() { hide('email_form'); }
            function handleEmailError() { alert('Извините, ваш e-mail не действителен!'); }

            function onFlashReady() {
                cakeDesigner = swfobject.getObjectById('cake_designer');
                cakeDesigner.initialize(DECO_DATA, 'round', 0.75);
            }

            function saveCakeData(junk, imageData) {
                $('image_hidden').value = imageData;

                if (authToken) {
                    $('image_form').submit();

                    hide('login_dialog');
                    show('cake_dialog');
                }

                show('popup');
            }

            function handleAuth(token) {
                authToken = token;

                if (authToken) {
                    $('image_form').submit();
                } else {
                    alert('Извините, авторизация не удалась! Попробуйте использовать другою социальнцю сеть!');
                }
            }

            function handleImage(data) {
                $('cake_image').src = data.cake;
                $('cake_link').href = data.cake;

                initCakeShare(data._id.$id, data.cake);

                hide('login_dialog');
                show('cake_dialog');
            }

            function initCakeShare(id, image) {
                var YaShareInstance = new Ya.share({
                    element: 'cake_share',
                    link: 'http://<?php echo $_SERVER['HTTP_HOST'] ?>?i=' + id,
                    image: image,
                    elementStyle: {
                        type: 'none'
                    }
                });
            }

            swfobject.registerObject('cake_designer', '9.0.0');

            var cakeDesigner = null;
            var authToken = '<?php if (isset($_SESSION['user'])) echo $_SESSION['user']->access_token; ?>';

        </script-->
    </head>
    <body>
        <div class="layout">
            <div class="header">
                <div id="share" class="share-block">
                    <div class="share-title">Поделитесь с друзьями:</div>
                    <div class="yashare-auto-init"
                         data-yashareL10n="ru"
                         data-yashareType="none"
                         data-yashareQuickServices="facebook,lj,odnoklassniki,vkontakte,yaru"></div>
                </div>

                <div class="logo">
                    <img alt="Фотонаторте" src="/img/app/logo.png" />
                    <div class="logo-subtitle">Скоро открытие! А пока...</div>
                </div>
            </div>

            <div class="body">
                <div class="left-column">
                    <h2>Что это?</h2>

                    <p>
                        Никогда не пекли тортики?
                    </p>

                    <p>
                        Попробуйте: создайте свой дизайн торта – изменяйте форму,
                        украшайте, подписывайте – дарите своим близким людям!
                    </p>

                    <p>
                        Готовится к открытию: скоро мы сможем изготавливать торты
                        по Вашему дизайну и привозить их к Вам в день праздника!
                    </p>
                    <form id="email_form" target="frame_transport" action="/scripts/save-email.php" method="POST">
                        <p>
                            Сообщите мне, когда Вы откроетесь:
                        </p>
                        <p>
                            <input class="email-text" name="email" type="text" />
                        </p>
                        <p>
                            <input class="submit-email" type="submit" value="Хочу &raquo;"/>
                        </p>
                    </form>
                    <p>Кондитерским: <a href="#">условия сотрудничества</a>.</p>
                </div>
                <div class="center-column">
                    <h2>Приложение</h2>
                    <iframe scrolling="no" frameborder="0" src="http://fotonatorte.ru/app.php"  width="700px" height="810px"></iframe>
                    <!--
                    <object id="cake_designer" width="660" height="665"
                            classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">

                        <param name="movie" value="/swf/cake-designer.swf" />
                        <param name="allowscriptaccess" value="always" />
                        <param name="wmode" value="opaque" />

                        <object width="660" height="665" wmode="opaque"
                                data="/swf/cake-designer.swf"
                                type="application/x-shockwave-flash"
                                allowscriptaccess="always">

                            Для работы приложения вам необходим Flash Player!

                        </object>

                    </object-->
                </div>
            </div>
        </div>

        <form id="image_form" class="hidden" target="frame_transport"
              action="/scripts/save-image.php" method="POST">
            <input id="image_hidden" type="hidden" name="image_data" />
        </form>

        <iframe id="frame_transport" name="frame_transport"
                src="about: blank" width="0" height="0"></iframe>

        <div id="popup" class="hidden">
            <div class="popup-overlay"></div>
            <div class="popup" onclick=" if((event.target || event.srcElement) === this) hide('popup');">
                <div class="popup-content">

                   <div id="cake_dialog" class="cake-dialog hidden">
                        <h2>Ваш тортик!</h2>

                        <img id="cake_image" alt="Ваш тортик" src="" />

                        <a href="#" onclick="hide('popup'); return false;">Вернуться</a>,
                        <a id="cake_link" href="#" target="_blank">Сохранить</a> или <br />
                        Поделиться: <span id="cake_share"></span>


                    </div>

                    <div id="login_dialog" class="login-dialog">
                        <div>
                            Для того чтобы сохранить ваш тортик вам необходимо
                            авторизоваться на сайте, используя:
                        </div>

                        <div>
                            <div id="uLogin"></div>
                            <script src="http://ulogin.ru/js/widget.js?display=panel&fields=first_name,last_name,photo&providers=vkontakte,odnoklassniki,mailru,facebook&hidden=twitter,google,yandex,livejournal,openid&redirect_uri=http://<?php echo $_SERVER['HTTP_HOST'] ?>/scripts/auth-handler.php&callback=handleAuth"></script>
                        </div>

                    </div>

                </div>
                <div class="align-helper"></div>
            </div>
        </div>

        <?php if (isset($cake)) { ?>
            <div class="popup-overlay"></div>
            <div class="popup">
                <div class="popup-content">

                    <div class="cake-dialog">
                        <h2>Мой торт!</h2>

                        Автор: <a href="<?php echo $cake['user']['identity'] ?>">
                            <?php echo $cake['user']['first_name'] . ' ' . $cake['user']['last_name'] ?>
                        </a>

                        <img alt="Мой тортик" src="http://<?php echo $_SERVER['HTTP_HOST'] . $cake['cake'] ?>" />

                        <a href="http://<?php echo $_SERVER['HTTP_HOST'] ?>">
                           Сделать свой!
                        </a>
                    </div>

                </div>
                <div class="align-helper"></div>
            </div>
        <?php } ?>
    </body>
</html>