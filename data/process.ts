export type ProcessStep = {
  number: number;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
};

export type ProcessPath = {
  key: "standard" | "custom";
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  image: string;
  summary: string;
  summaryEn: string;
  highlights: string[];
  highlightsEn: string[];
};

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "แจ้งรายละเอียดสินค้า",
    titleEn: "Share product brief",
    description: "บอกประเภทสินค้า กลุ่มลูกค้า งบประมาณ และรูปแบบแบรนด์ที่ต้องการ",
    descriptionEn: "Tell us the product type, target customer, budget and preferred brand direction."
  },
  {
    number: 2,
    title: "เลือกสูตร / พัฒนาสูตร",
    titleEn: "Choose or develop formula",
    description: "เลือกสูตรมาตรฐานเพื่อเริ่มเร็ว หรือพัฒนาสูตรใหม่เมื่ออยากได้เอกลักษณ์ของแบรนด์",
    descriptionEn: "Choose a standard formula for speed or develop a custom formula for brand differentiation."
  },
  {
    number: 3,
    title: "สรุปแพ็กเกจและ MOQ",
    titleEn: "Confirm packaging and MOQ",
    description: "เลือกบรรจุภัณฑ์ จำนวนผลิตขั้นต่ำ และสรุปราคาเบื้องต้นก่อนลงคิว",
    descriptionEn: "Select packaging, minimum quantity and an initial production direction before scheduling."
  },
  {
    number: 4,
    title: "ออกใบเสนอราคา / ลงคิวผลิต",
    titleEn: "Quotation and production queue",
    description: "ยืนยันใบเสนอราคาและชำระมัดจำเพื่อเริ่มดำเนินการจริง",
    descriptionEn: "Confirm the quotation and deposit so the project can enter the production workflow."
  },
  {
    number: 5,
    title: "จดแจ้งเครื่องสำอาง",
    titleEn: "Thai FDA notification",
    description: "ดูแลเอกสารจดแจ้ง อย. และข้อมูลสำหรับฉลากตามประเภทสินค้า",
    descriptionEn: "Prepare Thai FDA notification documents and label information based on product type."
  },
  {
    number: 6,
    title: "ออกแบบฉลากและบรรจุภัณฑ์",
    titleEn: "Label and packaging design",
    description: "เตรียมฉลาก กล่อง สติกเกอร์ และตรวจข้อมูลสำคัญก่อนผลิตจริง",
    descriptionEn: "Prepare labels, boxes, stickers and key information before production."
  },
  {
    number: 7,
    title: "ผลิตจริงและส่งมอบ",
    titleEn: "Production and delivery",
    description: "ผลิต QC บันทึกเอกสาร BMR และส่งมอบสินค้าพร้อมจำหน่าย",
    descriptionEn: "Produce, QC, record BMR documents and deliver market-ready goods."
  }
];

export const processPaths: ProcessPath[] = [
  {
    key: "standard",
    title: "สูตรมาตรฐานโรงงาน",
    titleEn: "Factory standard formula",
    subtitle: "เหมาะกับแบรนด์ที่ต้องการเริ่มเร็วและควบคุมงบได้ง่าย",
    subtitleEn: "Best for brands that want to launch faster with clearer budget control.",
    image: "/images/process/standard-formula-process.jpg",
    summary: "เริ่มจากเลือกสูตรที่โรงงานมีอยู่แล้ว ปรับรายละเอียดเล็กน้อย เลือกแพ็กเกจ และเข้าสู่การจดแจ้งกับผลิตจริงได้เร็วกว่า",
    summaryEn: "Start from an existing factory formula, adjust small details, choose packaging and move faster into FDA notification and production.",
    highlights: [
      "เหมาะกับแบรนด์ที่ต้องการเริ่มเร็วและเห็นภาพงานไว",
      "ช่วยย่นเวลาในการเลือกสูตรและเข้าสู่การผลิตจริง",
      "ทีมงานช่วยสรุปแพ็กเกจ เอกสาร และ flow ที่เหมาะกับแบรนด์",
      "รายละเอียดจำนวนขั้นต่ำและช่วงราคา แจ้งได้หลังคุย brief"
    ],
    highlightsEn: [
      "Suitable for brands that want to start quickly",
      "Shortens formula selection and production preparation",
      "Team supports packaging, documents and brand workflow",
      "MOQ and price range are summarized after the brief"
    ]
  },
  {
    key: "custom",
    title: "พัฒนาสูตรใหม่ / ใช้สูตรลูกค้า",
    titleEn: "Custom formula / customer formula",
    subtitle: "เหมาะกับแบรนด์ที่ต้องการจุดขายเฉพาะหรือมี reference ของตัวเอง",
    subtitleEn: "Best for brands that need a unique selling point or have their own reference.",
    image: "/images/process/custom-formula-process.jpg",
    summary: "เริ่มจากคุยรายละเอียดสูตรหรือส่งตัวอย่างให้โรงงานแกะสูตร จากนั้นพัฒนาตัวอย่าง ยืนยันสูตร และใช้ flow เดียวกับสูตรมาตรฐานในช่วงผลิตจริง",
    summaryEn: "Start by discussing formula details or sending a reference sample, then develop samples, confirm the formula and enter the normal production flow.",
    highlights: [
      "เหมาะกับแบรนด์ที่ต้องการสูตรเฉพาะหรือมี reference ของตัวเอง",
      "ส่งตัวอย่างจริงเพื่อคุยทิศทางและความใกล้เคียงของสูตรได้",
      "หลังยืนยันสูตรแล้วจะเข้าสู่จดแจ้ง ออกแบบ และผลิตจริง",
      "รายละเอียดงบพัฒนาและจำนวนผลิต สรุปตามโจทย์สินค้าแต่ละแบรนด์"
    ],
    highlightsEn: [
      "Suitable for brands that need a unique formula or reference",
      "Send real samples to discuss direction and similarity",
      "After formula confirmation, the project moves to FDA, design and production",
      "Development budget and quantity are summarized by product brief"
    ]
  }
];
