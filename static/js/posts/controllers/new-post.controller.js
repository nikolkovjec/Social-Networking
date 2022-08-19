(function(){
  'use strict';
  angular
  .module('social.posts.controllers')
  .controller('NewPostController', NewPostController);

  NewPostController.$inject = [
    '$rootScope', '$scope', 'Authentication', 'Posts'
  ];
  function NewPostController(
    $rootScope, $scope, Authentication, Posts){

    $scope.title = "";
    $scope.description = "";

    $scope.create = function(){
      console.log("creating a new post");
      $scope.closeThisDialog();

      Posts.create($scope.title, $scope.description).then(success, failure);

      function success(data, status, headers, config){
        console.log('Success! Post created.');
        $rootScope.$broadcast('post.created', data.data);
      };
      function failure(data, status, headers, config){
        $rootScope.$broadcast('post.created.error');
        console.error(data.error);
      };

    }
    
  }
  
})();