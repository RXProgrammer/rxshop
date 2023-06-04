// Verificar si el usuario está accediendo desde un dispositivo móvil
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Verificar el tamaño de la pantalla para excluir tablets pequeñas
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var isSmallTablet = screenWidth >= 374 && screenWidth <= 767; // Rango de dimensiones para dispositivos móviles

// Verificar si el usuario actual eres tú (desde tu dispositivo móvil)
var isYou = /Mozilla\/5.0 \(Linux; Android 10; K\) AppleWebKit\/537.36 \(KHTML, like Gecko\) Chrome\/114.0.0.0 Mobile Safari\/537.36/.test(navigator.userAgent); // Reemplaza con tu agente de usuario

// Lista de usuarios de móviles permitidos para acceder al índice
var allowedMobileUsers = [
  "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Mobile Safari/537.36",
  // Agrega aquí otros agentes de usuario permitidos separados por comas
];

// Verificar si el usuario es otro permitido con un agente de usuario específico
var isAllowedMobileUser = allowedMobileUsers.some(function(agent) {
  return new RegExp(agent).test(navigator.userAgent);
});

// Redirigir a la página adecuada si se cumple alguna de las condiciones
if ((isMobile || isSmallTablet) && !isYou && !isAllowedMobileUser) {
  window.location.href = "https://rxprogrammer.github.io/rxshop/javascript/mantenimiento.html";
} else if (!isMobile && !isSmallTablet) {
  window.location.href = "https://rxprogrammer.github.io/rxshop/index.html"; // URL de tu web principal
}
