nicksFlicks.directive("changeClass", function() {

    return function (scope, element) {
        element.bind("click", function() {
            element.parent().parent().parent().parent().parent().parent().toggleClass("night-mode");
        });
    }
});
