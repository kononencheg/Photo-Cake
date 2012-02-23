(function() {
    var FriendsPopup = function() {
        tuna.ui.Module.call(this, '.j-friends-popup');
    };

    tuna.utils.extend(FriendsPopup, tuna.ui.Module);

    FriendsPopup.prototype.initInstance = function(target) {
        var popup = null;
        var self = this;

        var popupElement =
                tuna.dom.selectOne(target.getAttribute('data-popup-selector'));

        var inputFilter = new tuna.ui.forms.InputFilter(popupElement);

        if (popupElement !== null) {
            popup = tuna.ui.popups.create(popupElement);

            tuna.dom.addEventListener(target, 'click', function(event) {
                popup.open();
            });
        }

        tuna.rest.call('social.friends.get', null, function(result) {
            inputFilter.setData(result);
        });


        tuna.dom.addChildEventListener(
            popupElement, '.j-send-button', 'click', function() {
                self.postImage(this.getAttribute('data-user-id'));
            }
        );

        inputFilter.init();

        return this;
    };

    FriendsPopup.prototype.postImage = function(userId) {
        var currentCake = model.cakes.getCurrentCake();

        tuna.rest.call('social.wall.post', {
            'image': currentCake.imageBase64,
            'user_id': userId
        }, function() {
            tuna.ui.popups.alert('Торт успешно опубликован!');
        });
    };

    tuna.ui.modules.register('friends-popup', new FriendsPopup());

})();