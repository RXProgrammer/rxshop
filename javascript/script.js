// Verificar si el usuario está accediendo desde un dispositivo móvil
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Verificar el tamaño de la pantalla para excluir tablets pequeñas
var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var isSmallTablet = screenWidth < 768; // Cambia el valor según tu criterio

// Redirigir a la página adecuada si se cumple alguna de las condiciones
if (isMobile || isSmallTablet) {
    window.location.href = "https://tupagina.com/pagina-de-redireccion";
}
