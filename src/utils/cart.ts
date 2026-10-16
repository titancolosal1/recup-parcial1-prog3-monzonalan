import type { ICartItem, IProduct } from '../types/product';

const CART_KEY = 'cart';

export const getCart = (): ICartItem[] => {
  const cartRaw = localStorage.getItem(CART_KEY);
  return cartRaw ? JSON.parse(cartRaw) : [];
};

export const addToCart = (product: IProduct): void => {
  const cart = getCart();
  const existingIndex = cart.findIndex((item) => item.product.id === product.id);

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ product, quantity: 1 });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const updateQuantity = (productId: number, delta: number): void => {
  let cart = getCart();
  const index = cart.findIndex((item) => item.product.id === productId);

  if (index !== -1) {
    cart[index].quantity += delta;
    if (cart[index].quantity <= 0) {
      cart = cart.filter((item) => item.product.id !== productId);
    }
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }
};

export const calculateTotal = (): number => {
  const cart = getCart();
  return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
};

export const getCartCount = (): number => {
  const cart = getCart();
  return cart.reduce((acc, item) => acc + item.quantity, 0);
};