nicksFlicks.directive("changeClass", function() {

    return function (scope, element) {
        element.bind("click", function() {
            // element.toggleClass("document.documentElement");
            element.parent().parent().parent().parent().parent().parent().toggleClass("night-mode");
        });
    }
});
