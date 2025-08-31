"use client";

import { Button } from "@/components/ui/button";

interface HeaderProps {
  onVocabClick: () => void;
  onSettingsClick: () => void;
  onResetClick: () => void;
}

export function Header({ onVocabClick, onSettingsClick, onResetClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 px-4 h-14 flex items-center gap-3">
      <Button
        onClick={onVocabClick}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4"
      >
        Vocabulary
      </Button>
      
      <div className="flex-1" />
      
      <span className="text-gray-500 text-xs font-medium mr-2">
        Matcanban84
      </span>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onResetClick}
        className="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600"
        title="Reset"
      >
        ↻
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onSettingsClick}
        className="w-9 h-9 rounded-full hover:bg-gray-100 text-gray-600"
        title="Settings"
      >
        ⚙
      </Button>
    </header>
  );
}