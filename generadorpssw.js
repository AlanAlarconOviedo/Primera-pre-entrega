alert("Bienvenido a este generador de contraseñas...");
let nameUser = prompt("¿Cuál es tu nombre?");
alert(`Bienvenido ${nameUser}, generemos una nueva contraseña para ti`);

function generatePassword(length) {
    const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:',.<>?";
    let password = "";

    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * char.length);
        password += char.charAt(index);
    }
    return password;
}

function generarYMostrarPassword() {
    let lengthPassword = prompt("¿Qué longitud quieres que tenga tu contraseña?");
    const newPassword = generatePassword(lengthPassword);
    alert(`${nameUser} Tu nueva contraseña es: ${newPassword}`);
}

generarYMostrarPassword();

let path = prompt("¿Quieres hacer una nueva contraseña o finalizar? Escribe 'new' para una nueva contraseña o 'end' para finalizar el generador");

while (path.toLowerCase() === "new") {
    generarYMostrarPassword();
    path = prompt("¿Quieres hacer una nueva contraseña o finalizar? Escribe 'new' para una nueva contraseña o 'end' para finalizar el generador");
}

alert("¡Gracias por usar nuestro")