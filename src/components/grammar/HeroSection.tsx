"use client";

interface HeroSectionProps {
  sentence: string;
  translation: string;
}

export function HeroSection({ sentence, translation }: HeroSectionProps) {
  return (
    <section className="bg-white border-b border-gray-200 px-6 py-8 text-center">
      <div 
        className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 text-gray-900"
        dangerouslySetInnerHTML={{ __html: sentence }}
      />
      <div className="text-lg md:text-xl text-gray-600 font-medium">
        {translation}
      </div>
    </section>
  );
}