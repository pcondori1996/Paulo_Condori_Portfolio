var navButtonHolder = document.getElementsByClassName('mainNavHolder');




navButtonHolder.addEventListener('click', function (event) {
    if (event.target.matches('.navButtons')) {
        if (event.target.textContent = 'Home') {
            window.location.replace("");
        }

        if (event.target.textContent = 'Projects') {
            window.location.replace("");
        }

        if (event.target.textContent = 'Contacts') {
            window.location.replace("");
        }
    }

});