nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, ReviewsFactory){
    $scope.reviews = ReviewsFactory.reviews;
// sets student attendance field to true
    // $scope.addStudentIsPresent = function(student) {
    //     student.attendance = true;
    // };
// sets student attendance field to false
    // $scope.addStudentIsGone = function(student) {
    //     student.attendance = false;
    // };
});
