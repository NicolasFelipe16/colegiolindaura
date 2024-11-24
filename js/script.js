links = document.querySelectorAll('.links-list__item a');

links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        // event.preventDefault();
        links.forEach(function (link) {
            link.classList.remove('active');
        })
        link.classList.add('active');
    })
});