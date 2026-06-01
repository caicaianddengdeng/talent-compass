export interface Question {
  id: number;
  text: string;
  options: {
    label: string;
    value: number;
    scores: Record<string, number>;
  }[];
}

export interface ResultType {
  id: string;
  name: string;
  emoji: string;
  subtitle: string;
  description: string;
  strengths: string[];
  careers: string[];
  color: string;
  gradient: string;
  deepAnalysis?: string;
}

export interface QuizData {
  questions: Question[];
  results: ResultType[];
}
