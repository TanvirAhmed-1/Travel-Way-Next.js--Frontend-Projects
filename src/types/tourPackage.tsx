export interface TourPackage {
  _id: string;
  tour_title: string;
  tour_location: string;
  bus_name: string;
  bus_contact: string;
  bus_photo: string;
  tour_cover_photo: string;
  hotel_image: string;
  hotel_description: string;
  hotel_name: string;
  total_days: string | number;
  tour_manager_contact: string;
  tour_manager: string;
  ratings: string | number;
  things_to_carry: string;
  description: string;
  places: string;
  guide_contact: string;
  guide_name: string;
  price: string | number;
}
export interface TourPackageFormData {
  tour_title: string;
  tour_location: string;
  bus_name: string;
  bus_contact: string;
  bus_photo: File | null;
  tour_cover_photo: File | null;
  hotel_image: File | null;
  hotel_description: string;
  hotel_name: string;
  total_days: string | number;
  tour_manager_contact: string;
  tour_manager: string;
  ratings: string | number;
  things_to_carry: string;
  description: string;
  places: string;
  guide_contact: string;
  guide_name: string;
  price: string | number;
}