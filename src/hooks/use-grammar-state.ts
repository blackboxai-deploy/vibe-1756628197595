"use client";

import { useState, useCallback } from 'react';
import { AppState, SentenceForm, PassiveMode, VocabCategory } from '@/types/grammar';

const initialState: AppState = {
  selectedGroupId: 1,
  selectedUnitId: 1,
  formType: 'A',
  passiveMode: 'PA',
  activeVocabTab: 'verb',
  subject: 'she',
  verb: 'accept',
  object: 'the offer',
  complement: '',
  showAgent: true
};

export function useGrammarState() {
  const [state, setState] = useState<AppState>(initialState);

  const updateState = useCallback((updates: Partial<AppState>) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const setSelectedGroup = useCallback((groupId: number) => {
    updateState({ selectedGroupId: groupId });
  }, [updateState]);

  const setSelectedUnit = useCallback((unitId: number) => {
    updateState({ selectedUnitId: unitId });
  }, [updateState]);

  const setFormType = useCallback((form: SentenceForm) => {
    updateState({ formType: form });
  }, [updateState]);

  const setPassiveMode = useCallback((mode: PassiveMode) => {
    updateState({ passiveMode: mode });
  }, [updateState]);

  const setVocabTab = useCallback((tab: VocabCategory) => {
    updateState({ activeVocabTab: tab });
  }, [updateState]);

  const setSentenceComponent = useCallback((key: keyof Pick<AppState, 'subject' | 'verb' | 'object' | 'complement'>, value: string) => {
    updateState({ [key]: value });
  }, [updateState]);

  const setShowAgent = useCallback((show: boolean) => {
    updateState({ showAgent: show });
  }, [updateState]);

  const resetState = useCallback(() => {
    setState(initialState);
  }, []);

  return {
    state,
    updateState,
    setSelectedGroup,
    setSelectedUnit,
    setFormType,
    setPassiveMode,
    setVocabTab,
    setSentenceComponent,
    setShowAgent,
    resetState
  };
}