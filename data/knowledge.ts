export type ArticleSection = {
  heading: string;
  headingEn: string;
  body: string;
  bodyEn: string;
};

export type Article = {
  title: string;
  titleEn: string;
  slug: string;
  excerpt: string;
  excerptEn: string;
  category: string;
  date: string;
  readingTime: string;
  sections: ArticleSection[];
  checklist: string[];
  checklistEn: string[];
};

export const articles: Article[] = [
  {
    title: "เริ่มสร้างแบรนด์เครื่องสำอางต้องเตรียมอะไร",
    titleEn: "What to prepare before starting a cosmetic brand",
    slug: "start-cosmetic-brand-checklist",
    excerpt: "สรุปสิ่งที่เจ้าของแบรนด์ควรเตรียมก่อนคุยกับโรงงาน เพื่อให้ประเมินสูตร แพ็กเกจ และราคาได้เร็วขึ้น",
    excerptEn: "A short checklist for brand owners before talking to a factory, so formula, packaging and estimates can move faster.",
    category: "Brand Starter",
    date: "2026-07-02",
    readingTime: "4 min read",
    sections: [
      {
        heading: "เริ่มจากสินค้าและกลุ่มลูกค้า",
        headingEn: "Start with the product and audience",
        body: "ก่อนเลือกสูตร ควรกำหนดว่าสินค้าต้องการแก้ปัญหาอะไร ขายให้ใคร และต้องการวางตำแหน่งราคาแบบใด ข้อมูลนี้ช่วยให้โรงงานแนะนำสูตรและแพ็กเกจได้ตรงขึ้น"
        ,
        bodyEn: "Before choosing a formula, define the product goal, target customer and price position. This helps the factory recommend a more accurate formula and packaging route."
      },
      {
        heading: "เตรียม mood ของแบรนด์",
        headingEn: "Prepare your brand mood",
        body: "ตัวอย่างแบรนด์ โทนสี กลิ่น สัมผัส และแพ็กเกจที่ชอบ ช่วยให้ทีม R&D และดีไซน์ทำงานเร็วขึ้น"
        ,
        bodyEn: "Brand references, color direction, scent, texture and packaging examples help R&D and design move faster."
      },
      {
        heading: "กำหนดงบและจำนวนผลิต",
        headingEn: "Set budget and quantity",
        body: "MOQ มีผลต่อราคาต่อชิ้นและชนิดบรรจุภัณฑ์ การแจ้งงบประมาณคร่าว ๆ ทำให้ประเมินทางเลือกได้จริง"
        ,
        bodyEn: "MOQ affects unit cost and packaging choices. Sharing an approximate budget makes the options more practical."
      }
    ],
    checklist: ["ประเภทสินค้า", "กลุ่มลูกค้า", "งบประมาณ", "จำนวนผลิต", "ตัวอย่าง mood หรือ reference"],
    checklistEn: ["Product type", "Target customer", "Budget", "Target quantity", "Mood or reference examples"]
  },
  {
    title: "สูตรมาตรฐาน vs สูตรพัฒนาใหม่ ต่างกันยังไง",
    titleEn: "Standard formula vs custom formula: what is different?",
    slug: "standard-vs-new-formula",
    excerpt: "เลือกสูตรมาตรฐานเพื่อเริ่มเร็ว หรือพัฒนาสูตรใหม่เพื่อความต่างของแบรนด์",
    excerptEn: "Choose a standard formula to launch faster, or develop a custom formula for a more distinctive brand position.",
    category: "R&D",
    date: "2026-07-02",
    readingTime: "3 min read",
    sections: [
      {
        heading: "สูตรมาตรฐาน",
        headingEn: "Standard formula",
        body: "เหมาะกับแบรนด์ที่ต้องการเริ่มเร็ว ใช้งบควบคุมง่าย และมีสูตรตั้งต้นที่โรงงานเคยทดสอบมาแล้ว"
        ,
        bodyEn: "A good route for brands that want to start faster, control the budget and work from a factory-tested formula base."
      },
      {
        heading: "สูตรพัฒนาใหม่",
        headingEn: "Custom formula",
        body: "เหมาะกับแบรนด์ที่ต้องการจุดขายเฉพาะ สัมผัสเฉพาะ หรือสารสำคัญที่แตกต่าง ต้องเผื่อเวลาทดลองและปรับสูตร"
        ,
        bodyEn: "A good route for brands that need a unique selling point, specific texture or differentiated hero ingredients. It requires time for samples and formula adjustment."
      }
    ],
    checklist: ["เป้าหมายสินค้า", "ความแตกต่างที่ต้องการ", "เวลาที่มี", "งบพัฒนาสูตร", "แผนทดสอบตัวอย่าง"],
    checklistEn: ["Product goal", "Desired differentiation", "Timeline", "Formula development budget", "Sample testing plan"]
  },
  {
    title: "MOQ คืออะไร",
    titleEn: "What is MOQ?",
    slug: "what-is-moq",
    excerpt: "MOQ คือจำนวนผลิตขั้นต่ำที่สัมพันธ์กับสูตร วัตถุดิบ บรรจุภัณฑ์ และต้นทุนการตั้งไลน์ผลิต",
    excerptEn: "MOQ is the minimum production quantity linked to formula, ingredients, packaging and production setup cost.",
    category: "Production",
    date: "2026-07-02",
    readingTime: "3 min read",
    sections: [
      {
        heading: "ความหมายของ MOQ",
        headingEn: "The meaning of MOQ",
        body: "MOQ หรือ Minimum Order Quantity คือจำนวนขั้นต่ำในการผลิตหนึ่งรอบ เพื่อให้ต้นทุนการผลิตและจัดซื้อแพ็กเกจเหมาะสม"
        ,
        bodyEn: "MOQ means Minimum Order Quantity, the minimum amount for one production run so production and packaging procurement remain practical."
      },
      {
        heading: "ทำไมแต่ละสินค้ามี MOQ ไม่เท่ากัน",
        headingEn: "Why MOQ differs by product",
        body: "สูตร วัตถุดิบ ขนาดบรรจุภัณฑ์ และข้อกำหนดจากซัพพลายเออร์ทำให้ MOQ แตกต่างกัน"
        ,
        bodyEn: "Formula type, ingredients, packaging size and supplier requirements can make MOQ different for each product."
      }
    ],
    checklist: ["ประเภทสินค้า", "ขนาดบรรจุ", "แพ็กเกจ", "จำนวนที่ต้องการ", "งบต่อรอบผลิต"],
    checklistEn: ["Product type", "Fill size", "Packaging", "Target quantity", "Budget per production run"]
  },
  {
    title: "จดแจ้งเครื่องสำอางใช้เวลากี่วัน",
    titleEn: "How long does Thai FDA cosmetic notification take?",
    slug: "thai-fda-notification-timeline",
    excerpt: "ภาพรวมเวลาจดแจ้งเครื่องสำอางและสิ่งที่ต้องเตรียมก่อนยื่นเอกสาร",
    excerptEn: "An overview of cosmetic notification timing and what to prepare before document submission.",
    category: "FDA",
    date: "2026-07-02",
    readingTime: "3 min read",
    sections: [
      {
        heading: "กรอบเวลาโดยทั่วไป",
        headingEn: "Typical timeline",
        body: "งานจดแจ้งทั่วไปมักใช้เวลาประมาณ 7-14 วันทำการ เมื่อข้อมูลสูตรและฉลากพร้อมครบถ้วน"
        ,
        bodyEn: "General notification work often takes around 7-14 business days once formula data and label information are complete."
      },
      {
        heading: "สิ่งที่ทำให้ล่าช้า",
        headingEn: "What can slow it down",
        body: "ข้อมูลสูตรไม่ครบ ชื่อสินค้าไม่ชัด ฉลากต้องแก้ หรือสารบางรายการต้องตรวจสอบเพิ่มเติม"
        ,
        bodyEn: "Incomplete formula data, unclear product names, label revisions or ingredients requiring extra review can delay the process."
      }
    ],
    checklist: ["ชื่อสินค้า", "สูตรส่วนประกอบ", "ฉลาก", "ข้อมูลผู้รับผิดชอบ", "เอกสารสถานที่ผลิต"],
    checklistEn: ["Product name", "Ingredient formula", "Label", "Responsible party details", "Factory documents"]
  },
  {
    title: "ฉลากเครื่องสำอางต้องมีอะไรบ้าง",
    titleEn: "What should be on a cosmetic label?",
    slug: "cosmetic-label-requirements",
    excerpt: "ข้อมูลหลักบนฉลากที่เจ้าของแบรนด์ควรตรวจให้พร้อมก่อนพิมพ์จริง",
    excerptEn: "Key label information brand owners should check before final printing.",
    category: "Label",
    date: "2026-07-02",
    readingTime: "4 min read",
    sections: [
      {
        heading: "ข้อมูลสำคัญบนฉลาก",
        headingEn: "Key label information",
        body: "ฉลากควรมีชื่อสินค้า วิธีใช้ ปริมาณสุทธิ เลขที่จดแจ้ง วันผลิตหรือครั้งที่ผลิต รายละเอียดผู้ผลิต และคำเตือนตามประเภทสินค้า"
        ,
        bodyEn: "A cosmetic label should include product name, directions, net content, notification number, production date or batch, manufacturer details and product-specific warnings."
      },
      {
        heading: "ตรวจฉลากก่อนพิมพ์",
        headingEn: "Check before printing",
        body: "ควรตรวจคำสะกด เลขจดแจ้ง ขนาดตัวอักษร และข้อกำหนดเฉพาะก่อนส่งไฟล์ให้โรงพิมพ์"
        ,
        bodyEn: "Check spelling, notification number, text size and relevant requirements before sending artwork to print."
      }
    ],
    checklist: ["ชื่อสินค้า", "เลขจดแจ้ง", "ส่วนประกอบ", "วิธีใช้", "ผู้ผลิต", "คำเตือน"],
    checklistEn: ["Product name", "Notification number", "Ingredients", "Directions", "Manufacturer", "Warnings"]
  }
];
