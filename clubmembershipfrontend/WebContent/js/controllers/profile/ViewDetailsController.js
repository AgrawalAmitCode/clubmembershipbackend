
var app = angular.module("profile");
app.controller('viewCtrl', function($scope, $http, $state, url) {
	
	
	
	$http({
		method : 'GET',
		url : url + 'users' + "/" + localStorage.getItem('userId'),
	}).success(function(data) {
		
		$scope.viewDetails = data;
		$scope.mobileNumber = data.mobileNumber;
		$scope.occupation = data.occupation;
		$scope.password = data.password;
		
		$scope.facilityDetails=data.facilities;
		
		console.log($scope.facilityDetails);
		
		
		

	});
	
	$scope.allocate=function()
	{
		localStorage.setItem('indoorBudget', $scope.indoor);
		localStorage.setItem('outdoorBudget', $scope.outdoor);
		localStorage.setItem('leisureBudget', $scope.leisure);
	}
	
	
	$scope.cancle=function(){
		$state.go('profile.viewDetails');
	}
	//This is for adding profile pic
	$scope.profile=function(){
		
		console.log("profile called");
		var fd = new FormData();
		fd.append('file', document.getElementById('profile_pic').files[0]);
		$http.post(url+'users'+"/"+'file'+"/"+localStorage.getItem('userId'),fd,{
			transformRequest : angular.identity,
			headers : {
				'Content-Type' : undefined
			}
		}).success(function(data){				
			window.location.reload();			
		});
	}


	$scope.update = function() {
		$http.put(url + 'users' + "/" + localStorage.getItem('userId'), {
			'mobileNumber' : $scope.mobileNumber,
			'occupation' : $scope.occupation,
			'password' : $scope.password,
		}).success(function(data) {
			$scope.profile();
			$state.go('profile.viewDetails');
		});
	}
});