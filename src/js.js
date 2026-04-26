document.querySelectorAll('.header__menu-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.header__menu-link--active').forEach(active => 
            active.classList.remove('header__menu-link--active')
        );
        this.classList.add('header__menu-link--active');
    });
});

document.querySelectorAll('.header__menu-link').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('burger-toggle').checked = false;
        document.body.style.overflow = 'visible';
    });
});

document.getElementById('burger-toggle').addEventListener('change', function(e) {
    document.body.style.overflow = e.target.checked ? 'hidden' : '';
});
