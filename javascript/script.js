// Verificar si el usuario está accediendo desde un dispositivo móvil
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Verificar el tamaño de la pantalla para excluir tablets pequeñas
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var isSmallTablet = screenWidth < 768; // Cambia el valor según tu criterio

// Verificar si el usuario actual es tú (desde tu dispositivo móvil)
var isYou = /Mozilla\/5.0 \(Linux; Android 10; K\) AppleWebKit\/537.36 \(KHTML, like Gecko\) Chrome\/114.0.0.0 Mobile Safari\/537.36/.test(navigator.userAgent); // Reemplaza con tu agente de usuario

// Redirigir a la página adecuada si se cumple alguna de las condiciones
if ((isMobile || isSmallTablet) && !isYou) {
    window.location.href = "/rxshop/mantenimiento.html";
}