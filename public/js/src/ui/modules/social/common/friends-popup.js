(function() {
    var FriendsPopup = function() {
        tuna.ui.modules.Module.call(this, 'friends-popup', '.j-friends-popup');
    };

    tuna.extend(FriendsPopup, tuna.ui.modules.Module);

    FriendsPopup.prototype.initInstance = function(target) {
        var popupModule = tuna.ui.modules.getModule('popup');
        var filtrationModule = tuna.ui.modules.getModule('filtration');

        var popup = popupModule.initInstance(target);
        var popupContainer = popup.getTarget();

        var friendsFiltration = filtrationModule.initInstance(popupContainer);

        tuna.rest.call('social.friends.get', function(result) {
            friendsFiltration.setData(result);
        });

        tuna.dom.addChildEventListener(
            popupContainer, '.j-send-button', 'click', function() {
                var currentCake = model.cakes.getCurrentCake();

                tuna.rest.call('social.wall.post', {
                    'image': currentCake.imageBase64,
                    'user_id': this.getAttribute('data-user-id')
                });
            }
        );

        return popup;
    };

    tuna.ui.modules.register(new FriendsPopup());

})();