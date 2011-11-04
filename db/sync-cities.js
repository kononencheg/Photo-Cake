db.users.mapReduce(function() {
    emit(this.city, 1);
}, function(key, values) {
    return key
}, {
    out: { merge: 'cities' }
});

db.cities.find().forEach(printjson)