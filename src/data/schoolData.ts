import { SchoolEvent, DaySchedule, Teacher, Story, GalleryItem, CampusLocation } from '../types';

export const SCHOOL_INFO = {
  name: 'SEKOLAH',
  fullName: 'SEKOLAH SENIOR HIGH SCHOOL',
  motto: 'Excellence in Academics, Character, and Global Leadership',
  accreditation: 'Akreditasi A Unggul · IB World School · Cambridge Assessment International',
  founded: '1998',
  address: 'Jl. Wijaya Kusuma No. 42, Kebayoran Baru, Jakarta Selatan, 12160',
  phone: '+62 21 7890 1234',
  email: 'admissions@sekolah-high.sch.id',
  principal: {
    name: 'Katherine Gonzalez, M.Ed., Ph.D.',
    role: 'Sekolah Grandmaster / Head of School',
    roleId: 'Kepala Sekolah / Grandmaster',
    quote: 'Education is the most powerful weapon which you can use to change the world.',
    messageId: `Siswa-siswi kami adalah generasi bertalenta, pekerja keras, dan penuh dengan ide-ide cemerlang. Kami mendorong serta memberdayakan mereka untuk merealisasikan impian tersebut menjadi kenyataan. Pengalaman langsung dan keterlibatan aktif adalah inti dari filosofi pembelajaran kami. Siswa kami sibuk menciptakan karya yang bermakna bagi masyarakat dan bangsa. Tugas pendidik modern bukanlah menebas rimba belantara, melainkan mengairi padang pasir keilmuan agar berbunga.`,
    messageEn: `Our students are talented, hard-working and full of good ideas. We encourage and empower them to bring their ideas to life. Hands-on opportunities are what we're all about. Our students are busy doing things that matter. Take a look at the opportunities you'll have at the University. The task of the modern educator is not to cut down jungles, but to irrigate deserts.`
  },
  stats: [
    { value: '99.4%', labelId: 'Kelulusan Universitas', labelEn: 'University Admission Rate' },
    { value: '45+', labelId: 'Ekskul & Klub Riset', labelEn: 'Clubs & Research Labs' },
    { value: '1 : 12', labelId: 'Rasio Guru & Siswa', labelEn: 'Teacher to Student Ratio' },
    { value: '180+', labelId: 'Medali Nasional & Global', labelEn: 'National & Global Medals' }
  ]
};

export const EVENTS_DATA: SchoolEvent[] = [
  {
    id: 'evt-1',
    title: 'Olimpiade Sains & Inovasi Teknologi 2026',
    titleEn: 'Annual Science & Tech Innovation Olympiad',
    category: 'competition',
    date: '2026-11-14',
    day: '14',
    month: 'NOV',
    time: '08:00 - 15:30 WIB',
    location: 'Main Auditorium & STEM Center (Building B)',
    description: 'Kompetisi karya ilmiah remaja, robotika otonom, dan pameran bioteknologi antarpelajar SMA se-Jabodetabek dengan dewan juri akademisi universitas terkemuka.',
    descriptionEn: 'Inter-high school scientific research competition, autonomous robotics battle, and biotechnology showcase judged by premier university professors.',
    speakerOrHost: 'Dr. Hendra Wijaya & Tim Riset STEM Sekolah',
    seatsAvailable: 45,
    featured: true,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-2',
    title: 'Sekolah Annual Musical & Orchestra Gala: "Symphony of Tomorrow"',
    titleEn: 'Sekolah Annual Musical & Orchestra Gala: "Symphony of Tomorrow"',
    category: 'extracurricular',
    date: '2026-11-20',
    day: '20',
    month: 'NOV',
    time: '18:30 - 21:00 WIB',
    location: 'Grand Performing Arts Theater (Building C)',
    description: 'Pagelaran seni teater musikal megah yang dipersembahkan oleh 120 siswa anggota Orkestra Simfoni dan Paduan Suara Harmoni Sekolah.',
    descriptionEn: 'A magnificent musical theater performance presented by 120 students of the Sekolah Symphony Orchestra and Harmony Choir.',
    speakerOrHost: 'Divisi Seni Pertunjukan & Teater Sekolah',
    seatsAvailable: 28,
    featured: true,
    image: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-3',
    title: 'International University Fair & Scholarship Expo 2026',
    titleEn: 'International University Fair & Scholarship Expo 2026',
    category: 'academic',
    date: '2026-11-28',
    day: '28',
    month: 'NOV',
    time: '09:00 - 16:00 WIB',
    location: 'Sekolah Central Exhibition Hall',
    description: 'Konsultasi langsung dengan perwakilan 40+ universitas top dunia (Ivy League, Russell Group, Go8 Australia, NUS/NTU, UI, ITB, UGM) dan panduan beasiswa penuh.',
    descriptionEn: 'Direct consultations with representatives from 40+ leading world universities and comprehensive scholarship application workshops.',
    speakerOrHost: 'Counseling & Higher Education Office',
    seatsAvailable: 150,
    featured: true,
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-4',
    title: 'Parent-Teacher Academic Forum & Semester Portfolio Review',
    titleEn: 'Parent-Teacher Academic Forum & Semester Portfolio Review',
    category: 'parent',
    date: '2026-12-05',
    day: '05',
    month: 'DEC',
    time: '08:30 - 13:00 WIB',
    location: 'Interactive Classroom Wing X & XI',
    description: 'Forum evaluasi pembelajaran tatap muka dan presentasi portofolio karya mandiri siswa di hadapan orang tua dan wali kelas.',
    descriptionEn: 'One-on-one academic consultation and student independent portfolio showcase with homeroom advisors and subject mentors.',
    speakerOrHost: 'Sekolah Academic Directorate',
    seatsAvailable: 80,
    featured: false,
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-5',
    title: 'Penilaian Akhir Semester Ganjil (PAS) & Cambridge Mock Exams',
    titleEn: 'Final Semester Assessment & Cambridge Mock Examination',
    category: 'exam',
    date: '2026-12-10',
    day: '10',
    month: 'DEC',
    time: '07:30 - 14:00 WIB',
    location: 'Main Examination Halls (Hall 1 - 4)',
    description: 'Pelaksanaan ujian komprehensif semester 1 berbasis Computer-Based Test (CBT) dan simulasi ujian sertifikasi internasional Cambridge IGCSE & A-Level.',
    descriptionEn: 'Comprehensive semester examination powered by digital CBT platform and Cambridge IGCSE / A-Level mock certifications.',
    speakerOrHost: 'Badan Standar Penilaian Akademik',
    seatsAvailable: 0,
    featured: false,
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evt-6',
    title: 'Pameran Riset Inovasi & Festival Karya Kreatif Siswa (Expo 2026)',
    titleEn: 'Student Innovation Research Showcase & Creative Expo 2026',
    category: 'academic',
    date: '2026-12-18',
    day: '18',
    month: 'DEC',
    time: '08:30 - 15:30 WIB',
    location: 'Creative Amphitheater & Innovation Courtyard',
    description: 'Pameran karya riset aplikatif, purwarupa teknologi hijau, dan proyek sosial kemasyarakatan yang dihasilkan siswa kelas 10 hingga 12.',
    descriptionEn: 'Showcase of student applied research projects, green technology prototypes, and community social impact initiatives by Grades 10 to 12.',
    speakerOrHost: 'Dewan Riset Siswa & Inkubator Sekolah',
    seatsAvailable: 120,
    featured: true,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80'
  }
];

export const TIMETABLE_DATA: Record<string, DaySchedule[]> = {
  'Grade 10 - Science & Tech': [
    {
      day: 'Senin',
      dayEn: 'Monday',
      slots: [
        { period: 1, time: '07:30 - 08:15', subject: 'Upacara Bendera & Flag Ceremony', subjectEn: 'Assembly & Flag Ceremony', teacher: 'School Leadership', room: 'Courtyard', color: 'bg-blue-50 border-blue-200 text-blue-900' },
        { period: 2, time: '08:15 - 09:45', subject: 'Fisika Lanjut (Mekanika & Optik)', subjectEn: 'Advanced Physics (Mechanics)', teacher: 'Dr. Aris Sudarsono, M.Sc.', room: 'Physics Lab 2', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
        { period: 3, time: '10:00 - 11:30', subject: 'Matematika Terapan & Kalkulus Dasar', subjectEn: 'Applied Mathematics & Calculus', teacher: 'Sarah Jenkins, M.Ed.', room: 'Room 101', color: 'bg-amber-50 border-amber-200 text-amber-900' },
        { period: 4, time: '11:30 - 12:15', subject: 'Bahasa & Sastra Indonesia', subjectEn: 'Indonesian Literature', teacher: 'Dra. Sri Wahyuni', room: 'Room 101', color: 'bg-purple-50 border-purple-200 text-purple-900' },
        { period: 5, time: '13:00 - 14:30', subject: 'Ilmu Komputer & Algoritma Python', subjectEn: 'Computer Science & Python', teacher: 'Budi Santoso, M.Kom.', room: 'AI & Coding Lab', color: 'bg-cyan-50 border-cyan-200 text-cyan-900' },
        { period: 6, time: '14:30 - 15:30', subject: 'Pendidikan Olahraga & Kebugaran', subjectEn: 'Physical Education & Athletics', teacher: 'Coach Anton Pratama', room: 'Sports Complex', color: 'bg-rose-50 border-rose-200 text-rose-900' },
      ]
    },
    {
      day: 'Selasa',
      dayEn: 'Tuesday',
      slots: [
        { period: 1, time: '07:30 - 09:00', subject: 'Kimia Analitik & Eksperimen', subjectEn: 'Analytical Chemistry & Lab', teacher: 'Prof. Diana Kusuma', room: 'Chemistry Lab A', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
        { period: 2, time: '09:15 - 10:45', subject: 'Bahasa Inggris Akademik (IELTS Prep)', subjectEn: 'Academic English & Writing', teacher: 'David Miller, M.A.', room: 'Room 101', color: 'bg-blue-50 border-blue-200 text-blue-900' },
        { period: 3, time: '11:00 - 12:30', subject: 'Biologi Molekuler & Ekologi', subjectEn: 'Molecular Biology & Genetics', teacher: 'Dr. Maya Hartono', room: 'Bio Science Lab', color: 'bg-teal-50 border-teal-200 text-teal-900' },
        { period: 4, time: '13:15 - 14:45', subject: 'Pendidikan Pancasila & Kewarganegaraan', subjectEn: 'Civic Studies & Global Ethics', teacher: 'Drs. Hendro Wibowo', room: 'Room 101', color: 'bg-orange-50 border-orange-200 text-orange-900' },
        { period: 5, time: '14:45 - 16:00', subject: 'Klub Robotika & Proyek Inovasi', subjectEn: 'Robotics Club & Innovation Studio', teacher: 'Tech Faculty Mentors', room: 'Innovation Hub', color: 'bg-violet-50 border-violet-200 text-violet-900' },
      ]
    },
    {
      day: 'Rabu',
      dayEn: 'Wednesday',
      slots: [
        { period: 1, time: '07:30 - 09:00', subject: 'Matematika Murni & Aljabar Linear', subjectEn: 'Pure Mathematics & Linear Algebra', teacher: 'Sarah Jenkins, M.Ed.', room: 'Room 101', color: 'bg-amber-50 border-amber-200 text-amber-900' },
        { period: 2, time: '09:15 - 10:45', subject: 'Fisika Eksperimen & Desain Sirkuit', subjectEn: 'Experimental Physics & Circuits', teacher: 'Dr. Aris Sudarsono', room: 'Physics Lab 1', color: 'bg-emerald-50 border-emerald-200 text-emerald-900' },
        { period: 3, time: '11:00 - 12:30', subject: 'Sejarah Dunia & Diplomasi Internasional', subjectEn: 'World History & Diplomacy', teacher: 'Marcus Gallagher, B.A.', room: 'Room 101', color: 'bg-stone-50 border-stone-200 text-stone-900' },
        { period: 4, time: '13:15 - 14:45', subject: 'Seni Musik & Komposisi Akustik', subjectEn: 'Music Composition & Acoustic Arts', teacher: 'Maestro Clara Sugianto', room: 'Music Studio C', color: 'bg-pink-50 border-pink-200 text-pink-900' },
        { period: 5, time: '14:45 - 15:30', subject: 'Bimbingan Konseling & Karir Universitas', subjectEn: 'University & Career Guidance', teacher: 'Ibu Ratna Dewi, M.Psi.', room: 'Counseling Suite', color: 'bg-sky-50 border-sky-200 text-sky-900' },
      ]
    },
    {
      day: 'Kamis',
      dayEn: 'Thursday',
      slots: [
        { period: 1, time: '07:30 - 09:00', subject: 'Ilmu Komputer (Web Engineering & Cloud)', subjectEn: 'Computer Science (Web & Cloud)', teacher: 'Budi Santoso, M.Kom.', room: 'AI & Coding Lab', color: 'bg-cyan-50 border-cyan-200 text-cyan-900' },
        { period: 2, time: '09:15 - 10:45', subject: 'Kimia Organik Terapan', subjectEn: 'Applied Organic Chemistry', teacher: 'Prof. Diana Kusuma', room: 'Chemistry Lab A', color: 'bg-indigo-50 border-indigo-200 text-indigo-900' },
        { period: 3, time: '11:00 - 12:30', subject: 'Bahasa Mandarin / Bahasa Jepang Pilihan', subjectEn: 'Mandarin / Japanese Elective', teacher: 'Chen Wei / Tanaka-sensei', room: 'Language Center', color: 'bg-red-50 border-red-200 text-red-900' },
        { period: 4, time: '13:15 - 14:45', subject: 'Ekonomi Terapan & Kewirausahaan Mandiri', subjectEn: 'Economics & Young Entrepreneurs', teacher: 'Reza Fahmi, M.B.A.', room: 'Room 101', color: 'bg-yellow-50 border-yellow-200 text-yellow-900' },
        { period: 5, time: '14:45 - 16:00', subject: 'Praktek Lapangan Sains Lingkungan', subjectEn: 'Environmental Fieldwork & Green Lab', teacher: 'Dr. Maya Hartono', room: 'Botanical Garden', color: 'bg-green-50 border-green-200 text-green-900' },
      ]
    },
    {
      day: 'Jumat',
      dayEn: 'Friday',
      slots: [
        { period: 1, time: '07:30 - 08:30', subject: 'Kajian Rohani & Pembangunan Karakter', subjectEn: 'Spiritual Ethics & Character Building', teacher: 'Pembina Rohani Sekolah', room: 'Multifaith Center', color: 'bg-purple-50 border-purple-200 text-purple-900' },
        { period: 2, time: '08:30 - 10:00', subject: 'Biologi Genetika & Bioteknologi', subjectEn: 'Genetics & Biotechnology', teacher: 'Dr. Maya Hartono', room: 'Bio Science Lab', color: 'bg-teal-50 border-teal-200 text-teal-900' },
        { period: 3, time: '10:15 - 11:30', subject: 'Komunikasi Publik & Debat Bahasa Inggris', subjectEn: 'Public Speaking & Debate', teacher: 'David Miller, M.A.', room: 'Speech Amphitheater', color: 'bg-blue-50 border-blue-200 text-blue-900' },
        { period: 4, time: '13:30 - 15:30', subject: 'Kegiatan Ekstrakurikuler Pilihan (Paskibra, Basket, Robotik, Padus)', subjectEn: 'Extracurricular Activities & Clubs', teacher: 'Club Coaches', room: 'Campus Facilities', color: 'bg-slate-100 border-slate-300 text-slate-900' },
      ]
    }
  ]
};

export const TEACHERS_DATA: Teacher[] = [
  {
    id: 'tch-1',
    name: 'Katherine Gonzalez, M.Ed., Ph.D.',
    role: 'Sekolah Grandmaster / Head of School',
    roleEn: 'Sekolah Grandmaster / Head of School',
    department: 'science',
    departmentName: 'Kepemimpinan & Sains',
    departmentNameEn: 'Leadership & Science',
    degrees: 'Ph.D. Educational Leadership (Harvard), M.Ed. (Oxford)',
    experienceYears: 24,
    bio: 'Berpengalaman lebih dari dua dekade membina sistem pendidikan berstandar internasional yang memadukan keunggulan akademik dengan integritas budi pekerti luhur.',
    bioEn: 'Over two decades of experience nurturing internationally acclaimed curricula blending academic brilliance with compassionate character.',
    email: 'katherine.gonzalez@sekolah-high.sch.id',
    officeHours: 'Senin & Rabu, 10:00 - 12:00 WIB',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-2',
    name: 'Dr. Aris Sudarsono, M.Sc.',
    role: 'Ketua Departemen Fisika & Robotika',
    roleEn: 'Head of Physics & Robotics',
    department: 'science',
    departmentName: 'Fisika & Rekayasa',
    departmentNameEn: 'Physics & Engineering',
    degrees: 'Ph.D. Applied Physics (ITB), M.Sc. (TU Delft)',
    experienceYears: 16,
    bio: 'Membimbing kontingen Sekolah menjuarai International Physics Olympiad (IPhO) dan merancang kurikulum laboratorium sains eksperimental berstandar riset.',
    bioEn: 'Mentored Sekolah contingents to Olympic gold medals at IPhO and architect of our hands-on research physics experimental lab.',
    email: 'aris.sudarsono@sekolah-high.sch.id',
    officeHours: 'Selasa & Kamis, 13:00 - 15:00 WIB',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-3',
    name: 'Sarah Jenkins, M.Ed.',
    role: 'Koordinator Kurikulum Matematika Cambridge & IB',
    roleEn: 'Coordinator of Cambridge & IB Mathematics',
    department: 'math',
    departmentName: 'Matematika Terapan',
    departmentNameEn: 'Applied Mathematics',
    degrees: 'M.Ed. Mathematics Pedagogy (Columbia), B.Sc. (Stanford)',
    experienceYears: 14,
    bio: 'Menjadikan konsep kalkulus dan aljabar tingkat lanjut mudah dipahami melalui pendekatan visualisasi komputasi dan pemecahan masalah dunia nyata.',
    bioEn: 'Transforms advanced calculus and discrete algebra into intuitive visual insights through computational modeling and real-world problem sets.',
    email: 'sarah.jenkins@sekolah-high.sch.id',
    officeHours: 'Senin & Jumat, 09:00 - 11:00 WIB',
    image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-4',
    name: 'Budi Santoso, M.Kom.',
    role: 'Kepala Laboratorium Komputer & Kecerdasan Buatan',
    roleEn: 'Head of Computer Science & AI Innovation Lab',
    department: 'technology',
    departmentName: 'Ilmu Komputer',
    departmentNameEn: 'Computer Science',
    degrees: 'M.Kom. Computer Science (UI), Google Certified Educator',
    experienceYears: 12,
    bio: 'Aktif mengajar algoritma pemrograman, web development modern, dan etika AI kepada siswa SMA agar siap berkompetisi di panggung teknologi global.',
    bioEn: 'Pioneering computational thinking, cloud development, and ethical AI architectures for modern high school innovators.',
    email: 'budi.santoso@sekolah-high.sch.id',
    officeHours: 'Rabu & Kamis, 14:00 - 16:00 WIB',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-5',
    name: 'Dr. Maya Hartono, Sp.Bio.',
    role: 'Pengajar Biologi Molekuler & Sains Lingkungan',
    roleEn: 'Senior Biology & Environmental Sciences Faculty',
    department: 'science',
    departmentName: 'Biologi & Ekologi',
    departmentNameEn: 'Biology & Ecology',
    degrees: 'Ph.D. Molecular Biology (UGM), Post-doc (Monash)',
    experienceYears: 15,
    bio: 'Pemrakarsa program Green Campus Sekolah dan pembimbing proyek penelitian siswa yang memenangkan medali emas di ajang Indonesian Science Project Olympiad.',
    bioEn: 'Founder of Sekolah Green Campus initiative and mentor of top gold medal winning student biological research teams.',
    email: 'maya.hartono@sekolah-high.sch.id',
    officeHours: 'Selasa & Rabu, 10:00 - 12:00 WIB',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-6',
    name: 'David Miller, M.A.',
    role: 'Kepala Departemen Bahasa & Sastra Inggris',
    roleEn: 'Head of English Language & Literature',
    department: 'language',
    departmentName: 'Bahasa & Sastra',
    departmentNameEn: 'Language & Humanities',
    degrees: 'M.A. English Literature (Edinburgh), CELTA Master Trainer',
    experienceYears: 18,
    bio: 'Mengembangkan kemahiran komunikasi siswa dalam debat internasional Model United Nations, penulisan esai kritis, dan persiapan ujian IELTS.',
    bioEn: 'Empowering students in Model UN debate diplomacy, persuasive rhetoric, academic essay composition, and international IELTS excellence.',
    email: 'david.miller@sekolah-high.sch.id',
    officeHours: 'Senin & Kamis, 11:00 - 13:00 WIB',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-7',
    name: 'Prof. Diana Kusuma, M.Si., Ph.D.',
    role: 'Pengajar Kimia Analitik & Riset Terapan',
    roleEn: 'Senior Analytical Chemistry Faculty',
    department: 'science',
    departmentName: 'Kimia & Riset',
    departmentNameEn: 'Chemistry & Research',
    degrees: 'Ph.D. Chemical Science (NUS), M.Si. (ITB)',
    experienceYears: 17,
    bio: 'Membimbing tim karya tulis ilmiah remaja dan memimpin riset ekstraksi senyawa bioaktif dari flora tropis Indonesia.',
    bioEn: 'Leads student chemistry research labs and mentors national youth scientific research champions in analytical spectroscopy.',
    email: 'diana.kusuma@sekolah-high.sch.id',
    officeHours: 'Senin & Rabu, 08:30 - 10:30 WIB',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-8',
    name: 'Chen Wei, B.Ed., M.A.',
    role: 'Pengajar Bahasa Mandarin & Budaya Asia Timur',
    roleEn: 'Mandarin Language & Cultural Studies',
    department: 'language',
    departmentName: 'Bahasa Mandarin',
    departmentNameEn: 'Mandarin Language',
    degrees: 'M.A. Applied Linguistics (Beijing Normal Univ), B.Ed.',
    experienceYears: 10,
    bio: 'Mempersiapkan siswa meraih skor HSK tertinggi dan beasiswa universitas unggulan di Tiongkok, Taiwan, dan Singapura.',
    bioEn: 'Prepares students for HSK certifications and competitive scholarship placements at prestigious Asian universities.',
    email: 'chen.wei@sekolah-high.sch.id',
    officeHours: 'Selasa & Kamis, 10:00 - 12:00 WIB',
    image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-9',
    name: 'Drs. Hendro Wibowo, M.Pd.',
    role: 'Pendidik Kewarganegaraan & Sejarah Nusantara',
    roleEn: 'Civic Studies & Indonesian History',
    department: 'humanities',
    departmentName: 'Sosial & Sejarah',
    departmentNameEn: 'Social & History',
    degrees: 'M.Pd. Pendidikan Sejarah (UNJ), B.A. (UGM)',
    experienceYears: 20,
    bio: 'Menanamkan kecintaan pada sejarah bangsa, nilai-nilai Pancasila, dan etika kepemimpinan generasi muda Indonesia.',
    bioEn: 'Instills national heritage pride, democratic ethics, and visionary civic leadership among future national leaders.',
    email: 'hendro.wibowo@sekolah-high.sch.id',
    officeHours: 'Senin & Jumat, 13:00 - 15:00 WIB',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-10',
    name: 'Rizky Ananda, M.T.',
    role: 'Instruktur Robotika & Rekayasa Embedded Systems',
    roleEn: 'Robotics & Embedded Systems Instructor',
    department: 'technology',
    departmentName: 'Robotika & IoT',
    departmentNameEn: 'Robotics & IoT',
    degrees: 'M.T. Teknik Elektro & Mekatronika (ITS)',
    experienceYears: 9,
    bio: 'Membina tim Sekolah dalam kompetisi First Robotics dan pengembangan prototipe sensor Internet of Things (IoT).',
    bioEn: 'Mentors high school teams in competitive international robotics tournaments and hands-on smart IoT prototyping.',
    email: 'rizky.ananda@sekolah-high.sch.id',
    officeHours: 'Rabu & Jumat, 14:00 - 16:30 WIB',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-11',
    name: 'Maestro Clara Sugianto, M.Mus.',
    role: 'Direktur Orkestra Sekolah & Seni Komposisi',
    roleEn: 'Orchestra Director & Musical Composition',
    department: 'arts',
    departmentName: 'Seni Musik',
    departmentNameEn: 'Music & Arts',
    degrees: 'M.Mus. Orchestral Performance (Juilliard Affiliate), B.Mus.',
    experienceYears: 13,
    bio: 'Memimpin paduan suara dan ansambel orkestra siswa untuk tampil di panggung simfoni nasional dan internasional.',
    bioEn: 'Leads student youth symphony orchestras and acoustic ensembles to acclaimed concert hall performances.',
    email: 'clara.sugianto@sekolah-high.sch.id',
    officeHours: 'Senin & Kamis, 14:30 - 16:30 WIB',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tch-12',
    name: 'Ibu Ratna Dewi, M.Psi., Psikolog',
    role: 'Kepala Pusat Konseling & Perencanaan Karir',
    roleEn: 'Head of Psychological Counseling & Career Guidance',
    department: 'humanities',
    departmentName: 'Konseling & Karir',
    departmentNameEn: 'Counseling & Guidance',
    degrees: 'M.Psi. Psikologi Klinis & Pendidikan (UI)',
    experienceYears: 16,
    bio: 'Menyediakan bimbingan personal untuk kesehatan mental siswa, penemuan minat bakat, dan strategi seleksi universitas global.',
    bioEn: 'Provides dedicated adolescent wellness counseling, psychological aptitude assessments, and global college application roadmaps.',
    email: 'ratna.dewi@sekolah-high.sch.id',
    officeHours: 'Setiap Hari Kerja, 09:00 - 14:00 WIB',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=600&q=80'
  }
];

export const STORIES_DATA: Story[] = [
  {
    id: 'story-1',
    title: 'Diskusi Riset Digital & Kolaborasi Sains Siswa di Ruang Belajar Mandiri',
    titleEn: 'Collaborative Digital Research & Peer Study Sessions in Library Commons',
    author: 'Kelompok Riset & Literasi Siswa',
    role: 'Student Study Guild',
    category: 'Kolaborasi & Riset',
    date: '28 Oktober 2026',
    readTime: '4 menit baca',
    snippet: 'Siswa dan siswi kelas akselerasi membedah modul pembelajaran komputasi dan jurnal ilmiah secara interaktif menggunakan perangkat digital dan diskusi terbuka.',
    snippetEn: 'Accelerated program students dissect computational modeling and international journals through interactive peer discussions and digital workflows.',
    content: 'Suasana belajar di perpustakaan Sekolah selalu dipenuhi semangat kolaborasi. Duduk melingkar di ruang baca dengan fasilitas laptop dan koleksi referensi lengkap, siswa saling bertukar gagasan, memecahkan soal analitis, dan merancang presentasi ilmiah bersama.',
    contentEn: 'The collaborative ethos in Sekolah library commons thrives on vibrant teamwork. Students gather with laptops and extensive reference resources to brainstorm complex mathematical modeling and scientific literature.',
    image: '/assets/aistudio/image_081c038a.png'
  },
  {
    id: 'story-2',
    title: 'Ekspedisi Konservasi Mangrove & Riset Mikroplastik Siswa di Teluk Jakarta',
    titleEn: 'Mangrove Ecology & Microplastic Marine Expedition at Jakarta Bay',
    author: 'Klub Pecinta Alam & Biologi',
    role: 'Eco-Rangers Sekolah',
    category: 'Environment',
    date: '15 Oktober 2026',
    readTime: '5 menit baca',
    snippet: 'Siswa kelas 10 dan 12 mengambil sampel air dan menanam 1.000 bibit pohon bakau dalam proyek pembelajaran kontekstual lintas mata pelajaran.',
    snippetEn: '10th and 12th graders extracted marine sediment samples and planted 1,000 mangrove saplings in an interdisciplinary science initiative.',
    content: 'Pembelajaran sains di Sekolah tidak pernah berhenti di dalam empat dinding ruang kelas. Melalui bimbingan Dr. Maya Hartono, siswa menguji tingkat salinitas dan mendokumentasikan mikroplastik dengan spektrometri portabel.',
    contentEn: 'Science at Sekolah never stays confined inside textbook theory. Supervised by Dr. Maya, students analyzed marine salinity and microplastic deposits with field spectrometry kits.',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'story-3',
    title: 'Peluncuran Antologi Puisi & Lukisan Karya Siswa: "Jejak Langkah Muda"',
    titleEn: 'Anthology of Poems & Fine Arts Exhibition: "Youthful Footprints"',
    author: 'Sanggar Sastra & Seni Rupa',
    role: 'Creative Arts Guild',
    category: 'Arts & Culture',
    date: '02 Oktober 2026',
    readTime: '3 menit baca',
    snippet: 'Kompilasi 45 karya puisi dwibahasa dan 30 karya lukis kanvas siswa dipamerkan secara terbuka dan diterbitkan secara resmi.',
    snippetEn: 'A curated compilation of 45 bilingual student poems and 30 acrylic paintings published and exhibited in the school grand gallery.',
    content: 'Pameran seni tahunan ini dihadiri oleh kurator seni rupa nasional dan para orang tua siswa. Seluruh hasil penjualan buku antologi didonasikan untuk program beasiswa pendidikan anak pra-sejahtera.',
    contentEn: 'The annual vernissage drew national art critics and proud families. All anthology proceeds were directed to our underprivileged youth education scholarship fund.',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Digital Library & Collaborative Study Commons',
    titleEn: 'Modern Digital Library & Collaborative Study Commons',
    category: 'facilities',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    caption: 'Perpustakaan dua lantai berkapasitas 25.000 koleksi buku fisik dan akses ke ribuan jurnal internasional.'
  },
  {
    id: 'gal-2',
    title: 'Laboratorium Bioteknologi & Mikrobiologi Tingkat Lanjut',
    titleEn: 'Advanced Biotechnology & Molecular Research Lab',
    category: 'stem',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    caption: 'Peralatan mikroskop elektron digital dan laminar flow hood untuk riset biologi mandiri siswa.'
  },
  {
    id: 'gal-3',
    title: 'Gedung Seni Pertunjukan & Teater Akustik Megah',
    titleEn: 'Grand Performing Arts Theater & Acoustic Concert Hall',
    category: 'arts',
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=800&q=80',
    caption: 'Auditorium berkapasitas 850 kursi dengan tata akustik profesional untuk pementasan drama dan konser orkestra.'
  },
  {
    id: 'gal-4',
    title: 'Stadion Olahraga Multifungsi & Kolam Renang Standar Olimpiade',
    titleEn: 'Olympic Standard Aquatics Center & Multi-Sport Arena',
    category: 'sports',
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    caption: 'Fasilitas lapangan basket indoor berlantai kayu maple, lapangan futsal, dan kolam renang air hangat.'
  },
  {
    id: 'gal-5',
    title: 'Laboratorium Kecerdasan Buatan & Robotika Otonom',
    titleEn: 'AI Innovation Hub & Robotics Prototyping Workshop',
    category: 'stem',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    caption: 'Dilengkapi stasiun 3D printer berpresisi tinggi, CNC router, dan GPU workstation untuk pelatihan model neural network.'
  },
  {
    id: 'gal-6',
    title: 'Upacara Wisuda & Pengukuhan Alumni Berprestasi',
    titleEn: 'Annual Commencement & Graduation Ceremony',
    category: 'graduation',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80',
    caption: 'Momen khidmat pelepasan lulusan angkatan ke-27 yang berhasil diterima di perguruan tinggi kelas dunia.'
  }
];

export const CAMPUS_LOCATIONS: CampusLocation[] = [
  {
    id: 'loc-1',
    name: 'Gedung Pusat Sains & Laboratorium STEM Terintegrasi',
    nameEn: 'Integrated STEM & Advanced Science Center',
    description: 'Kompleks 4 lantai yang mewadahi laboratorium Fisika Modern, Kimia Analitik, Biologi Sel, dan FabLab Rekayasa Teknik.',
    descriptionEn: '4-story facility hosting specialized Physics, Analytical Chemistry, Cell Biology laboratories, and Engineering FabLabs.',
    features: ['Mikroskop Digital 4K', 'Peralatan Spektrofotometer', '3D Printer Farm', 'Sistem Ventilasi Negatif'],
    featuresEn: ['4K Digital Microscopes', 'Spectrophotometer Units', '3D Printer Farm', 'Fume Hood Ventilation'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    capacity: '240 Siswa / Sesi',
    floor: 'Gedung B, Lantai 1-4'
  },
  {
    id: 'loc-2',
    name: 'Perpustakaan Digital & Collaborative Learning Hub',
    nameEn: 'Digital Library & Collaborative Learning Commons',
    description: 'Ruang baca bernuansa hangat dengan pod diskusi kedap suara, terminal akses JSTOR/EBSCO, dan pojok santai literasi.',
    descriptionEn: 'Acoustically tuned reading sanctuary with individual soundproof study pods, academic journal access, and silent commons.',
    features: ['25.000+ Koleksi Buku', 'Akses Jurnal Internasional', '12 Pod Diskusi Kelompok', 'Pusat Kopi & Kafe Siswa'],
    featuresEn: ['25,000+ Book Volumes', 'JSTOR/EBSCO Access', '12 Group Discussion Pods', 'Student Reading Cafe'],
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    capacity: '350 Siswa',
    floor: 'Gedung Utama, Lantai 2 & 3'
  },
  {
    id: 'loc-3',
    name: 'Auditorium Teater & Concert Hall "Graha Cendekia"',
    nameEn: 'Grand Performing Arts Concert Hall "Graha Cendekia"',
    description: 'Panggung berstandar simfoni dengan akustik alami yang disetel khusus untuk orkestra, pementasan drama, dan simposium internasional.',
    descriptionEn: 'Symphony-grade performance hall acoustically engineered for orchestral masterclasses, drama productions, and international summits.',
    features: ['Kapasitas 850 Kursi Ergonomis', 'Sistem Audio D-Series', 'Ruang Ganti & Backstage Lengkap', 'Panggung Hidraulik'],
    featuresEn: ['850 Ergonomic Theater Seats', 'Surround Sound Audio', 'Backstage Dressing Suites', 'Hydraulic Stage System'],
    imageUrl: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80',
    capacity: '850 Orang',
    floor: 'Gedung C, Lantai 1'
  },
  {
    id: 'loc-4',
    name: 'Kompleks Olahraga & Pusat Kebugaran Atletik',
    nameEn: 'Multi-Sport Athletic Complex & Olympic Swimming Pool',
    description: 'Fasilitas olahraga komprehensif yang dirancang untuk mendukung pembinaan fisik optimal dan kompetisi antarsekolah.',
    descriptionEn: 'Comprehensive athletic facility designed for physical wellness and championship-caliber high school leagues.',
    features: ['Lapangan Basket FIBA Hardwood', 'Kolam Renang 50m Olympic', 'Fitness Center & Gym', 'Trek Lari Sintetis Tartan'],
    featuresEn: ['FIBA Wooden Court', '50m Olympic Pool', 'Equipped Weight Gym', 'Tartan Running Track'],
    imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=80',
    capacity: '500 Orang',
    floor: 'Area Sayap Barat'
  }
];
