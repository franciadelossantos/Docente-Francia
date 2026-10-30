export interface CourseModule {
  id: string;
  number: string;
  title: string;
  hours: number;
  description: string;
  topics: string[];
  legalBasis: string[];
  docentNote: string;
  slidesRef: string;
}

export interface LegalLaw {
  code: string;
  title: string;
  year: number;
  importance: string;
  coreArticle: string;
  scope: string;
}

export interface RoleplayCase {
  id: string;
  title: string;
  subtitle: string;
  situation: string;
  claimant: {
    name: string;
    age: number;
    yearsOfService: number;
    currentSystem: string;
    institution: string;
  };
  options: {
    id: string;
    label: string;
    isCorrect: boolean;
    explanation: string;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  feedback: string;
  legalArticle: string;
}

export interface ChecklistItem {
  id: string;
  category: 'identidad' | 'laboral' | 'institucional' | 'traspaso';
  label: string;
  detail: string;
  required: boolean;
}

export interface TruthLieRound {
  id: number;
  statements: {
    id: string;
    text: string;
    isTrue: boolean;
    explanation: string;
  }[];
}
