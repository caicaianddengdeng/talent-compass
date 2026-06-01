import type { Question, ResultType } from './types';
import { talentQuiz } from './talent';
import { loveQuiz } from './love';
import { mbtiQuiz } from './mbti';

export interface QuizMeta {
  id: string;
  title: string;
  emoji: string;
  description: string;
  questionCount: number;
  duration: string;
  participants: number;
  gradient: string;
  color: string;
  tags: string[];
}

export interface QuizBundle {
  meta: QuizMeta;
  questions: Question[];
  results: ResultType[];
}

export const quizRegistry: Record<string, QuizMeta> = {
  talent: {
    id: 'talent',
    title: '天赋罗盘',
    emoji: '🧭',
    description: '基于心理学模型，12题发现你的隐藏天赋和最佳职业方向',
    questionCount: 12,
    duration: '3分钟',
    participants: 528347,
    gradient: 'linear-gradient(135deg, #7C3AED, #3B82F6)',
    color: '#7C3AED',
    tags: ['职业', '热门', '深度'],
  },
  love: {
    id: 'love',
    title: '恋爱匹配度',
    emoji: '💕',
    description: '了解你的恋爱风格和理想伴侣类型，找到最适合你的TA',
    questionCount: 10,
    duration: '2分钟',
    participants: 312056,
    gradient: 'linear-gradient(135deg, #EC4899, #F43F5E)',
    color: '#EC4899',
    tags: ['情感', '热门', '社交'],
  },
  mbti: {
    id: 'mbti',
    title: 'MBTI简版',
    emoji: '🔍',
    description: '快速了解你的性格类型，发现你的思维和行为模式',
    questionCount: 8,
    duration: '2分钟',
    participants: 691234,
    gradient: 'linear-gradient(135deg, #059669, #06B6D4)',
    color: '#059669',
    tags: ['性格', '经典', '自我认知'],
  },
};

export function getQuiz(id: string): QuizBundle {
  const meta = quizRegistry[id];
  if (!meta) throw new Error(`Quiz not found: ${id}`);
  switch (id) {
    case 'talent': return { meta, ...talentQuiz };
    case 'love': return { meta, ...loveQuiz };
    case 'mbti': return { meta, ...mbtiQuiz };
    default: throw new Error(`Quiz not found: ${id}`);
  }
}
