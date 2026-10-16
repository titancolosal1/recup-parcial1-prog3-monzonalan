import { checkAuthGuard } from '../../../utils/auth';
import { getCart, updateQuantity, calculateTotal } from '../../../utils/cart';

checkAuthGuard();

document.addEventListener('DOMContentLoaded', () => {
  renderCart();
});

function renderCart(): void {
  const container = document.getElementById('cartItemsContainer');
  const summary = document.getElementById('cartSummary');
  const totalAmount = document.getElementById('totalAmount');
  const emptyMsg = document.getElementById('emptyCartMsg');

  if (!container || !summary || !totalAmount || !emptyMsg) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = '';
    summary.style.display = 'none';
    emptyMsg.style.display = 'block';
    return;
  }

  emptyMsg.style.display = 'none';
  summary.style.display = 'block';
  totalAmount.textContent = calculateTotal().toString();

  container.innerHTML = cart.map((item) => `
    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 1rem 0;">
      <div>
        <h3 style="margin: 0; font-size: 1.1rem;">${item.product.title}</h3>
        <p style="margin: 0.3rem 0; color: #7f8c8d;">Precio unitario: $${item.product.price}</p>
      </div>
      <div style="display: flex; align-items: center; gap: 0.8rem;">
        <button class="qty-btn" data-id="${item.product.id}" data-delta="-1" style="padding: 0.2rem 0.6rem; cursor: pointer;">-</button>
        <span style="font-weight: bold;">${item.quantity}</span>
        <button class="qty-btn" data-id="${item.product.id}" data-delta="1" style="padding: 0.2rem 0.6rem; cursor: pointer;">+</button>
        <span style="font-weight: bold; width: 80px; text-align: right;">$${item.product.price * item.quantity}</span>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.qty-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLElement;
      const id = Number(target.dataset.id);
      const delta = Number(target.dataset.delta);
      updateQuantity(id, delta);
      renderCart();
    });
  });
}