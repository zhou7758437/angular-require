define(['app'], function (app) {
   app.controller('IndexTestCtrl', function ($scope, $http,data) {
      $scope.data = 22222;
      $scope.parentData=data;

      $scope.$on('$destroy', function() {
          console.log("Destory Me");
          console.log($scope);
      });
   });
});
