alotaxi.factory('pickUpPlace', function() {
  pickUpPlace = {};
  pickUpPlace.to = { formatted_address: '88 Baxter Street' };
  pickUpPlace.from = { formatted_address: 'Center Market Street' };
  pickUpPlace.other01 = { formatted_address: [46.7280616 , -74.007204] };
  pickUpPlace.other02 = { formatted_address: [42.7280616 , -83.007204] };
  pickUpPlace.other03 = { formatted_address: [43.7280616 , -70.007204] };
  pickUpPlace.other04 = { formatted_address: [44.7280616 , -93.007204] };
  pickUpPlace.other05 = { formatted_address: [45.7280616 , -63.007204] };
  pickUpPlace.deliver = {
    "name": "John",
    "place": "60 Baxter Street",
    "placePosition": [40.7280616 , -74.007204],
    "time": "10''",
    "timePosition": [40.7173288, -73.99946879999999],
    "long": "~2km",
  };
  return pickUpPlace;
});

alotaxi.factory('driver', function() {
  driver = {};
  driver = {
    "name": "Doe John",
    "code": "A123 546 879",
    "phone": "+84 9123 456",
    "rating": "S",
    "start": "A point",
    "end": "B point",
    "avatar" : 'img/avatar.jpg',
    "distance": "300m",
    "carPlate": "29A-8888",
  };
  return driver;
});

alotaxi.factory('user', function() {
  user = {};
  user = {
    "name": "Doe John",
    "code": "A123 546 879",
    "phone": "+84 9123 456",
    "rating": "S",
    "start": "A point",
    "end": "B point",
    "avatar" : 'img/avatar.jpg',
  };
  return user;
});
