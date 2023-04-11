alotaxi.controller('alotaxiCtrl', ['$scope', '$rootScope', '$location', '$ionicModal', 'pickUpPlace', 'driver', 'user',
    function($scope, $rootScope, $location, $ionicModal, pickUpPlace, driver, user) {
        $scope.place = pickUpPlace;
        $scope.user = user;
        $scope.driver = driver;
        $scope.showFormPickup = true;

        $scope.placePickupFrom = function() {
           $scope.place.from = this.getPlace();
        };
        $scope.placePickupTo = function() {
           $scope.place.to = this.getPlace();
        };
        $scope.default = function() {
           $location.path('/app/');
        };
        $scope.doLogin = function() {
           $location.path('/app/requestCar');
        };
        $scope.resetRequestCar = function() {
            $scope.showFormPickup = true;
            $scope.showSeatAvaiable = false;
            $scope.showRequestWating = false;
            $rootScope.aloTaxiHeaderBarClass = '';
            $location.path('/app/requestCar', true);
        }
        $scope.requestCar = function() {
            if(!$scope.showRequestWating && !$scope.showSeatAvaiable) {
                $scope.showSeatAvaiable = true;
            } else if($scope.showRequestWating) {
                $scope.resetRequestCar();
                $scope.confirm();
            } else {
                $scope.requestCarFinally(0);
            }
        };
        $scope.requestCarFinally = function(seatAvaiable) {
            $scope.showFormPickup = false;
            $scope.showSeatAvaiable = false;
            $scope.showRequestWating = true;
            $rootScope.aloTaxiHeaderBarClass = 'overlay';
        }
        $scope.confirm = function() {
            $location.path('/app/confirm');
        }
        $scope.passengerStarting = function() {
            $location.path('/app/passengerStarting');
        }
        $scope.passengerEnd = function() {
            $location.path('/app/passengerEnd');
        }
        $scope.driverStarting = function() {
            $location.path('/app/driverStarting');
        }
        $scope.driverEnd = function() {
            $location.path('/app/driverEnd');
        }
    }
]);
