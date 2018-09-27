angular.module('myApp', []).controller('CDcontroller', function($scope) {
    $scope.cdID = "000",
    $scope.cdTitle = "Deafault Title"
	$scope.cdPrice = "Default Price"
	$scope.getAllDetails = function(){
		return "ID: "+$scope.cdID+" | Title: "+$scope.cdTitle+" | Price: "+$scope.cdPrice;
	};
});