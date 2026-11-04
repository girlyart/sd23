import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HeadmasterTalk } from './components/HeadmasterTalk';
import { CoreValues } from './components/CoreValues';
import { CallToActionBanner } from './components/CallToActionBanner';
import { AcademicCalendar } from './components/AcademicCalendar';
import { TeachersDirectory } from './components/TeachersDirectory';
import { CampusGallery } from './components/CampusGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VirtualTourModal } from './components/VirtualTourModal';
import { AdmissionsModal } from './components/AdmissionsModal';
import { SearchModal } from './components/SearchModal';
import { EventRsvpModal } from './components/EventRsvpModal';
import { TeacherContactModal } from './components/TeacherContactModal';
import { Language, SchoolEvent, Teacher } from './types';

export default function App() {
  const [lang, setLang] = useState<Language>('id');
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modals state
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isAdmissionsOpen, setIsAdmissionsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedEventForRsvp, setSelectedEventForRsvp] = useState<SchoolEvent | null>(null);
  const [selectedTeacherForContact, setSelectedTeacherForContact] = useState<Teacher | null>(null);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-amber-300 selection:text-slate-900">
      {/* Fixed Header Top Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero with Reference Student Cutout & 3 Bottom Cards */}
        <Hero
          lang={lang}
          onOpenTour={() => setIsTourOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        {/* Grandmaster Talk ("EDUCATION IS THE MOST POWERFUL WEAPON") */}
        <HeadmasterTalk
          lang={lang}
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        />

        {/* Core Values ("WE HAVE FAITH IN OUR STUDENT FUTURE" - 4 Pillars) */}
        <CoreValues lang={lang} />

        {/* Call to Action Blue Banner with Medal & Learn More */}
        <CallToActionBanner
          lang={lang}
          onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        />

        {/* Academic Calendar */}
        <AcademicCalendar
          lang={lang}
          onSelectEvent={(event) => setSelectedEventForRsvp(event)}
        />

        {/* Teachers Directory */}
        <TeachersDirectory
          lang={lang}
          onSelectTeacher={(teacher) => setSelectedTeacherForContact(teacher)}
        />

        {/* Campus Photo Gallery */}
        <CampusGallery lang={lang} />

        {/* Contact & Inquiry Section */}
        <ContactSection lang={lang} />
      </main>

      {/* Institutional Footer */}
      <Footer
        lang={lang}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
        onOpenTour={() => setIsTourOpen(true)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Interactive Modals */}
      <VirtualTourModal
        lang={lang}
        isOpen={isTourOpen}
        onClose={() => setIsTourOpen(false)}
        onOpenAdmissions={() => setIsAdmissionsOpen(true)}
      />

      <AdmissionsModal
        lang={lang}
        isOpen={isAdmissionsOpen}
        onClose={() => setIsAdmissionsOpen(false)}
      />

      <SearchModal
        lang={lang}
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigateSection={handleNavigateSection}
      />

      <EventRsvpModal
        lang={lang}
        event={selectedEventForRsvp}
        onClose={() => setSelectedEventForRsvp(null)}
      />

      <TeacherContactModal
        lang={lang}
        teacher={selectedTeacherForContact}
        onClose={() => setSelectedTeacherForContact(null)}
      />
    </div>
  );
}
