import { SentenceForm, PassiveMode, GrammarEngineResult } from '@/types/grammar';

// Grammar constants
export const STATIVE_VERBS = new Set([
  'know', 'believe', 'understand', 'love', 'like', 'hate', 'prefer', 'want', 
  'need', 'belong', 'own', 'seem', 'appear', 'contain', 'consist', 'include', 
  'remember', 'forget', 'agree', 'mean', 'hear', 'see', 'smell', 'taste', 
  'think', 'have', 'be', 'imagine', 'resemble', 'doubt', 'recognize', 'realize'
]);

export const INTRANSITIVE_VERBS = new Set([
  'arrive', 'come', 'go', 'happen', 'occur', 'appear', 'sleep', 'die', 'exist', 
  'fall', 'rise', 'sit', 'stand', 'rain', 'snow', 'smile', 'laugh', 'swim'
]);

export const IRREGULAR_PAST: Record<string, string> = {
  'be': 'was/were', 'have': 'had', 'do': 'did', 'go': 'went', 'say': 'said',
  'make': 'made', 'know': 'knew', 'think': 'thought', 'take': 'took', 'see': 'saw',
  'come': 'came', 'find': 'found', 'give': 'gave', 'tell': 'told', 'feel': 'felt',
  'become': 'became', 'leave': 'left', 'put': 'put', 'keep': 'kept', 'begin': 'began',
  'hear': 'heard', 'run': 'ran', 'bring': 'brought', 'write': 'wrote', 'sit': 'sat',
  'stand': 'stood', 'lose': 'lost', 'pay': 'paid', 'meet': 'met', 'read': 'read',
  'speak': 'spoke', 'drive': 'drove', 'buy': 'bought', 'choose': 'chose', 'eat': 'ate',
  'drink': 'drank', 'get': 'got', 'hold': 'held', 'win': 'won', 'send': 'sent',
  'build': 'built', 'spend': 'spent', 'catch': 'caught', 'teach': 'taught'
};

export const IRREGULAR_PP: Record<string, string> = {
  'be': 'been', 'have': 'had', 'do': 'done', 'go': 'gone', 'say': 'said',
  'make': 'made', 'know': 'known', 'think': 'thought', 'take': 'taken', 'see': 'seen',
  'come': 'come', 'find': 'found', 'give': 'given', 'tell': 'told', 'feel': 'felt',
  'become': 'become', 'leave': 'left', 'put': 'put', 'keep': 'kept', 'begin': 'begun',
  'show': 'shown', 'hear': 'heard', 'run': 'run', 'bring': 'brought', 'write': 'written',
  'sit': 'sat', 'stand': 'stood', 'lose': 'lost', 'pay': 'paid', 'meet': 'met',
  'read': 'read', 'speak': 'spoken', 'drive': 'driven', 'buy': 'bought', 'choose': 'chosen',
  'eat': 'eaten', 'drink': 'drunk', 'get': 'gotten', 'hold': 'held', 'win': 'won',
  'send': 'sent', 'build': 'built', 'spend': 'spent', 'catch': 'caught', 'teach': 'taught'
};

export const VI_VERB_MAP: Record<string, string> = {
  'accept': 'chấp nhận', 'work': 'làm việc', 'go': 'đi', 'have': 'có', 'be': 'là',
  'do': 'làm', 'arrive': 'đến', 'help': 'giúp', 'study': 'học', 'write': 'viết',
  'read': 'đọc', 'speak': 'nói', 'eat': 'ăn', 'drink': 'uống', 'make': 'làm',
  'take': 'lấy', 'give': 'cho', 'know': 'biết', 'think': 'nghĩ', 'see': 'thấy',
  'watch': 'xem', 'learn': 'học', 'teach': 'dạy', 'understand': 'hiểu', 'listen': 'nghe',
  'talk': 'nói chuyện', 'walk': 'đi bộ', 'run': 'chạy', 'sit': 'ngồi', 'stand': 'đứng'
};

export const OBJ_PRONOUNS: Record<string, string> = {
  'i': 'me', 'you': 'you', 'we': 'us', 'they': 'them',
  'he': 'him', 'she': 'her', 'it': 'it'
};

// Helper functions
export const capFirst = (s: string): string => s ? s.charAt(0).toUpperCase() + s.slice(1) : '';

export const subjectIsPlural = (subject: string): boolean => {
  const lower = subject.toLowerCase();
  return ['we', 'they', 'students'].includes(lower) || lower === 'you';
};

export const getBePresent = (subject: string): string => 
  subjectIsPlural(subject) ? 'are' : (subject.toLowerCase() === 'i' ? 'am' : 'is');

export const getBePast = (subject: string): string => 
  (subject.toLowerCase() === 'i' || !subjectIsPlural(subject)) ? 'was' : 'were';

export const getHave = (subject: string): string => 
  subjectIsPlural(subject) ? 'have' : 'has';

export function makeVerbS(verb: string, subject: string): string {
  const v = verb.toLowerCase();
  if (subjectIsPlural(subject) || subject.toLowerCase() === 'i') return v;
  if (v === 'have') return 'has';
  if (v === 'be') return 'is';
  if (v === 'do') return 'does';
  if (/(s|x|z|ch|sh)$/.test(v)) return v + 'es';
  if (/[^aeiou]y$/.test(v)) return v.slice(0, -1) + 'ies';
  return v + 's';
}

export function makeVerbIng(verb: string): string {
  const v = verb.toLowerCase();
  if (v === 'be') return 'being';
  if (/ie$/.test(v)) return v.slice(0, -2) + 'ying';
  if (/c$/.test(v)) return v + 'king';
  if (v.endsWith('e') && !/(ee|ye|oe)$/.test(v)) return v.slice(0, -1) + 'ing';
  if (/[^aeiou][aeiou][^aeiouwxy]$/.test(v) && v.split(/[aeiouy]+/).length - 1 === 1) {
    return v + v.slice(-1) + 'ing'; // Monosyllabic CVC pattern
  }
  return v + 'ing';
}

export function makeVerbPast(verb: string): string {
  const v = verb.toLowerCase();
  if (IRREGULAR_PAST[v]) return IRREGULAR_PAST[v];
  if (v.endsWith('e')) return v + 'd';
  if (/[^aeiou]y$/.test(v)) return v.slice(0, -1) + 'ied';
  if (/[^aeiou][aeiou][^aeiouwxy]$/.test(v) && v.split(/[aeiouy]+/).length - 1 === 1) {
    return v + v.slice(-1) + 'ed'; // Monosyllabic CVC pattern
  }
  return v + 'ed';
}

export const makeVerbPP = (verb: string): string => {
  const v = verb.toLowerCase();
  return IRREGULAR_PP[v] || makeVerbPast(v);
};

// Sentence highlighting
export const wrapAux = (text: string): string => 
  `<span class="text-blue-600 font-semibold">${text}</span>`;

export const wrapVerb = (text: string): string => 
  `<span class="text-purple-600 font-semibold">${text}</span>`;

// Grammar structure builder
export function buildStructure(unitId: number, form: SentenceForm, mode: PassiveMode): string {
  const p = (a: string, n: string, q: string) => 
    (form === 'Q' || mode === 'PQ') ? q : ((form === 'N' || mode === 'PN') ? n : a);

  switch (unitId) {
    case 1: return p("S + V(s/es)", "S + do/does not + V", "Do/Does + S + V?");
    case 2: return p("S + be + V-ing", "S + be + not + V-ing", "Be + S + V-ing?");
    case 3: return p("S + have/has + V3", "S + have/has + not + V3", "Have/Has + S + V3?");
    case 4: return p("S + have/has + been + V-ing", "S + have/has + not + been + V-ing", "Have/Has + S + been + V-ing?");
    case 5: return p("S + V2/ed", "S + did not + V", "Did + S + V?");
    case 6: return p("S + was/were + V-ing", "S + was/were + not + V-ing", "Was/Were + S + V-ing?");
    case 7: return p("S + had + V3", "S + had + not + V3", "Had + S + V3?");
    case 8: return p("S + had + been + V-ing", "S + had + not + been + V-ing", "Had + S + been + V-ing?");
    case 9: return p("S + will + V", "S + will + not + V", "Will + S + V?");
    case 10: return p("S + be + going to + V", "S + be + not + going to + V", "Be + S + going to + V?");
    case 11: return p("S + will + be + V-ing", "S + will + not + be + V-ing", "Will + S + be + V-ing?");
    case 12: return p("S + will + have + V3", "S + will + not + have + V3", "Will + S + have + V3?");
    case 13: return p("S + will + have + been + V-ing", "S + will + not + have + been + V-ing", "Will + S + have + been + V-ing?");
    case 19: return p("S(obj) + be + V3", "S(obj) + be + not + V3", "Be + S(obj) + V3?");
    case 20: return p("S(obj) + was/were + V3", "S(obj) + was/were + not + V3", "Was/Were + S(obj) + V3?");
    case 21: return p("S(obj) + will + be + V3", "S(obj) + will + not + be + V3", "Will + S(obj) + be + V3?");
    case 91: return p("S(obj) + be + being + V3", "S(obj) + be + not + being + V3", "Be + S(obj) + being + V3?");
    case 92: return p("S(obj) + was/were + being + V3", "S(obj) + was/were + not + being + V3", "Was/Were + S(obj) + being + V3?");
    case 93: return p("S(obj) + have/has + been + V3", "S(obj) + have/has + not + been + V3", "Have/Has + S(obj) + been + V3?");
    default: return "Cấu trúc không được định nghĩa.";
  }
}

// Active sentence builder
export function buildActiveEN(
  unitId: number, 
  form: SentenceForm, 
  S: string, 
  V: string, 
  O: string, 
  C: string
): string {
  const subject = S;
  const objComp = V.toLowerCase() === 'be' ? (C || '') : (O ? ' ' + O : '');
  const not = 'not';

  const render = (aux1 = '', verb: string, aux2 = '') => {
    if (form === 'Q') return `${wrapAux(capFirst(aux1))} ${subject} ${aux2} ${wrapVerb(verb)}${objComp}?`;
    if (form === 'N') return `${capFirst(subject)} ${wrapAux(aux1)} ${not} ${aux2} ${wrapVerb(verb)}${objComp}.`;
    return `${capFirst(subject)} ${wrapAux(aux1)} ${aux2} ${wrapVerb(verb)}${objComp}.`;
  };

  switch (unitId) {
    case 1: 
      return V.toLowerCase() === 'be' 
        ? render(getBePresent(S), '', objComp.trim())
        : (form === 'Q' 
            ? `${wrapAux(capFirst(getHave(S) === 'has' ? 'does' : 'do'))} ${S} ${wrapVerb(V)}${objComp}?`
            : (form === 'N' 
                ? `${capFirst(S)} ${wrapAux(getHave(S) === 'has' ? 'does' : 'do')} not ${wrapVerb(V)}${objComp}.`
                : `${capFirst(S)} ${wrapVerb(makeVerbS(V, S))}${objComp}.`));
    case 2: return render(getBePresent(S), makeVerbIng(V));
    case 3: return render(getHave(S), makeVerbPP(V));
    case 4: return render(getHave(S), makeVerbIng(V), 'been');
    case 5: 
      return V.toLowerCase() === 'be' 
        ? render(getBePast(S), '', objComp.trim())
        : (form === 'Q' 
            ? `${wrapAux('Did')} ${S} ${wrapVerb(V)}${objComp}?`
            : (form === 'N' 
                ? `${capFirst(S)} ${wrapAux('did')} not ${wrapVerb(V)}${objComp}.`
                : `${capFirst(S)} ${wrapVerb(makeVerbPast(V))}${objComp}.`));
    case 6: return render(getBePast(S), makeVerbIng(V));
    case 7: return render('had', makeVerbPP(V));
    case 8: return render('had', makeVerbIng(V), 'been');
    case 9: return render('will', V);
    case 10: return render(getBePresent(S), V, 'going to');
    case 11: return render('will', makeVerbIng(V), 'be');
    case 12: return render('will', makeVerbPP(V), 'have');
    case 13: return render('will', makeVerbIng(V), 'have been');
    default: return '<span class="text-blue-600 font-bold italic">KHÔNG ÁP DỤNG</span>';
  }
}

// Passive sentence builder
export function buildPassiveEN(
  unitId: number, 
  mode: PassiveMode, 
  agent: string, 
  verb: string, 
  object: string, 
  showAgent: boolean
): string {
  const subject = object || 'The issue';
  const vpp = makeVerbPP(verb);
  const byAgent = showAgent ? ` by ${OBJ_PRONOUNS[agent.toLowerCase()] || agent}` : '';
  const not = mode === 'PN' ? ' not' : '';

  const render = (aux1: string, aux2 = '') => {
    if (mode === 'PQ') return `${wrapAux(capFirst(aux1))} ${subject} ${aux2} ${wrapVerb(vpp)}${byAgent}?`;
    return `${capFirst(subject)} ${wrapAux(aux1 + not)} ${aux2} ${wrapVerb(vpp)}${byAgent}.`;
  };

  switch (unitId) {
    case 1: case 19: return render(getBePresent(subject));
    case 2: case 91: return render(getBePresent(subject), 'being');
    case 3: case 93: return render(getHave(subject), 'been');
    case 5: case 20: return render(getBePast(subject));
    case 6: case 92: return render(getBePast(subject), 'being');
    case 7: return render('had', 'been');
    case 9: case 21: return render('will', 'be');
    case 10: return render(getBePresent(subject), 'going to be');
    case 12: return render('will', 'have been');
    default: return '<span class="text-blue-600 font-bold italic">KHÔNG ÁP DỤNG</span>';
  }
}

// Vietnamese translation builder
export function buildTranslationVI(
  unitId: number, 
  form: SentenceForm, 
  mode: PassiveMode, 
  S_en: string, 
  V_en: string, 
  O_en: string, 
  C_en: string
): string {
  const subjMap: Record<string, string> = {
    'i': 'Tôi', 'you': 'Bạn', 'we': 'Chúng tôi', 'they': 'Họ',
    'he': 'Anh ấy', 'she': 'Cô ấy', 'it': 'Nó',
    'a student': 'Một học sinh', 'students': 'Các học sinh'
  };

  const S_vi = subjMap[S_en.toLowerCase()] || S_en;
  const V_vi = VI_VERB_MAP[V_en.toLowerCase()] || V_en;
  const O_vi = O_en ? ' ' + O_en : '';
  const C_vi = C_en ? ' ' + C_en : '';

  if (form === 'P') {
    const obj = O_en || "Việc đó";
    const marker = "được";
    const agentStr = ` bởi ${S_vi.toLowerCase()}`;
    if (mode === 'PQ') return `Có phải ${obj.toLowerCase()} ${marker} ${V_vi}${agentStr} không?`;
    return `${capFirst(obj)} ${mode === 'PN' ? 'không ' : ''}${marker} ${V_vi}${agentStr}.`;
  }

  let tenseMarker = '';
  const neg = form === 'N';
  
  switch (unitId) {
    case 2: case 6: case 11: 
      tenseMarker = neg ? 'không đang ' : 'đang '; 
      break;
    case 3: case 5: case 7: case 12:
      tenseMarker = neg ? 'đã không ' : 'đã '; 
      break;
    case 9: case 10: 
      tenseMarker = neg ? 'sẽ không ' : 'sẽ '; 
      break;
    default: 
      tenseMarker = neg ? 'không ' : '';
  }

  if (form === 'Q') return `Có phải ${S_vi.toLowerCase()} ${V_vi}${O_vi} không?`;
  return `${S_vi} ${tenseMarker}${V_vi}${O_vi}${C_vi}.`;
}

// Main grammar engine function
export function generateSentence(
  unitId: number,
  form: SentenceForm,
  mode: PassiveMode,
  subject: string,
  verb: string,
  object: string,
  complement: string,
  showAgent: boolean = true
): GrammarEngineResult {
  const isPassive = form === 'P';

  // Grammar validation guards
  const isStativeWithContinuous = [2, 4, 6, 8, 11, 13, 91, 92].includes(unitId) && 
                                  STATIVE_VERBS.has(verb.toLowerCase());
  const isIntransitivePassive = isPassive && INTRANSITIVE_VERBS.has(verb.toLowerCase());

  if (isStativeWithContinuous || isIntransitivePassive) {
    return {
      english: '<span class="text-blue-600 font-bold italic">KHÔNG ÁP DỤNG</span>',
      vietnamese: 'Không áp dụng',
      structure: 'Không áp dụng với ngữ pháp này'
    };
  }

  const english = isPassive
    ? buildPassiveEN(unitId, mode, subject, verb, object, showAgent)
    : buildActiveEN(unitId, form, subject, verb, object, complement);

  const vietnamese = buildTranslationVI(unitId, form, mode, subject, verb, object, complement);
  const structure = buildStructure(unitId, form, mode);

  return { english, vietnamese, structure };
}