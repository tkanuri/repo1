bookApp.filter('formatFilter', function () {
    return function (text) {
        if (text !== null) {
            for (var i in text) {var authors = text[i]}    
            return authors;
        }   
    };
});