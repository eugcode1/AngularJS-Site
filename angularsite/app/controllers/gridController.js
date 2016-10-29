/*global angular*/
// It is just like saying "get this module and create a controller"
angular.module('mainApp').controller('gridController', function manson($scope){
    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
        percentPosition: true
    });
});


