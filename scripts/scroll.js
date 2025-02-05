// Получаем элемент меню
const header = document.getElementById('header');

// Следим за прокруткой
window.addEventListener('scroll', () => {
    // Если прокрутка больше 50px, добавляем класс sticky
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});