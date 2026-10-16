import type { IUser } from '../../../types/IUser';
import { saveUser } from '../../../utils/localStorage';
import { navigateToLogin } from '../../../utils/navigate';

// Asumiendo que tenés un evento submit en el formulario de registro
const registerForm = document.getElementById('registroForm') as HTMLFormElement | null;

if (registerForm) {
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const newUser: IUser = {
      id: crypto.randomUUID(),
      email: emailInput.value,
      password: passwordInput.value,
      role: 'client' // <--- ASEGURATE DE QUE ESTÉ FIJO EN 'client'
    };

    saveUser(newUser);
    alert('Usuario registrado exitosamente. Ahora podés iniciar sesión.');
    navigateToLogin();
  });
}