export interface GuideType {
  _id: string;
  name: string;
  image: string;
  phone: string;
  email: string;
  address: string;
  rating: number | string;
  isAvailable: string;
  experience?: number | string;
  languages?: string;
  availabilityType: "Full-time" | "Part-time" | "Seasonal" | "";
}
