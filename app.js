var app = angular.module('flapperNews', []);

app.factory('posts1', [function(){
	//service body
	//creating a new object has an array property
	var o = {
		posts1: []
	};
	return o;
}])

app.controller('MainCtrl', ['$scope',
	'posts1', //injecting posts service into MainCtrl
function($scope, posts1){
	//so we can use the 2-way binding in posts1
	$scope.posts1 = posts1.posts1;
	$scope.test = 'Hello world!';
	$scope.input = {"changing": ''};
	$scope.posts = [
		{title: 'post 1', upvotes: 5, myVar: false},
		{title: 'post 2', upvotes: 2, myVar: false},
		{title: 'post 3', upvotes: 15, myVar: false},
		{title: 'post 4', upvotes: 9, myVar: false} ,
		{title: 'post 5', upvotes: 4, myVar: false}
		];
	$scope.addPost = function(){
		if(!$scope.title || $scope.title === ''){return;}
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link,
			upvotes: 0
		});
		$scope.title = '';
		$scope.link = '';
	};
	$scope.incrementUpvotes = function(post){
		post.upvotes += 1;
	}
	$scope.testing = '1';
	$scope.delete = function(post){
		var a = $scope.posts.indexOf(post);
		console.log(a);
		$scope.posts.splice($scope.posts.indexOf(post), 1);
	}
	$scope.editing = function(keyEvent, post){
		if(keyEvent.which === 13){
			console.log("comeon");
			post.myVar = !post.myVar;
			console.log($scope);
			post.title = $scope.input.changing;
			$scope.input.changing = "";
		}	
		
	}
	$scope.toggle = function(post){
		console.log('test');

		post.myVar = !post.myVar;
		console.log(post.myVar);
	}
	$scope.test = function(){
		console.log("hi!");
		$scope.testing = '';
	}
}]);

