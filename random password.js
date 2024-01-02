document.getElementById('generate').addEventListener('click', function() {
    const length = document.getElementById('length').value;
    

    document.getElementById('password').value = generatePassword(length );
});

function generatePassword(length) {
    let charset = '';
    let password = '';

   charset += '!@#$%^&*()_+-=[]{}|;:,.<>?ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}
