var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.txns = [{id:1,txnName:"Tea",txnAmt:15,"date":"13-02-2019"},{id:2,txnName:"FoodCourt",txnAmt:45,"date":"13-02-2019"}];
        });