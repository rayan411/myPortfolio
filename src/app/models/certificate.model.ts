export interface Certificate {
  id:string;
  title: string;        // اسم الشهادة
  issuer: string;       // الجهة المانحة
  date: string;         // تاريخ الإصدار
  image: string;        // صورة الشهادة
  link?: string;        // رابط عرض الشهادة (اختياري)
  tags:string[];
}
