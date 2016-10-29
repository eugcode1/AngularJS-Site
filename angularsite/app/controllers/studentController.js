/*global angular*/
// It is just like saying "get this module and create a controller"
angular.module('mainApp').controller('studentController', function syncinput($scope) {//can have or not have function name
    $scope.student = {
        firstName: "Sandra",
        lastName: "Cao",

        fullName: function () {
            var studentObject;
            studentObject = $scope.student;
            return studentObject.firstName + " " + studentObject.lastName;
        }
    };
});


