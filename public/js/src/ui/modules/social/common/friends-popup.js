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

        var self = this;

        tuna.dom.addChildEventListener(
            popupContainer, '.j-send-button', 'click', function() {
                self.postImage(this.getAttribute('data-user-id'));
            }
        );

        return this;
    };

    FriendsPopup.prototype.postImage = function(userId) {
        var currentCake = model.cakes.getCurrentCake();

        tuna.rest.call('social.wall.post', {
            'image': currentCake.imageBase64,
            'user_id': userId
        }, function() {
            alert('Торт успешно опубликован!');
        });
    };

    tuna.ui.modules.register(new FriendsPopup());

})();