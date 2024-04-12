import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
  restaurentName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function RegisterRestaurant({
  email,
  managerName,
  phone,
  restaurentName,
}: RegisterRestaurantBody) {
  await api.post("/restaurants", { email, managerName, phone, restaurentName });
}
