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
            },
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
            },
        }
    });
    // $stateProvider.state('reviews', {
    //     url: "/reviews",
    //     templateUrl: "partials/reviews.html",
    //     controller: "ReviewsCtrl"
    // });
    // $stateProvider.state('teacher', {
    //     url:"/teacher",
    //     templateUrl: "partials/teacher.html",
    //     controller: "StudentsCtrl"
    // });
});
