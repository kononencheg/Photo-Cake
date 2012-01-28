(function() {
    var FriendsPopup = function() {
        tuna.ui.modules.Module.call(this, 'friends-popup', '.j-friends-popup');
    };

    tuna.extend(FriendsPopup, tuna.ui.modules.Module);

    FriendsPopup.prototype.initInstance = function(target) {
        tuna.dom.addEventListener(target, 'click', function(event) {
            tuna.dom.preventDefault(event);
            alert('I hate OK!');

            /*
            tuna.rest.call('cakes.uploadImage', {
                'image': self.__imageData
            }, function(result) {
                FAPI.UI.showNotification
                    ('Сматри какой я сделал тортик!', 'url=' + result);
            });
             */
        });
    };

    tuna.ui.modules.register(new FriendsPopup());

})();