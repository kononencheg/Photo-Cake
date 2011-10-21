<?php

session_start();

// Move to ini file
$applicationsData = array(
    'vk' => array(
        'app_code' => '2649910',
        'app_secret' => '2tnQ0UHwhcpmgVMZupu7',
        'app_settings' => 'friends,wall',

        'auth_url' => 'http://api.vkontakte.ru/oauth/authorize',
        'token_url' => 'https://api.vkontakte.ru/oauth/access_token'
    ),
    'ok' => array(
        'app_code' => '4908032',
        'app_secret' => 'CC7450FC9662E854B06D959C',
        'app_settings' => 'PHOTO CONTENT',

        'auth_url' => 'http://www.odnoklassniki.ru/oauth/authorize',
        'token_url' => 'http://api.odnoklassniki.ru/oauth/token.do'
    )
);

if (isset($_GET['auth_target'])) {

    $jsCallback = $_GET['js_callback'];
    $authTarget = $_GET['auth_target'];
    $appData = $applicationsData[$authTarget];

    $_SESSION['auth_target'] = $authTarget;
    $_SESSION['js_callback'] = $jsCallback; // "OK" OAuth bug

    header(
        'Location: ' . $appData['auth_url'] .
        '?client_id=' . $appData['app_code'] .
        '&scope=' . $appData['app_settings'] .
        '&redirect_uri=http://' . $_SERVER['SERVER_NAME'] . $_SERVER['PATH_INFO'] .
        '&response_type=code'
    );

} elseif (isset($_GET['code'])) {

    $tokenCode = $_GET['code'];

    $jsCallback = $_SESSION['js_callback'];
    unset($_SESSION['js_callback']);

    $authTarget = $_SESSION['auth_target'];
    $appData = $applicationsData[$authTarget];

    $response = http_parse_message(http_post_fields(
        $appData['token_url'], array(
            'client_id' => $appData['app_code'],
            'client_secret' => $appData['app_secret'],
            'code' => $tokenCode,
            'grant_type' => 'authorization_code' // "OK" only
        )
    ))->body;

    $oauthData = json_decode($response);
    
    $isSuccess = !isset($oauthData->error);
    if ($isSuccess) {
        $_SESSION['oauth_data'] = $oauthData;
    }

    auth_callback($jsCallback, $isSuccess);
}

function auth_callback($name, $isSuccess) {
    ?>
        <script>
            opener.<?php echo $name ?>('<?php echo $isSuccess ?>');
            close();
        </script>
    <?php
}
?>