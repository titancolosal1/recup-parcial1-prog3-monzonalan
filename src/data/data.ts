import type{ IProduct } from '../types/product';
import type{ ICategoria } from '../types/categoria';

const categorias = [
  { id: 'pizzas', name: 'Pizzas' },
  { id: 'hamburguesas', name: 'Hamburguesas' },
  { id: 'bebidas', name: 'Bebidas' },
  { id: 'postres', name: 'Postres' },
  { id: 'empanadas', name: 'Empanadas' },
  { id: 'ensaladas', name: 'Ensaladas' }
];

export const PRODUCTS: IProduct[] = [
  {
    id: 1,
    title: 'Pizza Muzzarella',
    price: 4500.0,
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300'
  },
  {
    id: 2,
    title: 'Pizza Napolitana',
    price: 5200.0,
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300'
  },
  {
    id: 3,
    title: 'Pizza Especial 4 Quesos',
    price: 6800.0,
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300'
  },
  {
    id: 4,
    title: 'Hamburguesa Clásica',
    price: 3800.0,
    category: 'hamburguesas',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300'
  },
  {
    id: 5,
    title: 'Hamburguesa BBQ Bacon',
    price: 5100.0,
    category: 'hamburguesas',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300'
  },
  {
    id: 6,
    title: 'Hamburguesa Veggie',
    price: 4200.0,
    category: 'hamburguesas',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=300'
  },
  {
    id: 7,
    title: 'Coca-Cola 500ml',
    price: 1200.0,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300'
  },
  {
    id: 8,
    title: 'Jugo de Naranja Natural',
    price: 1800.0,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=300'
  },
  {
    id: 9,
    title: 'Agua Mineral 500ml',
    price: 800.0,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?w=300'
  },
  {
    id: 10,
    title: 'Torta Rogel',
    price: 3500.0,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300'
  },
  {
    id: 11,
    title: 'Helado Artesanal 2 gustos',
    price: 2800.0,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1567206563064-6f60f4000577?w=300'
  },
  {
    id: 12,
    title: 'Brownie con Helado',
    price: 2200.0,
    category: 'postres',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300'
  },
  {
    id: 13,
    title: 'Empanadas de Carne x6',
    price: 3000.0,
    category: 'empanadas',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300'
  },
  {
    id: 14,
    title: 'Empanadas de Pollo x6',
    price: 2800.0,
    category: 'empanadas',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300'
  },
  {
    id: 15,
    title: 'Empanadas de Jamón y Queso x6',
    price: 2500.0,
    category: 'empanadas',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=300'
  },
  {
    id: 16,
    title: 'Ensalada César',
    price: 3200.0,
    category: 'ensaladas',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300'
  },
  {
    id: 17,
    title: 'Ensalada Caprese',
    price: 2900.0,
    category: 'ensaladas',
    image: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?w=300'
  },
  {
    id: 18,
    title: 'Pizza Fugazzeta',
    price: 5500.0,
    category: 'pizzas',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300'
  },
  {
    id: 19,
    title: 'Hamburguesa Crispy Chicken',
    price: 4600.0,
    category: 'hamburguesas',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300'
  },
  {
    id: 20,
    title: 'Ensalada Mixta',
    price: 2400.0,
    category: 'ensaladas',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300'
  }
];

export const getCategories = (): ICategoria[] => [
  { id: 'todas', name: 'Todas' },
  ...categorias
];
