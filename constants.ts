import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  // Burgers
  {
    id: 'b1',
    name: 'O Clássico',
    description: '180g de blend bovino, queijo cheddar inglês, alface americana, tomate e maionese da casa no pão brioche.',
    price: 32.90,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd',
    calories: 850
  },
  {
    id: 'b2',
    name: 'Smash Duplo Bacon',
    description: 'Dois smashes de 90g, duplo cheddar, farofa de bacon crocante e molho barbecue rústico.',
    price: 38.50,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5',
    calories: 1100
  },
  {
    id: 'b3',
    name: 'Veggie Supreme',
    description: 'Hambúrguer de grão de bico e cogumelos, rúcula, tomate seco e maionese de ervas no pão integral.',
    price: 34.00,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1520072959219-c595dc3f3a29',
    calories: 600
  },
  {
    id: 'b4',
    name: 'Spicy Inferno',
    description: '180g de carne, queijo pepper jack, jalapeños em conserva, cebola roxa e molho chipotle picante.',
    price: 36.90,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1605789538467-f715d58e03f9',
    calories: 920
  },
  {
    id: 'b5',
    name: 'Trufado Gold',
    description: 'Blend especial 200g, queijo brie maçaricado, cogumelos salteados na manteiga e azeite trufado.',
    price: 45.90,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b',
    calories: 950
  },
  {
    id: 'b6',
    name: 'Crispy Chicken King',
    description: 'Peito de frango empanado na panko, super crocante, alface americana, picles artesanal e maionese de limão siciliano.',
    price: 29.90,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1615557960916-5f4791effe9d',
    calories: 780
  },
  {
    id: 'b7',
    name: 'Gorgonzola Royal',
    description: 'Blend bovino 180g, creme de gorgonzola intenso, cebola caramelizada no açúcar mascavo e rúcula fresca no pão australiano.',
    price: 39.90,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    calories: 980
  },
  {
    id: 'b8',
    name: 'Ribs BBQ',
    description: 'Hambúrguer artesanal de costela bovina, queijo prato derretido, cebola crispy crocante e muito molho barbecue defumado.',
    price: 35.90,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6',
    calories: 1050
  },
  {
    id: 'b9',
    name: 'Monster Triple Cheese',
    description: 'Para os amantes de queijo: Blend 200g coberto por uma montanha de queijo provolone, cheddar e prato, finalizado com bacon em cubos.',
    price: 42.00,
    category: 'burger',
    imageUrl: 'https://images.unsplash.com/photo-1586190848861-99c8a3da7ce3',
    calories: 1250
  },
  
  // Sides
  {
    id: 's1',
    name: 'Batata Rústica',
    description: 'Batatas cortadas à mão com alecrim e alho.',
    price: 18.00,
    category: 'side',
    imageUrl: 'https://images.unsplash.com/photo-1573080496987-aeb7d53385c7',
    calories: 400
  },
  {
    id: 's2',
    name: 'Onion Rings',
    description: 'Anéis de cebola empanados e super crocantes com molho ranch.',
    price: 22.00,
    category: 'side',
    imageUrl: 'https://images.unsplash.com/photo-1639024471283-03518883512d',
    calories: 550
  },

  // Drinks
  {
    id: 'd1',
    name: 'Heineken Long Neck',
    description: 'Cerveja Premium Lager, 330ml, servida trincando de gelada.',
    price: 12.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1618183479302-1e0aa382c36b',
    calories: 140
  },
  {
    id: 'd2',
    name: 'Antarctica Original 600ml',
    description: 'A clássica pilsen, refrescante e perfeita para acompanhar seu burger.',
    price: 18.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1625126596964-28b939e64e0d',
    calories: 250
  },
  {
    id: 'd3',
    name: 'Caipirinha de Limão',
    description: 'Cachaça artesanal, limão taiti fresco, açúcar e muito gelo.',
    price: 22.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd',
    calories: 200
  },
  {
    id: 'd4',
    name: 'Suco de Laranja Natural',
    description: 'Laranjas selecionadas espremidas na hora com gelo.',
    price: 12.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423',
    calories: 110
  },
  {
    id: 'd5',
    name: 'Coca-Cola Original',
    description: 'Lata 350ml servida com copo de gelo e rodela de limão.',
    price: 8.00,
    category: 'drink',
    imageUrl: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97',
    calories: 140
  }
];