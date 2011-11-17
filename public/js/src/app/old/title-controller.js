(function() {

    var TitleController = function(id) {
        tuna.view.ViewController.call(this, id);

        this.__$citySelect = null;
        this.__$cityWarning = null;
    };

    tuna.extend(TitleController, tuna.view.ViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('carousel');
    };

    TitleController.prototype._initListeners = function() {
        var self = this;

        this.__$citySelect = $('#city_list');
        this.__$cityWarning = $('#city_warning');

        this.__$citySelect.bind('change', function(event) {
            var cityName =  self.__$citySelect.val();

            self._db.set('is_game', cityName === '');

            self.__setCurrentCity(cityName);
        });

        tuna.dom.addChildEventListener(
            this._target, '.j-selection-next', 'click',
            function(event) {
                var isNotGame = !self._db.get('is_game');
                
                stepSelector.setIndexEnabled(1, isNotGame);
                stepSelector.setIndexEnabled(2, isNotGame);
            }
        );
    };

    TitleController.prototype._initData = function() {
        this.__loadUserInfo();
        this.__loadCityList();
    };

    TitleController.prototype.__setCurrentCity = function(cityName) {
        if (cityName === '') {
            cityName = this._db.get('user.location.original');
        }

        this._db.set('user.location.city', cityName);

        this._db.notify('cities');
        this._db.notify('user');
    };

    TitleController.prototype.__testCurrentCity = function() {
        var currentCity = this._db.get('user.location.city');
        var cities = this._db.get('cities');

        if (currentCity && cities) {
            this._db.set('user.location.original', currentCity);

            var isMatch = false;
            for (var i in cities) {
                if (cities[i]._id === currentCity) {
                    this.__$citySelect[0].selectedIndex = i;
                    isMatch = true;
                    break;
                }
            }

            if (!isMatch) {
                cities.unshift({});
            }

            this._db.set('is_game', !isMatch);


            this.__setCurrentCity(currentCity);
        }
    };

    TitleController.prototype.__loadUserInfo = function() {
        var self = this;

        var request = new tuna.net.Request(USER_INFO_URL);
        request.subscribe('complete', function(type, response) {
            var users = [];//JSON.parse(response);

            self._db.set('user', users[0]);
            self._db.set('user.location.city', 'Санкт-Петербург');

            self.__testCurrentCity();
        });

        request.send();
    };

    TitleController.prototype.__loadCityList = function() {
        var self = this;

        var request = new tuna.net.Request(CITIES_URL);
        request.subscribe('complete', function(type, response) {
            var cities = [];//JSON.parse(response);

            self._db.set('cities', [
                {_id: "1", value: "11" },
                {_id: "2", value: "22" },
                {_id: "3", value: "33" },
                {_id: "4", value: "44" }
            ]);

            self.__testCurrentCity();
        });

        request.send();
    };

    tuna.view.ViewController.registerController(new TitleController("title_step"));

})();