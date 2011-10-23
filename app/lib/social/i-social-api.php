<?php

interface social_ISocialApi {

    function getOAuthPopupURL();

    function applyAuthorizationCode($code);

    function isAuthorizationSuccessfull();

    function getUserData();
}
