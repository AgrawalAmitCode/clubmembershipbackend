var app=angular.module("home");

app.controller('PermanentFacilitiesCtrl', function($scope, $state,$http,$rootScope,url) {	
	
	
	 $scope.roles = [
	                 'tableTennis', 
	                 'badminton', 
	                 'billiards', 
	                 'healthClub',
	                 'lawnTennis',
	                 'swimming', 
	                 'cricket', 
	                 'playground', 
	                 'cardRoom',
	                 'library',
	                 'restaurantBar', 
	                 'banquetHall', 
	                 'conferenceHall'               
	               ];
	 $scope.user = {
	      roles: ['user']
	 };
	
		$scope.check=function(id){
			if($scope.tempOption==="tableTennis"||$scope.tempOption==="badminton"||$scope.tempOption==="billiards"||
					$scope.tempOption==="healthClub"||$scope.tempOption==="squash"){
				var category='Indoor'
			}
			if($scope.tempOption==="lawnTennis"||$scope.tempOption==="swimming"||$scope.tempOption==="cricket"||
					$scope.tempOption==="playground"){
				var category='Outdoor'
			}
			if($scope.tempOption==="cardRoom"||$scope.tempOption==="library"||$scope.tempOption==="restaurantBar"||
					$scope.tempOption==="banquetHall"||$scope.tempOption==="conferenceHall"){
				var category='Leisure'
			}
			console.log(category);
			$http({
				method : 'GET',
				url : url+'getFee' + "/" + localStorage.getItem('userId')+"/"+$scope.tempOption,			
			}).success(function(data) {
				window.open('http://localhost:8089/clubmembershipfrontend/paymentmodule/paymentModule.html?id='+localStorage.getItem('userId')+'&fee='+data+'&type='+$scope.tempOption+'&category='+category, '_blank');
			});			
		}
});

