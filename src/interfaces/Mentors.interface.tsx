export interface IMentor {
  id: string;
  fullName: string;
  avatarId: string;
  birthDate: string;
  email: string;
  phone: string;
  profession: string;
  rating: number;
  description: string;
  rate: number;
  lifeAspects: string[];
}

export interface IReviews {
  id: string;
  fullName: string;
  photo: string;
  birthDate: string;
  email: string;
  phone: string;
  title: string;
  rating: number;
  description: string;
  rate: number;
  aspects: { id: number; name: string }[];
}

export interface IMentors {
  id: string;
  avatarId: string;
  fullName: string;
  profession: string;
  rate: number;
}
