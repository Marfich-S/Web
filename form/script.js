let users = [];


// 1. Виправлено одрук: registrationForm (з літерою 'i')
const form = document.getElementById('registrationForm');
const userList = document.getElementById('userList');

const MIN_NAME_LENGTH = 2;
const MIN_PASSWORD_LENGHT = 6;
const EMAIL_PATERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Перевірка на випадок, якщо елемент не знайдено
if (form) {
    form.onsubmit = function(event){
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        if (!isValidName(name)){
        alert('В імені має бути не меньше 2 символів!');
        return;
    }
        if (!EMAIL_PATERN.test(email)){
            alert('Введіть коректну електронну пошту (наприклад, user@example.com)!');
            return;
        }

        if (!isValidEmail(email)){
            alert('Будь ласка, введіть коректну електронну пошту (наприклад, user@example.com)!')
            return
        }

        if (isEmailExists (email)) {
            alert('Користувач із таким еmail вже існує!');
            return;
        }
    
        if (!isValidPassword(password)){
            alert('В паролі має бути не меньше 6 символів!');
            return;
        }

        const newUser = {
            name: name,
            email: email,
            password: password
        };
        
        users.push(newUser);
        form.reset();
        console.log(users);
        
        updateUserList();
    };
} else {
    console.error("Форму з id='registrationForm' не знайдено!");
}
function isValidName(name){
    return name.length > MIN_NAME_LENGTH;

}

function isValidEmail(email){
    return email.includes('@') && email.includes('.')

}

function isEmailExists(email) {
    for (let i=0; i < users.length; i++) {
        if (users[i].email === email) {
            return true; // Email знайдено
        }
    }
    return false; // Email не знайдено
}

function isValidPassword(password){
    return password.length > MIN_PASSWORD_LENGHT;
}

function updateUserList(){
    userList.innerHTML = '';
    
    for (let i = 0; i < users.length; i++){
        const user = users[i];
        const listItem = document.createElement('li');
        
        listItem.textContent = user.name + " (" + user.email + ")";
        userList.appendChild(listItem); 
    }
}



// Завдання 1
if (EMAIL_PATERN.test(email)){

}

// Завдання 2
text.match(NUMBER_PATERN)

// Завдання 3
text.match(WORD_PATERN)