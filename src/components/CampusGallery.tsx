import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/schoolData';
import { GalleryItem, Language } from '../types';
import { Eye, X, ZoomIn } from 'lucide-react';

interface CampusGalleryProps {
  lang: Language;
}

export const CampusGallery: React.FC<CampusGalleryProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', labelId: 'Semua Galeri', labelEn: 'All Photos' },
    { id: 'facilities', labelId: 'Fasilitas & Lingkungan', labelEn: 'Campus & Library' },
    { id: 'stem', labelId: 'Laboratorium Sains', labelEn: 'STEM Labs' },
    { id: 'arts', labelId: 'Seni Pertunjukan', labelEn: 'Theater & Arts' },
    { id: 'sports', labelId: 'Stadion Olahraga', labelEn: 'Sports Complex' },
    { id: 'graduation', labelId: 'Wisuda & Prestasi', labelEn: 'Commencement' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-[#edf4fd] text-slate-900 border-b border-blue-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-400 uppercase">
            {lang === 'id' ? 'Dokumentasi & Lingkungan Sekolah' : 'Visual Showcase'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 uppercase font-serif-title">
            {lang === 'id' ? 'GALERI FOTO SEKOLAH' : 'PHOTO GALLERY'}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            {lang === 'id'
              ? 'Ruang belajar modern berwawasan lingkungan yang dirancang untuk merangsang kolaborasi, inovasi riset, dan pengembangan bakat artistik siswa.'
              : 'Take an intimate glance inside our academic laboratories, concert theaters, digital library, and championship sports arena.'}
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-blue-100 rounded-lg max-w-2xl mx-auto shadow-sm">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-2 text-xs font-bold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-blue-800 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              {lang === 'id' ? cat.labelId : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative h-64 sm:h-72 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('photo-1541339907198-e08756dedf3f')) {
                    target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ZoomIn className="w-4 h-4" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600/80 px-2 py-0.5 rounded">
                  {item.category}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-1 leading-snug">
                  {lang === 'id' ? item.title : item.titleEn}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-0.5">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative max-w-4xl w-full bg-slate-900 rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative max-h-[70vh] flex items-center justify-center bg-black">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('photo-1541339907198-e08756dedf3f')) {
                    target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
                  }
                }}
              />
            </div>
            <div className="p-6 bg-slate-900 text-white">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                {activeItem.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold mt-1">
                {lang === 'id' ? activeItem.title : activeItem.titleEn}
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {activeItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
