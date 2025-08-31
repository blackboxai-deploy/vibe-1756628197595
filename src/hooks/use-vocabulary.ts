"use client";

import { useMemo } from 'react';
import { VocabItem, VocabCategory } from '@/types/grammar';
import { VOCAB_DATA } from '@/data/vocabulary';
import { IRREGULAR_PAST } from '@/lib/grammar-engine';

export function useVocabulary() {
  const getVocabByCategory = useMemo(() => (category: VocabCategory): VocabItem[] => {
    switch (category) {
      case 'verb':
        return VOCAB_DATA.verb;
      case 'irregularVerb':
        return VOCAB_DATA.verb.filter(v => IRREGULAR_PAST[v.en]);
      case 'adj':
        return VOCAB_DATA.adj;
      case 'adjEdIng':
        return VOCAB_DATA.adj.filter(a => a.extra);
      case 'adv':
        return VOCAB_DATA.adv;
      case 'sigNoun':
        return VOCAB_DATA.noun.filter(n => n.type === 'singular');
      case 'pluNoun':
        return VOCAB_DATA.noun.filter(n => n.type === 'plural');
      case 'uncNoun':
        return VOCAB_DATA.noun.filter(n => n.type === 'uncountable');
      default:
        return [];
    }
  }, []);

  const searchVocab = useMemo(() => (category: VocabCategory, query: string): VocabItem[] => {
    const data = getVocabByCategory(category);
    if (!query.trim()) return data;
    
    const lowerQuery = query.toLowerCase();
    return data.filter(item => 
      item.en.toLowerCase().includes(lowerQuery) || 
      item.vi.toLowerCase().includes(lowerQuery)
    );
  }, [getVocabByCategory]);

  const groupVocabByLetter = useMemo(() => (vocab: VocabItem[]): Record<string, VocabItem[]> => {
    return vocab.reduce((acc, item) => {
      const letter = (item.en[0] || '#').toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(item);
      return acc;
    }, {} as Record<string, VocabItem[]>);
  }, []);

  const getVocabStats = useMemo(() => (category: VocabCategory) => {
    const total = getVocabByCategory(category).length;
    return { total };
  }, [getVocabByCategory]);

  return {
    getVocabByCategory,
    searchVocab,
    groupVocabByLetter,
    getVocabStats,
    vocabData: VOCAB_DATA
  };
}