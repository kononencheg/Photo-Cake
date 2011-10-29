(function() {
	tuna.ui.modules.register('swf', {
		init: function (target, container) {
            $('.j-swf', target).each(function() {
                var movieURL = this.getAttribute('data-movie-url');
                swfobject.embedSWF(movieURL, this.id, '100%', '100%', '10.0.0');
            });
		}
	});
})();