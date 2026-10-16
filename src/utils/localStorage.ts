import type { IUser } from '../types/IUser';

const USERS_KEY = 'users';
const USER_DATA_KEY = 'userData';

const DEFAULT_ADMIN: IUser = {
  id: 'admin-001',
  email: 'admin@foodstore.com',
  password: 'admin123',
  role: 'admin'
};

// Obtiene la lista completa de usuarios registrados
export const getUsers = (): IUser[] => {
  const usersRaw = localStorage.getItem(USERS_KEY);
  let users: IUser[] = usersRaw ? JSON.parse(usersRaw) : [];

  // Verificamos si el admin por defecto ya está guardado
  const hasAdmin = users.some((u) => u.email.toLowerCase() === DEFAULT_ADMIN.email.toLowerCase());

  if (!hasAdmin) {
    users.push(DEFAULT_ADMIN);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  return users;
};

// Guarda un nuevo usuario en el array "users" de localStorage
export const saveUser = (user: IUser): void => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Obtiene la sesión activa actual ("userData")
export const getSession = (): IUser | null => {
  const session = localStorage.getItem(USER_DATA_KEY);
  return session ? JSON.parse(session) : null;
};

// Guarda la sesión del usuario logueado en "userData" (sin guardar la contraseña)
export const setSession = (user: IUser): void => {
  const { password, ...userWithoutPassword } = user;
  localStorage.setItem(USER_DATA_KEY, JSON.stringify(userWithoutPassword));
};

// Elimina la sesión activa ("userData")
export const clearSession = (): void => {
  localStorage.removeItem(USER_DATA_KEY);
};