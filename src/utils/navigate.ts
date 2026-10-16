// Rutas de las distintas páginas del proyecto
export const navigateToLogin = (): void => {
  window.location.href = '/src/pages/auth/login/login.html';
};

export const navigateToRegistro = (): void => {
  window.location.href = '/src/pages/auth/registro/registro.html';
};

export const navigateToHome = (): void => {
  window.location.href = '/src/pages/client/home/home.html';
};

export const navigateToAdmin = (): void => {
  window.location.href = '/src/pages/admin/home/home.html';
};