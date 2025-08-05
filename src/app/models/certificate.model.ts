export interface Certificate {
  title: string;
  issuer: string; // جهة الإصدار
  date: string;   // تاريخ الإصدار
  image: string;  // صورة الشهادة
  url?: string;   // رابط التحقق أو عرض الشهادة (اختياري)
  description?: string; // وصف مختصر أو نوع الإنجاز (اختياري)
}
