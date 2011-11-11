var db = new tuna.control.DataDispatcher();

var body = new tuna.ui.DataContainer(document.body);
body.setDB(db);
body.requireModule('template-container');
body.requireModule('item-selector');
body.initModules();