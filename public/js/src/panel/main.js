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