var hash = window.location.hash.substr(1);
function locationHashChanged() {
    var hash = window.location.hash.substr(1);
    anchorControler(hash);
}
function anchorControler(hash) {
    switch (hash) {
        //if hash is #export-validation
        case 'export-validation':
            var exceptionArray = [
                '#export-validation'
            ];
            hideAllExcept(exceptionArray);
            break;

        //if hash is #simple-search
        case "simple-search":
            var exceptionArray = [
                '#simple-search'
            ];
            hideAllExcept(exceptionArray);
            break;

        //default and #bulk-search
        default:
            var exceptionArray = [
                '#bulk-search'
            ];
            hideAllExcept(exceptionArray);
    }
    function hideAllExcept(exceptionObj) {
        /**********************************
        List all views/divs in results.html
        **********************************/
        var anchorPages = {
            "0": "#bulk-search",
            "1": "#simple-search",
            "2": "#export-validation",
            "3": "#bulk-search-results",
            "4": "#simple-search-results"
        }
        var anchorLenght = Object.keys(anchorPages).length;
        var exceptionLenght = Object.keys(exceptionObj).length;
        for (var i = 0; i < anchorLenght; i++) {
            for (var y = 0; y < exceptionLenght; y++) {
                console.log('hello world ' + exceptionObj[y] + ' and ' + anchorPages[i])
                if (exceptionObj[y] !== anchorPages[i]) {
                    $(anchorPages[i]).hide();
                } else {
                    $(exceptionObj[y]).show();
                }
            }
        }
    }
}
anchorControler(hash);