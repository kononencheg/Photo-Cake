(function() {

    window['main'] = function() {
        tuna.config.init({});

        tuna.dom.setSelectorEngine($.find);

        ui.Popup.registerAlertElement(tuna.dom.selectOne('#alert_popup'));
        ui.Popup.registerConfirmElement(tuna.dom.selectOne('#confirm_popup'));

        var container = new tuna.ui.container.TransformContainer(document.body);
        container.init();
    }

})();
