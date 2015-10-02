nicksFlicks.controller('DetailsCtrl', function DetailsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId)
  // $scope.addReview = function() {
  //   $scope.review.details.push({ name: $scope.studentName });
  //   $scope.studentName = null;
  // }
});
