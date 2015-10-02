nicksFlicks.controller('DetailsCtrl', function DetailsCtrl($scope, $stateParams, ReviewsFactory, UtilitiesFactory) {
  $scope.review = UtilitiesFactory.findById(ReviewsFactory.reviews, $stateParams.reviewId)
  $scope.addDetail = function() {
    $scope.review.description.push({ description: $scope.reviewText });
    $scope.studentName = null;
  }
});
