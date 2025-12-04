export type Category = 'burger' | 'side' | 'drink' | 'dessert';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  imageUrl: string;
  calories?: number;
}

export type ViewState = 'home' | 'menu' | 'ai-chef' | 'contact';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  recommendedItemId?: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface OrderDetails {
  customerName: string;
  address: string;
  paymentMethod: 'credit_card' | 'pix' | 'cash' | 'cash_on_delivery';
  items: CartItem[];
  total: number;
}