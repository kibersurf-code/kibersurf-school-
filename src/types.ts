export type LessonCategory = 'group' | 'private' | 'pack' | 'rental' | 'trip' | 'monthly' | 'guide' | 'camp' | 'erasmus' | 'kids' | 'aula-avulso' | 'all';

export interface GlobalService {
  id: string;
  name: string;
  priceLabel?: string;
  label?: string;
  cta: string;
  slug: string;
  href?: string;
  filterKey: string;
  serviceKey?: string;
  tagline: string;
  description: string;
  badge?: string;
  image: string;
  duration?: string;
  level?: string;
  primaryLessonId?: string;
  lessonIds?: string[];
  techTouch?: string;
}

export interface Lesson {
  id: string;
  category: LessonCategory;
  title: string;
  description: string;
  price: number;
  duration: string;
  capacity?: string;
  includes: string[];
  level: 'Todos os Níveis' | 'Iniciante' | 'Intermédio' | 'Avançado' | string;
  image: string;
  badge?: string;
  techTouch?: string; // High-tech coaching feature (e.g., video analysis)
  serviceKey?: string; // Links to detail view (e.g. 'aulas-grupo', 'mensalidades', etc.)
}

export interface ServicePlanOption {
  id: string;
  label: string;
  boldLabel?: string;
  detail?: string;
  price: string;
  priceNum: number;
}

export interface ServiceDetailItem {
  id: string;
  serviceKey: string;
  categoryBadge: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  level: string;
  priceDisplay: string;
  image: string;
  images?: string[];
  includes: string[];
  techTouch?: string;
  plans: ServicePlanOption[];
  highlights?: { title: string; desc: string }[];
}

export interface Instructor {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  rating: number;
  image: string;
  imagePosition?: string;
  languages: string[];
}

export type PaymentStatus = 'pending' | 'simulating' | 'success' | 'failed';
export type PaymentMethod = 'mbway' | 'card' | 'multibanco';

export interface Booking {
  id: string;
  lessonId: string;
  lessonTitle: string;
  lessonPrice: number;
  category: LessonCategory;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  participants: number;
  includeWetsuit: boolean;
  includeBoard: boolean;
  rentalDays?: number;
  totalAmount: number;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  paymentReference?: string; // For Multibanco entity/reference or MBWay phone
  invoiceNumber?: string;
  timestamp: string;
}

export interface TimeSlot {
  time: string;
  tideState: 'Maré Alta' | 'Maré Baixa' | 'Enchendo' | 'Vazando';
  suitability: string;
  isAvailable: boolean;
}
