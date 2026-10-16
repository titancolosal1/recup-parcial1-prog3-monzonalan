import { checkAuthGuard } from '../../../utils/auth';
import { clearSession } from '../../../utils/localStorage';
import { navigateToLogin } from '../../../utils/navigate';
import { PRODUCTS, getCategories } from '../../../data/data';
import { addToCart, getCartCount } from '../../../utils/cart';
import type { IProduct } from '../../../types/product';

checkAuthGuard();

let currentCategory = 'todas';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  const logoutBtn = document.getElementById('logoutBtn') as HTMLButtonElement | null;
  const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      clearSession();
      navigateToLogin();
    });
  }

  updateCartBadge();
  renderCategories();
  applyFilters();

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = (e.target as HTMLInputElement).value.toLowerCase();
      applyFilters();
    });
  }
});

function updateCartBadge(): void {
  const badge = document.getElementById('cartCount');
  if (badge) badge.textContent = getCartCount().toString();
}

function renderCategories(): void {
  const container = document.getElementById('categoriesList');
  if (!container) return;

  const categories = getCategories();
  container.innerHTML = categories.map((cat) => `
    <li>
      <button 
        class="cat-btn" 
        data-id="${cat.id}" 
        style="background: none; border: none; color: ${currentCategory === cat.id ? '#3498db' : '#333'}; font-weight: ${currentCategory === cat.id ? 'bold' : 'normal'}; cursor: pointer; text-align: left; padding: 0;"
      >
        ${cat.name}
      </button>
    </li>
  `).join('');

  container.querySelectorAll('.cat-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      currentCategory = (e.currentTarget as HTMLElement).dataset.id || 'todas';
      renderCategories();
      applyFilters();
    });
  });
}

function applyFilters(): void {
  const filtered = PRODUCTS.filter((prod) => {
    const matchesCat = currentCategory === 'todas' || prod.category === currentCategory;
    const matchesSearch = prod.title.toLowerCase().includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  renderProducts(filtered);
}

function renderProducts(products: IProduct[]): void {
  const container = document.getElementById('productsContainer');
  const noResults = document.getElementById('noResultsMsg');
  if (!container || !noResults) return;

  if (products.length === 0) {
    container.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  container.innerHTML = products.map((prod) => `
    <div style="border: 1px solid #ddd; padding: 1rem; border-radius: 8px; text-align: center; background: #fff; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
      <img src="${prod.image}" alt="${prod.title}" style="height: 120px; object-fit: cover; width: 100%; border-radius: 4px; margin-bottom: 0.5rem;" />
      <h3 style="margin: 0.5rem 0; font-size: 1rem;">${prod.title}</h3>
      <p style="font-weight: bold; color: #27ae60; margin: 0.5rem 0;">$${prod.price}</p>
      <button class="add-btn" data-id="${prod.id}" style="padding: 0.4rem 0.8rem; background: #27ae60; color: white; border: none; border-radius: 4px; cursor: pointer;">Agregar al Carrito</button>
    </div>
  `).join('');

  container.querySelectorAll('.add-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const id = Number((e.currentTarget as HTMLElement).dataset.id);
      const product = PRODUCTS.find((p) => p.id === id);
      if (product) {
        addToCart(product);
        updateCartBadge();
        alert(`"${product.title}" se agregó al carrito.`);
      }
    });
  });
}