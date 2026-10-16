import { authenticateUser } from '../../../utils/auth';
import { setSession } from '../../../utils/localStorage';
import { navigateToHome, navigateToAdmin } from '../../../utils/navigate';

const loginForm = document.getElementById('loginForm') as HTMLFormElement | null;
const errorMsg = document.getElementById('errorMsg') as HTMLDivElement | null;

if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const emailInput = document.getElementById('email') as HTMLInputElement | null;
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;

    if (!emailInput || !passwordInput) return;

    const user = authenticateUser(emailInput.value.trim(), passwordInput.value);

    if (user) {
      setSession(user);

      if (user.role === 'admin') {
        navigateToAdmin();
      } else {
        navigateToHome();
      }
    } else {
      if (errorMsg) {
        errorMsg.textContent = 'Credenciales incorrectas. Verificá correo y contraseña.';
      }
    }
  });
}