import { checkAuthGuard } from '../../../utils/auth';
import { clearSession, getSession } from '../../../utils/localStorage';
import { navigateToLogin } from '../../../utils/navigate';

// Ejecuta la protección de rutas
checkAuthGuard();

const logoutBtn = document.getElementById("logoutBtn") as HTMLButtonElement;
const adminContent = document.getElementById("adminContent") as HTMLDivElement;

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    clearSession();
    navigateToLogin();
  });
}

const user = getSession();
if (adminContent && user) {
  adminContent.innerHTML = `
    <div style="background: white; padding: 1.5rem; border-radius: 8px; margin-top: 1rem;">
      <h3>Información de Administrador</h3>
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Rol:</strong> <span style="color: green; font-weight: bold;">${user.role}</span></p>
    </div>
  `;
}