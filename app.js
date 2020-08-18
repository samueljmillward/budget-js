var budgetController = (function () {



})();

var UIController = (function () {



})();

var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        console.log('Works')
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (e) {
        if (e.keyCode === 13 || e.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController), UIController;



