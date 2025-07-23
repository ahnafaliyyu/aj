const navbarDesktop = document.querySelector('.navbar-desktop');
const navbarMobile = document.querySelector('.navbar-mobile');

window.addEventListener('scroll', function () {
    if (window.scrollY > 1) {
        // Tambah warna latar saat scroll
        navbarDesktop?.classList.replace('bg-transparent', 'nav-color');
        navbarMobile?.classList.replace('bg-transparent', 'nav-color');
    } else {
        // Kembalikan transparan
        navbarDesktop?.classList.replace('nav-color', 'bg-transparent');
        navbarMobile?.classList.replace('nav-color', 'bg-transparent');
    }
});
