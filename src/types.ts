export type Language = 'id' | 'en';

export interface SchoolEvent {
  id: string;
  title: string;
  titleEn: string;
  category: 'academic' | 'competition' | 'extracurricular' | 'parent' | 'exam';
  date: string;
  day: string;
  month: string;
  time: string;
  location: string;
  description: string;
  descriptionEn: string;
  speakerOrHost?: string;
  seatsAvailable?: number;
  featured?: boolean;
  image?: string;
}

export interface TimetableSlot {
  period: number;
  time: string;
  subject: string;
  subjectEn: string;
  teacher: string;
  room: string;
  color: string;
}

export interface DaySchedule {
  day: 'Senin' | 'Selasa' | 'Rabu' | 'Kamis' | 'Jumat';
  dayEn: 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  slots: TimetableSlot[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  roleEn: string;
  department: 'science' | 'math' | 'humanities' | 'language' | 'arts' | 'technology';
  departmentName: string;
  departmentNameEn: string;
  degrees: string;
  experienceYears: number;
  bio: string;
  bioEn: string;
  email: string;
  officeHours: string;
  image: string;
}

export interface Story {
  id: string;
  title: string;
  titleEn: string;
  author: string;
  role: string;
  category: string;
  date: string;
  readTime: string;
  snippet: string;
  snippetEn: string;
  content: string;
  contentEn: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  category: 'facilities' | 'stem' | 'arts' | 'sports' | 'graduation';
  imageUrl: string;
  caption: string;
}

export interface CampusLocation {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  features: string[];
  featuresEn: string[];
  imageUrl: string;
  capacity: string;
  floor: string;
}
