document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с классами 'fade-in' и 'agme'
    const fadeElements = document.querySelectorAll('.fade-in, .game-center, .direction-center');
    
    // Функция для проверки видимости элементов
    function checkVisibility() {
        // Получаем высоту видимой области окна браузера
        const windowHeight = window.innerHeight;
        
        // Перебираем все найденные элементы
        fadeElements.forEach(element => {
            // Получаем позицию элемента относительно видимой области
            const elementTop = element.getBoundingClientRect().top;
            // Задаем порог срабатывания (100px от нижнего края окна)
            const elementVisible = 100;
            
            // Если верхняя граница элемента выше порога срабатывания
            if (elementTop < windowHeight - elementVisible) {
                // Добавляем класс, который запустит анимацию
                element.classList.add('animate');
            }
        });
    }

    // Проверяем видимость элементов при загрузке страницы
    checkVisibility();
    // И при каждом скролле (прокрутке) страницы
    window.addEventListener('scroll', checkVisibility);
});