export interface GrammarGroup {
  id: number;
  name: string;
  en: string;
}

export interface GrammarUnit {
  id: number;
  name_en: string;
  name_vi: string;
  groupId: number;
  core_knowledge?: string;
}

export interface VocabItem {
  en: string;
  vi: string;
  extra?: string;
  type?: 'singular' | 'plural' | 'uncountable';
}

export interface VocabData {
  verb: VocabItem[];
  adj: VocabItem[];
  adv: VocabItem[];
  noun: VocabItem[];
}

export type SentenceForm = 'A' | 'N' | 'Q' | 'P';
export type PassiveMode = 'PA' | 'PN' | 'PQ';
export type VocabCategory = 'verb' | 'irregularVerb' | 'adj' | 'adjEdIng' | 'adv' | 'sigNoun' | 'pluNoun' | 'uncNoun';

export interface AppState {
  selectedGroupId: number;
  selectedUnitId: number;
  formType: SentenceForm;
  passiveMode: PassiveMode;
  activeVocabTab: VocabCategory;
  subject: string;
  verb: string;
  object: string;
  complement: string;
  showAgent: boolean;
}

export interface SentenceComponents {
  subject: string;
  verb: string;
  object: string;
  complement: string;
}

export interface GrammarEngineResult {
  english: string;
  vietnamese: string;
  structure: string;
}