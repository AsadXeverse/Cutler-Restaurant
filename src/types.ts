export type PageType = 
  | 'home'
  | 'reservation'
  | 'menu'
  | 'drinks'
  | 'private-dining'
  | 'vouchers'
  | 'journal'
  | 'sunday';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  ingredients?: string[];
  tags?: string[];
  isSpecial?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface JournalPost {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string[]; // multi-paragraph full story
  image: string;
  author: string;
  readTime: string;
}

export interface BookingDetails {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  requests?: string;
  area: 'main-salon' | 'cellar-vault' | 'chefs-counter';
}
