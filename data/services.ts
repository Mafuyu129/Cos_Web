import {
  Boxes,
  ClipboardCheck,
  Droplets,
  Flower2,
  PackageCheck,
  Sparkles,
  type LucideIcon
} from "lucide-react";

export type Service = {
  title: string;
  titleTh: string;
  slug: string;
  category: "facial" | "body" | "hair" | "fragrance" | "document" | "packaging";
  shortDescription: string;
  shortDescriptionTh: string;
  description: string;
  items: string[];
  formulaOptions: string[];
  timeline: string;
  moq: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Facial Care",
    titleTh: "ผลิตภัณฑ์ดูแลผิวหน้า",
    slug: "facial-care",
    category: "facial",
    shortDescription: "Cream, serum, gel, sunscreen and treatment textures for skincare brands.",
    shortDescriptionTh: "ครีม เซรั่ม เจล กันแดด และสกินแคร์สำหรับแบรนด์ดูแลผิวหน้า",
    description: "บริการพัฒนาสูตรและผลิตสินค้าดูแลผิวหน้า ตั้งแต่สูตรมาตรฐานไปจนถึงสูตรใหม่สำหรับเจ้าของแบรนด์ที่ต้องการความแตกต่าง",
    items: ["Serum", "Cream", "Gel", "Toner", "Mask", "Sunscreen"],
    formulaOptions: ["Brightening", "Hydration", "Anti-aging", "Acne care", "Sensitive skin"],
    timeline: "30-45 days after artwork and formula confirmation",
    moq: "เริ่มต้นประมาณ 100-300 ชิ้น ตามประเภทบรรจุภัณฑ์",
    icon: Droplets
  },
  {
    title: "Body Care",
    titleTh: "ผลิตภัณฑ์ดูแลผิวกาย",
    slug: "body-care",
    category: "body",
    shortDescription: "Body lotion, scrub, wash and spa products with premium sensory profiles.",
    shortDescriptionTh: "โลชั่น สครับ ครีมอาบน้ำ และผลิตภัณฑ์สปาที่เน้นสัมผัสพรีเมียม",
    description: "ผลิตภัณฑ์ดูแลผิวกายสำหรับตลาด mass premium, spa, hotel amenity และแบรนด์ SME",
    items: ["Body lotion", "Body wash", "Scrub", "Body oil", "Hand cream"],
    formulaOptions: ["Moisturizing", "Whitening", "Exfoliating", "Spa aroma", "Natural inspired"],
    timeline: "30-45 days after deposit and packaging approval",
    moq: "เริ่มต้นประมาณ 100 ชิ้นสำหรับบางรายการ",
    icon: Sparkles
  },
  {
    title: "Hair Care",
    titleTh: "ผลิตภัณฑ์ดูแลเส้นผม",
    slug: "hair-care",
    category: "hair",
    shortDescription: "Shampoo, conditioner and hair treatment for daily care and salon lines.",
    shortDescriptionTh: "แชมพู ครีมนวด และทรีตเมนต์สำหรับแบรนด์ดูแลเส้นผม",
    description: "บริการผลิตแชมพู ครีมนวด และทรีตเมนต์สำหรับแบรนด์ดูแลเส้นผม",
    items: ["Shampoo", "Conditioner", "Hair treatment", "Hair serum", "Scalp care"],
    formulaOptions: ["Anti hair fall", "Smooth and shine", "Color care", "Scalp balance"],
    timeline: "30-50 days depending on formula and packaging",
    moq: "ประมาณ 200-500 ชิ้น ตามแพ็กเกจ",
    icon: Flower2
  },
  {
    title: "Fragrance / Aroma",
    titleTh: "น้ำหอมและอโรมา",
    slug: "fragrance-aroma",
    category: "fragrance",
    shortDescription: "Diffuser, room spray and aroma lines with brandable scent direction.",
    shortDescriptionTh: "ก้านไม้หอม สเปรย์ห้อง และสินค้าอโรมา พร้อมทิศทางกลิ่นของแบรนด์",
    description: "พัฒนากลิ่นและผลิตสินค้ากลุ่ม home fragrance, diffuser และสปาอโรมา",
    items: ["Reed diffuser", "Room spray", "Aroma oil", "Linen spray", "Spa scent"],
    formulaOptions: ["Floral", "Fresh", "Woody", "Luxury hotel", "Thai spa"],
    timeline: "25-45 days after scent approval",
    moq: "เริ่มต้นประมาณ 100-300 ชิ้น",
    icon: Flower2
  },
  {
    title: "Packaging & Labeling",
    titleTh: "บรรจุภัณฑ์และฉลาก",
    slug: "packaging-labeling",
    category: "packaging",
    shortDescription: "Bottle selection, label design support and packaging coordination.",
    shortDescriptionTh: "ช่วยเลือกบรรจุภัณฑ์ ออกแบบฉลาก และประสานงานแพ็กเกจสำหรับผลิตจริง",
    description: "ช่วยเลือกบรรจุภัณฑ์ ออกแบบฉลาก และเตรียมไฟล์ที่เหมาะสมกับการผลิตจริง",
    items: ["Bottle sourcing", "Label design", "Box design", "Sticker", "Mockup"],
    formulaOptions: ["Minimal", "Clinical", "Spa", "Premium retail", "Hotel amenity"],
    timeline: "7-30 days depending on artwork scope",
    moq: "ขึ้นกับชนิดบรรจุภัณฑ์และโรงพิมพ์",
    icon: PackageCheck
  },
  {
    title: "FDA / Document Service",
    titleTh: "บริการเอกสาร อย.",
    slug: "fda-document-service",
    category: "document",
    shortDescription: "Thai FDA notification, production records, QC and BMR document workflow.",
    shortDescriptionTh: "จดแจ้ง อย. เอกสารการผลิต QC และ BMR สำหรับความพร้อมในการจำหน่าย",
    description: "ดูแลเอกสารจดแจ้งเครื่องสำอาง เอกสารการผลิต QC และ BMR เพื่อความพร้อมในการจำหน่าย",
    items: ["Thai FDA notification", "Ingredient documents", "QC record", "BMR", "Label review"],
    formulaOptions: ["Standard formula filing", "New formula filing", "Label compliance review"],
    timeline: "7-14 business days for common FDA notification cases",
    moq: "คิดตามรายการเอกสารและสูตร",
    icon: ClipboardCheck
  }
];

export const serviceHighlights = [
  { label: "OEM / ODM", value: "ครบวงจร", icon: Boxes },
  { label: "R&D", value: "พัฒนาสูตร", icon: Sparkles },
  { label: "FDA", value: "เอกสารพร้อม", icon: ClipboardCheck }
];
