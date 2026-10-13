// Отримання елементів
const themeToggleBtn = document.getElementById('themeToggleBtn');
const fontToggleBtn = document.getElementById('fontToggleBtn');
const contactForm = document.getElementById('mainContactForm');

// 1. Відновлення налаштувань із localStorage при завантаженні
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const savedFontSize = localStorage.getItem('largeText');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeButtonUI(true);
    }

    if (savedFontSize === 'enabled') {
        document.body.classList.add('large-text');
        updateFontButtonUI(true);
    }
});

// 2. Логіка зміни теми (День / Ніч)
themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeButtonUI(isDark);
});

function updateThemeButtonUI(isDark) {
    const btnIcon = themeToggleBtn.querySelector('.btn-icon');
    const btnText = themeToggleBtn.querySelector('.btn-text');
    
    if (isDark) {
        btnIcon.textContent = '☀️';
        btnText.textContent = 'Світла';
    } else {
        btnIcon.textContent = '🌙';
        btnText.textContent = 'Тема';
    }
}

// 3. Логіка збільшення тексту
fontToggleBtn.addEventListener('click', () => {
    const isLarge = document.body.classList.toggle('large-text');
    localStorage.setItem('largeText', isLarge ? 'enabled' : 'disabled');
    updateFontButtonUI(isLarge);
});

function updateFontButtonUI(isLarge) {
    const btnText = fontToggleBtn.querySelector('.btn-text');
    btnText.textContent = isLarge ? 'Шрифт -' : 'Шрифт +';
}

// 4. Обробка контактної форми
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('username').value.trim();
        
        alert(`Дякуємо, ${name}! Ваше повідомлення успішно надіслано.`);
        contactForm.reset();
    });
}