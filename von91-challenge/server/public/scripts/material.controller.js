myApp.controller('MaterialController', function() {
    console.log('MaterialController');
    var vm = this;
    vm.mySiema = new Siema({ 
    selector: '.mySiema',
    // slider selector
selector: '.siema',
// animation duration
duration: 200,
// easuing function
easing: 'ease-out',
// how many slides per page
perPage: 1,
// start index
startIndex: 0,
    });
    document.querySelector('.js-prev').addEventListener('click', function () { vm.mySiema.prev() });
    document.querySelector('.js-next').addEventListener('click', function () { vm.mySiema.next() });

});