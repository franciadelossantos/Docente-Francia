import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegalFramework } from './components/LegalFramework';
import { ModulesViewer } from './components/ModulesViewer';
import { SystemDiagram } from './components/SystemDiagram';
import { PensionSimulator } from './components/PensionSimulator';
import { TransferStepsGuide } from './components/TransferStepsGuide';
import { RoleplayCases } from './components/RoleplayCases';
import { TwoTruthsOneLie } from './components/TwoTruthsOneLie';
import { QuizAndChecklist } from './components/QuizAndChecklist';
import { CoursePdfViewer } from './components/CoursePdfViewer';
import { TeacherProfile } from './components/TeacherProfile';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');

  const toggleFontSize = () => {
    setFontSize((prev) => (prev === 'normal' ? 'large' : 'normal'));
  };

  return (
    <div className={`min-h-screen bg-black text-white transition-all ${fontSize === 'large' ? 'text-lg [zoom:1.06]' : ''}`}>
      {/* Top Header */}
      <Header
        onOpenContact={() => setIsContactOpen(true)}
        fontSize={fontSize}
        onToggleFontSize={toggleFontSize}
      />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Teacher Audio Voice & Key Quotes */}
        <Hero onOpenContact={() => setIsContactOpen(true)} />

        {/* Legal Framework Pillars (Constitution, Ley 379-81, Ley 87-01, Ley 1896-48, Res. 289-03) */}
        <LegalFramework />

        {/* Modules & Syllabus (60 Hours INFOTEP Course) */}
        <ModulesViewer />

        {/* System Architecture Diagram (Slide 30 SDSS) */}
        <SystemDiagram />

        {/* Interactive Pension & Transfer Eligibility Simulator */}
        <PensionSimulator />

        {/* 3 Step Transfer Sequence (DIDA -> DGJP -> AFP) */}
        <TransferStepsGuide />

        {/* Classroom Roleplay & Real Practical Case Studies */}
        <RoleplayCases />

        {/* Pedagogical Dynamic: 2 Truths & 1 Lie (Slide 9) */}
        <TwoTruthsOneLie />

        {/* Final Assessment Questionnaire & Previsional Document Checklist */}
        <QuizAndChecklist />

        {/* Original Course PDF Material Viewer & Download */}
        <CoursePdfViewer />

        {/* Teacher Profile & Classroom Pact (Licda. Francia De Los Santos Díaz) */}
        <TeacherProfile onOpenContact={() => setIsContactOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Contact & Registration Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
