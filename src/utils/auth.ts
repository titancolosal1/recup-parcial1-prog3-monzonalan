import { getUsers, getSession } from './localStorage';
import { navigateToLogin, navigateToHome, navigateToAdmin } from './navigate';
import type { IUser } from '../types/IUser';

export const authenticateUser = (email: string, pass: string): IUser | null => {
  const users = getUsers();
  return users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === pass
  ) || null;
};

export const checkAuthGuard = (): void => {
  const currentPath = window.location.pathname;
  const user = getSession();

  console.log('[Guard] Ruta actual:', currentPath);
  console.log('[Guard] Usuario logueado:', user);

  const isAuthPage = currentPath.includes('/pages/auth/');
  const isAdminPage = currentPath.includes('/pages/admin/home/');
  const isRootPage = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('index.html');

  // 1. Sin sesión: si no está en login/registro, manda a login
  if (!user) {
    if (!isAuthPage) {
      console.log('[Guard] Redirigiendo a Login...');
      navigateToLogin();
    }
    return;
  }

  // 2. Con sesión: si entra a la raíz o a login/registro, redirige según el rol
  if (isAuthPage || isRootPage) {
    console.log('[Guard] Redirigiendo según rol:', user.role);
    if (user.role === 'admin') {
      navigateToAdmin();
    } else {
      navigateToHome();
    }
    return;
  }

  // 3. Bloqueo de cliente queriendo entrar a admin
  if (isAdminPage && user.role !== 'admin') {
    alert('Acceso restringido: Se requieren permisos de Administrador.');
    navigateToHome();
    return;
  }
};