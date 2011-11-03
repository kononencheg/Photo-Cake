<?php

require_once('../lib/auth/session.php');
require_once('../lib/net/request.php');

$session = new Session();
$request = new Request();

?>
<!DOCTYPE HTML>
<html>
    <head>
        <title>Фотонаторте</title>

        <meta charset="utf-8" />

        <link href="/css/dummy.css"  media="screen" rel="stylesheet" type="text/css" />

        <script src="/js/lib/swfobject.js" charset="utf-8"></script>

        <script>
            function $(id) { return document.getElementById(id); }

            function show(id) { $(id).style.display = 'block'; }
            function hide(id) { $(id).style.display = 'none'; }

            function handleEmail() { hide('email_form'); }
            function handleEmailError() { alert('Извините, ваш e-mail не действителен!'); }

            function onFlashReady() {
                cakeDesigner = swfobject.getObjectById('cake_designer');
                cakeDesigner.initialize('round', 0.75);
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
            var authToken = '<?php if (isset($session->user)) echo $session->user->access_token; ?>';

        </script>
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
                    <img alt="Фотонаторте" src="/img/logo.png" />
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
                </div>
                <div class="center-column">
                    <h2>Делаем торт!</h2>
                    <object id="cake_designer" width="660" height="600"
                            classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">

                        <param name="movie" value="/swf/cake-designer-fake.swf" />
                        <param name="allowscriptaccess" value="always" />
                        <param name="wmode" value="opaque" />

                        <!--[if !IE]>-->
                        <object width="660" height="600" wmode="opaque"
                                data="/swf/cake-designer-fake.swf"
                                type="application/x-shockwave-flash"
                                allowscriptaccess="always">
                        <!--<![endif]-->

                            Для работы приложения вам необходим Flash Player!

                        <!--[if !IE]>-->
                        </object>
                        <!--<![endif]-->

                    </object>
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

                    <div id="cake_dialog" class="cake-dialog hidden">
                        <h2>Ваш тортик!</h2>

                        <img id="cake_image" alt="Ваш тортик" src="" />

                        Поделиться: <div id="cake_share"></div>
                    </div>

                </div>
                <div class="align-helper"></div>
            </div>
        </div>

        <?php if (isset($request->i)) { ?>
            <?php require('scripts/user-cake.php'); ?>
        <?php } ?>


        <script type="text/javascript" src="http://yandex.st/share/share.js" charset="utf-8"></script>
    </body>
</html>