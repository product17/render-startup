define(function (require) {
  
  function workoutController ($scope, $http) {

    $http.get('/template')
        .success(function(data, status, headers, config) {
            console.log(data, status, headers, config)
            $scope.workouts = data.data
            // this callback will be called asynchronously
            // when the response is available
        }).error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
        });

  }

  workoutController.$inject = ['$scope', '$http'];

  return workoutController;

});