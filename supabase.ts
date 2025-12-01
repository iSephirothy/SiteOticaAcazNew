import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  original_price: number | null;
  discount_percentage: number;
  in_stock: boolean;
  featured: boolean;
  material: string;
  gender: string;
  frame_type: string;
  created_at: string;
  updated_at: string;
}

export interface ProductImage {
  id: string;
  product_id: string;
  image_url: string;
  alt_text: string;
  display_order: number;
  created_at: string;
}
