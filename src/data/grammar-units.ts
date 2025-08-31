import { GrammarUnit } from '@/types/grammar';

export const GRAMMAR_UNITS: GrammarUnit[] = [
  {id: 1, name_en: "Present Simple", name_vi: "Hiện tại Đơn", groupId: 1, core_knowledge: `
[H1]Present Simple - Hiện tại Đơn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + V(s/es) + O
Phủ định: S + do/does + not + V + O
Nghi vấn: Do/Does + S + V + O?

[H2]Cách dùng
• Diễn tả thói quen, hành động lặp đi lặp lại
• Chân lý, sự thật hiển nhiên
• Lịch trình, thời gian biểu

[H2]Dấu hiệu nhận biết
always, usually, often, sometimes, never, every day/week/month, on Mondays...

[H2]Lưu ý
• Động từ thêm -s/-es với chủ ngữ số ít (he, she, it)
• Dùng do với I, you, we, they
• Dùng does với he, she, it
`},
  {id: 2, name_en: "Present Continuous", name_vi: "Hiện tại Tiếp diễn", groupId: 1, core_knowledge: `
[H1]Present Continuous - Hiện tại Tiếp diễn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + am/is/are + V-ing + O
Phủ định: S + am/is/are + not + V-ing + O
Nghi vấn: Am/Is/Are + S + V-ing + O?

[H2]Cách dùng
• Hành động đang xảy ra tại thời điểm nói
• Hành động tạm thời
• Kế hoạch trong tương lai gần

[H2]Dấu hiệu nhận biết
now, right now, at the moment, currently, today, this week...

[H2]Lưu ý
• Không dùng với stative verbs (know, like, love, believe...)
• Quy tắc thêm -ing: stop → stopping, write → writing
`},
  {id: 3, name_en: "Present Perfect", name_vi: "Hiện tại Hoàn thành", groupId: 1, core_knowledge: `
[H1]Present Perfect - Hiện tại Hoàn thành

[H2]Cấu trúc
[FORMULA]Khẳng định: S + have/has + V3/ed + O
Phủ định: S + have/has + not + V3/ed + O
Nghi vấn: Have/Has + S + V3/ed + O?

[H2]Cách dùng
• Hành động xảy ra trong quá khứ, kết quả còn ảnh hưởng đến hiện tại
• Kinh nghiệm sống
• Hành động bắt đầu trong quá khứ, kéo dài đến hiện tại

[H2]Dấu hiệu nhận biết
already, yet, just, ever, never, since, for, recently, lately...

[H2]Lưu ý
• Has với he, she, it
• Have với I, you, we, they
• Động từ bất quy tắc: go → gone, see → seen
`},
  {id: 4, name_en: "Present Perfect Continuous", name_vi: "Hiện tại Hoàn thành Tiếp diễn", groupId: 1, core_knowledge: `
[H1]Present Perfect Continuous - Hiện tại Hoàn thành Tiếp diễn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + have/has + been + V-ing + O
Phủ định: S + have/has + not + been + V-ing + O
Nghi vấn: Have/Has + S + been + V-ing + O?

[H2]Cách dùng
• Hành động bắt đầu trong quá khứ, tiếp tục đến hiện tại và có thể tiếp tục
• Nhấn mạnh tính liên tục của hành động

[H2]Dấu hiệu nhận biết
for, since, all day, all morning, how long...

[H2]Lưu ý
• Không dùng với stative verbs
• Thường dùng với khoảng thời gian cụ thể
`},
  {id: 5, name_en: "Past Simple", name_vi: "Quá khứ Đơn", groupId: 2, core_knowledge: `
[H1]Past Simple - Quá khứ Đơn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + V2/ed + O
Phủ định: S + did + not + V + O
Nghi vấn: Did + S + V + O?

[H2]Cách dùng
• Hành động đã xảy ra và kết thúc trong quá khứ
• Thói quen trong quá khứ
• Chuỗi hành động trong quá khứ

[H2]Dấu hiệu nhận biết
yesterday, last week/month/year, ago, in 1990, when...

[H2]Lưu ý
• Động từ có quy tắc: work → worked
• Động từ bất quy tắc: go → went, see → saw
• Dùng did cho tất cả chủ ngữ trong câu phủ định và nghi vấn
`},
  {id: 6, name_en: "Past Continuous", name_vi: "Quá khứ Tiếp diễn", groupId: 2, core_knowledge: `
[H1]Past Continuous - Quá khứ Tiếp diễn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + was/were + V-ing + O
Phủ định: S + was/were + not + V-ing + O
Nghi vấn: Was/Were + S + V-ing + O?

[H2]Cách dùng
• Hành động đang xảy ra tại một thời điểm trong quá khứ
• Hành động đang xảy ra thì có hành động khác xen vào
• Hai hành động xảy ra song song trong quá khứ

[H2]Dấu hiệu nhận biết
at 8 o'clock yesterday, while, when, as...

[H2]Lưu ý
• Was với I, he, she, it
• Were với you, we, they
• Thường kết hợp với Past Simple
`},
  {id: 7, name_en: "Past Perfect", name_vi: "Quá khứ Hoàn thành", groupId: 2, core_knowledge: `
[H1]Past Perfect - Quá khứ Hoàn thành

[H2]Cấu trúc
[FORMULA]Khẳng định: S + had + V3/ed + O
Phủ định: S + had + not + V3/ed + O
Nghi vấn: Had + S + V3/ed + O?

[H2]Cách dùng
• Hành động xảy ra trước một hành động khác trong quá khứ
• Hành động xảy ra trước một thời điểm trong quá khứ

[H2]Dấu hiệu nhận biết
before, after, by the time, when, already, just...

[H2]Lưu ý
• Dùng had cho tất cả chủ ngữ
• Thường kết hợp với Past Simple
• Diễn tả thứ tự thời gian trong quá khứ
`},
  {id: 8, name_en: "Past Perfect Continuous", name_vi: "Quá khứ Hoàn thành Tiếp diễn", groupId: 2, core_knowledge: `
[H1]Past Perfect Continuous - Quá khứ Hoàn thành Tiếp diễn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + had + been + V-ing + O
Phủ định: S + had + not + been + V-ing + O
Nghi vấn: Had + S + been + V-ing + O?

[H2]Cách dùng
• Hành động đã diễn ra liên tục trước một thời điểm/hành động trong quá khứ
• Nhấn mạnh tính liên tục và kéo dài

[H2]Dấu hiệu nhận biết
for, since, before, by the time...

[H2]Lưu ý
• Không dùng với stative verbs
• Thường có khoảng thời gian cụ thể
`},
  {id: 9, name_en: "Future Simple (will)", name_vi: "Tương lai Đơn (will)", groupId: 3, core_knowledge: `
[H1]Future Simple - Tương lai Đơn (will)

[H2]Cấu trúc
[FORMULA]Khẳng định: S + will + V + O
Phủ định: S + will + not + V + O
Nghi vấn: Will + S + V + O?

[H2]Cách dùng
• Quyết định tức thời
• Dự đoán không có căn cứ
• Lời hứa, đề nghị giúp đỡ

[H2]Dấu hiệu nhận biết
tomorrow, next week/month/year, in the future, I think, probably...

[H2]Lưu ý
• Will không thay đổi với tất cả chủ ngữ
• Có thể viết tắt: I'll, you'll, he'll...
• Won't = will not
`},
  {id: 10, name_en: "Be going to", name_vi: "Tương lai gần (be going to)", groupId: 3, core_knowledge: `
[H1]Be Going To - Tương lai gần

[H2]Cấu trúc
[FORMULA]Khẳng định: S + am/is/are + going to + V + O
Phủ định: S + am/is/are + not + going to + V + O
Nghi vấn: Am/Is/Are + S + going to + V + O?

[H2]Cách dùng
• Kế hoạch, dự định đã được lên kế hoạch trước
• Dự đoán có căn cứ, bằng chứng

[H2]Dấu hiệu nhận biết
tonight, this weekend, next week (đã có kế hoạch)...

[H2]Lưu ý
• Am với I
• Is với he, she, it
• Are với you, we, they
• Thường dùng cho tương lai gần
`},
  {id: 11, name_en: "Future Continuous", name_vi: "Tương lai Tiếp diễn", groupId: 3, core_knowledge: `
[H1]Future Continuous - Tương lai Tiếp diễn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + will + be + V-ing + O
Phủ định: S + will + not + be + V-ing + O
Nghi vấn: Will + S + be + V-ing + O?

[H2]Cách dùng
• Hành động sẽ đang xảy ra tại một thời điểm trong tương lai
• Hành động sẽ diễn ra trong một khoảng thời gian trong tương lai

[H2]Dấu hiệu nhận biết
at this time tomorrow, at 8 o'clock tomorrow, all day tomorrow...

[H2]Lưu ý
• Không dùng với stative verbs
• Thường có thời gian cụ thể trong tương lai
`},
  {id: 12, name_en: "Future Perfect", name_vi: "Tương lai Hoàn thành", groupId: 3, core_knowledge: `
[H1]Future Perfect - Tương lai Hoàn thành

[H2]Cấu trúc
[FORMULA]Khẳng định: S + will + have + V3/ed + O
Phủ định: S + will + not + have + V3/ed + O
Nghi vấn: Will + S + have + V3/ed + O?

[H2]Cách dùng
• Hành động sẽ hoàn thành trước một thời điểm trong tương lai
• Hành động sẽ hoàn thành trước một hành động khác trong tương lai

[H2]Dấu hiệu nhận biết
by next week, by the time, before...

[H2]Lưu ý
• Diễn tả thứ tự thời gian trong tương lai
• Thường kết hợp với mốc thời gian cụ thể
`},
  {id: 13, name_en: "Future Perfect Continuous", name_vi: "Tương lai Hoàn thành Tiếp diễn", groupId: 3, core_knowledge: `
[H1]Future Perfect Continuous - Tương lai Hoàn thành Tiếp diễn

[H2]Cấu trúc
[FORMULA]Khẳng định: S + will + have + been + V-ing + O
Phủ định: S + will + not + have + been + V-ing + O
Nghi vấn: Will + S + have + been + V-ing + O?

[H2]Cách dùng
• Hành động sẽ đã diễn ra liên tục đến một thời điểm trong tương lai
• Nhấn mạnh tính liên tục và thời gian kéo dài

[H2]Dấu hiệu nhận biết
by next month, for + khoảng thời gian...

[H2]Lưu ý
• Không dùng với stative verbs
• Ít được sử dụng trong giao tiếp hàng ngày
`},
  {id: 14, name_en: "Can / Could / Be able to", name_vi: "Chỉ khả năng", groupId: 4},
  {id: 15, name_en: "May / Might", name_vi: "Chỉ khả năng (xác suất)", groupId: 4},
  {id: 16, name_en: "Must / Have to", name_vi: "Chỉ sự bắt buộc", groupId: 4},
  {id: 17, name_en: "Should / Ought to", name_vi: "Khuyên bảo", groupId: 4},
  {id: 18, name_en: "Will / Would", name_vi: "Yêu cầu, đề nghị", groupId: 4},
  {id: 19, name_en: "Passive - Present Simple", name_vi: "Bị động - Hiện tại Đơn", groupId: 5},
  {id: 20, name_en: "Passive - Past Simple", name_vi: "Bị động - Quá khứ Đơn", groupId: 5},
  {id: 21, name_en: "Passive - Future Simple", name_vi: "Bị động - Tương lai Đơn", groupId: 5},
  {id: 22, name_en: "Passive with Modals", name_vi: "Bị động với Modal Verbs", groupId: 5},
  {id: 23, name_en: "Zero Conditional", name_vi: "Câu điều kiện loại 0", groupId: 6},
  {id: 24, name_en: "First Conditional", name_vi: "Câu điều kiện loại 1", groupId: 6},
  {id: 25, name_en: "Second Conditional", name_vi: "Câu điều kiện loại 2", groupId: 6},
  {id: 26, name_en: "Third Conditional", name_vi: "Câu điều kiện loại 3", groupId: 6},
  {id: 27, name_en: "Reported Statements", name_vi: "Tường thuật câu kể", groupId: 7},
  {id: 28, name_en: "Reported Questions", name_vi: "Tường thuật câu hỏi", groupId: 7},
  {id: 29, name_en: "Reported Commands", name_vi: "Tường thuật câu mệnh lệnh", groupId: 7},
  {id: 30, name_en: "Verbs + Gerund", name_vi: "Động từ theo sau bởi V-ing", groupId: 8},
  {id: 31, name_en: "Verbs + To-Infinitive", name_vi: "Động từ theo sau bởi To-V", groupId: 8},
  {id: 32, name_en: "Gerund as Subject", name_vi: "Danh động từ làm chủ ngữ", groupId: 8},
  {id: 33, name_en: "A / An", name_vi: "Mạo từ không xác định", groupId: 9},
  {id: 34, name_en: "The", name_vi: "Mạo từ xác định", groupId: 9},
  {id: 35, name_en: "Zero Article", name_vi: "Không dùng mạo từ", groupId: 9},
  {id: 36, name_en: "Countable Nouns", name_vi: "Danh từ đếm được", groupId: 10},
  {id: 37, name_en: "Uncountable Nouns", name_vi: "Danh từ không đếm được", groupId: 10},
  {id: 38, name_en: "Irregular Plurals", name_vi: "Danh từ số nhiều bất quy tắc", groupId: 10},
  {id: 39, name_en: "Personal Pronouns", name_vi: "Đại từ nhân xưng", groupId: 11},
  {id: 40, name_en: "Possessive Pronouns", name_vi: "Đại từ sở hữu", groupId: 11},
  {id: 41, name_en: "Reflexive Pronouns", name_vi: "Đại từ phản thân", groupId: 11},
  {id: 42, name_en: "Adjective Order", name_vi: "Trật tự của tính từ", groupId: 12},
  {id: 43, name_en: "-ed vs -ing Adjectives", name_vi: "Tính từ đuôi -ed và -ing", groupId: 12},
  {id: 44, name_en: "Adverbs of Manner", name_vi: "Trạng từ chỉ thể cách", groupId: 13},
  {id: 45, name_en: "Adverbs of Frequency", name_vi: "Trạng từ chỉ tần suất", groupId: 13},
  {id: 46, name_en: "Adverbs of Time and Place", name_vi: "Trạng từ chỉ thời gian và nơi chốn", groupId: 13},
  {id: 47, name_en: "Comparative Adjectives", name_vi: "So sánh hơn với tính từ", groupId: 14},
  {id: 48, name_en: "Superlative Adjectives", name_vi: "So sánh nhất với tính từ", groupId: 14},
  {id: 49, name_en: "As...as", name_vi: "So sánh bằng", groupId: 14},
  {id: 50, name_en: "Prepositions of Time (in, on, at)", name_vi: "Giới từ chỉ thời gian", groupId: 15},
  {id: 51, name_en: "Prepositions of Place (in, on, at)", name_vi: "Giới từ chỉ nơi chốn", groupId: 15},
  {id: 52, name_en: "Prepositions of Movement", name_vi: "Giới từ chỉ sự chuyển động", groupId: 15},
  {id: 53, name_en: "Coordinating (FANBOYS)", name_vi: "Liên từ kết hợp", groupId: 16},
  {id: 54, name_en: "Subordinating", name_vi: "Liên từ phụ thuộc", groupId: 16},
  {id: 55, name_en: "Correlative (both...and)", name_vi: "Liên từ tương quan", groupId: 16},
  {id: 56, name_en: "Yes/No Questions", name_vi: "Câu hỏi Có/Không", groupId: 17},
  {id: 57, name_en: "Wh- Questions", name_vi: "Câu hỏi Wh-", groupId: 17},
  {id: 58, name_en: "Tag Questions", name_vi: "Câu hỏi đuôi", groupId: 17},
  {id: 59, name_en: "Defining Clauses", name_vi: "MĐQH xác định", groupId: 18},
  {id: 60, name_en: "Non-defining Clauses", name_vi: "MĐQH không xác định", groupId: 18},
  {id: 61, name_en: "Relative Pronouns", name_vi: "Đại từ quan hệ", groupId: 18},
  {id: 62, name_en: "Simple Sentence", name_vi: "Câu Đơn", groupId: 19},
  {id: 63, name_en: "Compound Sentence", name_vi: "Câu Ghép", groupId: 19},
  {id: 64, name_en: "Complex Sentence", name_vi: "Câu Phức", groupId: 19},
  {id: 65, name_en: "Basic Agreement", name_vi: "Hòa hợp cơ bản", groupId: 20},
  {id: 66, name_en: "Expressions of Quantity", name_vi: "Với cụm từ chỉ số lượng", groupId: 20},
  {id: 67, name_en: "There is / There are", name_vi: "Với 'There'", groupId: 20},
  {id: 68, name_en: "With Negative Adverbials", name_vi: "Đảo ngữ với trạng từ phủ định", groupId: 21},
  {id: 69, name_en: "In Conditionals", name_vi: "Đảo ngữ trong câu điều kiện", groupId: 21},
  {id: 70, name_en: "Some / Any", name_vi: "Some và Any", groupId: 25},
  {id: 71, name_en: "Much / Many / A lot of", name_vi: "Much, Many, A lot of", groupId: 25},
  {id: 72, name_en: "Few / A few / Little / A little", name_vi: "Few và Little", groupId: 25},
  {id: 73, name_en: "Common Phrasal Verbs 1", name_vi: "Cụm động từ thông dụng 1", groupId: 29},
  {id: 74, name_en: "Common Phrasal Verbs 2", name_vi: "Cụm động từ thông dụng 2", groupId: 29},
  {id: 75, name_en: "Used to", name_vi: "Thói quen trong quá khứ", groupId: 40},
  {id: 76, name_en: "Be used to", name_vi: "Quen với việc gì", groupId: 40},
  {id: 77, name_en: "Get used to", name_vi: "Dần quen với việc gì", groupId: 40},
  {id: 78, name_en: "Wish + Past Simple", name_vi: "Ước cho hiện tại", groupId: 41},
  {id: 79, name_en: "Wish + Past Perfect", name_vi: "Ước cho quá khứ", groupId: 41},
  {id: 80, name_en: "Wish + Would", name_vi: "Ước tương lai/Phàn nàn", groupId: 41},
  {id: 81, name_en: "Reduced Relative Clauses (V-ing)", name_vi: "Rút gọn MĐQH (V-ing)", groupId: 44},
  {id: 82, name_en: "Reduced Relative Clauses (V3/ed)", name_vi: "Rút gọn MĐQH (V3/ed)", groupId: 44},
  {id: 83, name_en: "Because / Because of", name_vi: "Vì / Bởi vì", groupId: 45},
  {id: 84, name_en: "So / Therefore", name_vi: "Vì vậy / Do đó", groupId: 45},
  {id: 85, name_en: "Although / Though / Even though", name_vi: "Mặc dù", groupId: 46},
  {id: 86, name_en: "In spite of / Despite", name_vi: "Mặc cho", groupId: 46},
  {id: 87, name_en: "Affect vs. Effect", name_vi: "Affect vs Effect", groupId: 49},
  {id: 88, name_en: "It's vs. Its", name_vi: "It's vs Its", groupId: 49},
  {id: 89, name_en: "Vocabulary Differences", name_vi: "Khác biệt từ vựng", groupId: 50},
  {id: 90, name_en: "Spelling Differences", name_vi: "Khác biệt chính tả", groupId: 50},
  {id: 91, name_en: "Passive - Present Continuous", name_vi: "BĐ - HT Tiếp diễn", groupId: 5},
  {id: 92, name_en: "Passive - Past Continuous", name_vi: "BĐ - QK Tiếp diễn", groupId: 5},
  {id: 93, name_en: "Passive - Present Perfect", name_vi: "BĐ - HT Hoàn thành", groupId: 5},
  {id: 94, name_en: "Mixed Conditionals", name_vi: "Điều kiện hỗn hợp", groupId: 6},
  {id: 95, name_en: "Causative Verbs", name_vi: "Thể truyền khiến", groupId: 19},
  {id: 96, name_en: "Emphasis (so/such)", name_vi: "Nhấn mạnh (so/such)", groupId: 24},
  {id: 97, name_en: "Articles with Geographical Names", name_vi: "Mạo từ với Tên địa lý", groupId: 9},
  {id: 98, name_en: "Either/Or & Neither/Nor", name_vi: "Liên từ tương quan (2)", groupId: 16},
  {id: 99, name_en: "Common Phrasal Verbs 3", name_vi: "Cụm động từ thông dụng 3", groupId: 29},
  {id: 100, name_en: "Clauses of Purpose", name_vi: "Mệnh đề chỉ mục đích", groupId: 47}
];