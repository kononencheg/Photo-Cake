(function() {

    var TitleController = function(id) {
        tuna.control.ViewController.call(this, id);

        this.__$citySelect = null;
    };

    tuna.extend(TitleController, tuna.control.ViewController);

    TitleController.prototype._requireModules = function() {
        this._container.requireModule('carousel');
    };

    TitleController.prototype._initListeners = function() {
        var self = this;

        this.__$citySelect = $('select#city_list');
        this.__$citySelect.bind('change', function(event) {
            var index = self.__$citySelect[0].selectedIndex;
            var cityName = self._db.get('cities.' + index + '._id');

            self._db.set('is_city_available', cityName !== undefined)

            self.__updateCity(cityName);
        });

        tuna.dom.addChildEventListener(
            this._target, '.j-selection-next', 'click',
            function(event) {
                var isAvailable = self._db.get('is_city_available');
                
                stepSelector.setIndexEnabled(1, isAvailable);
                stepSelector.setIndexEnabled(2, isAvailable);
            }
        );
    };

    TitleController.prototype._initData = function() {
        this.__loadUserInfo();
        this.__loadCityList();
    };

    TitleController.prototype.__updateCity = function(cityName) {
        var isCityAvailable = this._db.get('is_city_available');
        var currentCity = isCityAvailable ? cityName : this._db.get('user.location.original');

        if (isCityAvailable) {
            $('#city_warning').hide();
        } else {
            $('#city_warning').show();
        }

        this._db.set('is_city_available', isCityAvailable);
        this._db.set('user.location.city', currentCity);

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
                    isMatch = true;
                    this.__$citySelect[0].selectedIndex = i;
                    break;
                }
            }

            if (!isMatch) {
                cities.unshift({});
            }

            this.__updateCity(currentCity);
        }
    };

    TitleController.prototype.__loadUserInfo = function() {
        var self = this;

        var request = new tuna.net.Request(USER_INFO_URL);
        request.subscribe('complete', function(type, response) {
            var users = JSON.parse(response);

            self._db.set('user', users[0]);
            self._db.set('user.location.city', 'Суперово');

            self.__testCurrentCity();
        });

        request.send();
    };

    TitleController.prototype.__loadCityList = function() {
        var self = this;

        var request = new tuna.net.Request(CITIES_URL);
        request.subscribe('complete', function(type, response) {
            var cities = JSON.parse(response);

            self._db.set('cities', cities);

            self.__testCurrentCity();
        });

        request.send();
    };

    tuna.control.ViewController.registerController(new TitleController("title_step"));

})();