var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider){
    // routing
    $stateProvider.state('home', {
        url: "",
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: "partials/home.html",
            }
        }
    });
    $stateProvider.state('reviews', {
        url: "/reviews",
        views: {
            'header': {
                templateUrl: 'partials/header.html',
            },
            'body': {
                templateUrl: "partials/reviews.html",
                controller: "ReviewsCtrl",
            }
        }
    });
    $stateProvider.state('reviews.details', {
        url: "/:reviewId",
        views: {
            'details': {
                templateUrl: "partials/reviews.details.html",
                controller: "DetailsCtrl",
            },
            'footer': {
                templateUrl: "partials/footer.html",
                // controller: "DetailsC",
            }
        }
    });
});
