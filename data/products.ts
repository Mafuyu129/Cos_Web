export type Product = {
  title: string;
  titleTh: string;
  slug: string;
  category: string;
  categoryTh: string;
  shortDescription: string;
  shortDescriptionTh: string;
  image: string;
  tags: string[];
  packageOptions: string[];
  concept: string;
  texture: string;
  moq: string;
  timeline: string;
  ingredients: string[];
  benefits: string[];
  usage: string[];
};

export const productCategories = ["All", "Mask", "Serum", "Moisturizer", "Cleanser"];

export const products: Product[] = [
  {
    title: "Viora Mask",
    titleTh: "Viora Mask (วีโอร่า มาสก์)",
    slug: "viora-mask",
    category: "Mask",
    categoryTh: "มาสก์",
    shortDescription: "Purple radiance mask concept for gentle exfoliation and bright-looking skin.",
    shortDescriptionTh: "มาสก์สีม่วงที่ช่วยเผยออร่าความกระจ่างใสของผิว",
    image: "/images/products/placeholder-jar.svg",
    tags: ["AHA", "BHA", "Radiance"],
    packageOptions: ["Jar", "Tube", "Sachet"],
    concept: "มาสก์ม่วงสำหรับแบรนด์ที่ต้องการสื่อสารเรื่องผิวกระจ่างใส ผลัดเซลล์ผิว และฟื้นบำรุงผิวที่อ่อนล้าจากมลภาวะ",
    texture: "มาสก์ทาทั่วใบหน้า เว้นรอบดวงตาและริมฝีปาก ทิ้งไว้ประมาณ 5-10 นาทีแล้วล้างออก",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น และแบบซองขั้นต่ำ 200 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Glycolic Acid (AHA)", "BHA (Salicylic Acid)", "Fision Pentafruit", "Aloe Vera", "Allantoin"],
    benefits: [
      "ช่วยผลัดเซลล์ผิวอย่างอ่อนโยน",
      "ช่วยลดความหมองคล้ำ ให้ผิวดูกระจ่างใส",
      "เติมความชุ่มชื้นให้ผิวดูอิ่มน้ำ",
      "ช่วยให้ผิวเรียบเนียนและนุ่มน่าสัมผัส",
      "ฟื้นบำรุงผิวที่อ่อนล้าจากมลภาวะ"
    ],
    usage: [
      "ล้างหน้าให้สะอาดและซับผิวให้แห้ง",
      "ทา Viora Mask ให้ทั่วใบหน้า โดยเว้นบริเวณรอบดวงตาและริมฝีปาก",
      "มาสก์ทิ้งไว้ประมาณ 5-10 นาที",
      "ล้างออกด้วยน้ำสะอาด หรือเช็ดออกตามคำแนะนำของผลิตภัณฑ์",
      "ใช้เป็นประจำ 1-2 ครั้งต่อสัปดาห์"
    ]
  },
  {
    title: "Clarielle Serum",
    titleTh: "Clarielle Serum (แคลริแอล เซรั่ม)",
    slug: "clarielle-serum",
    category: "Serum",
    categoryTh: "เซรั่ม",
    shortDescription: "Acne-care serum concept for clearer, cleaner and smoother-looking skin.",
    shortDescriptionTh: "เซรั่มเพื่อผิวที่ดูใส สะอาด เรียบเนียน เหมาะกับผิวมีแนวโน้มเป็นสิวง่าย",
    image: "/images/products/placeholder-serum.svg",
    tags: ["Acne", "Oil control", "Soothing"],
    packageOptions: ["Dropper bottle", "Airless pump", "Glass bottle"],
    concept: "เซรั่มลดสิวสำหรับแบรนด์ที่ต้องการจุดขายเรื่องลดการเกิดสิวใหม่ คุมความมัน และปลอบประโลมผิว",
    texture: "เซรั่มหยด 2-3 หยด ใช้ได้ทั่วใบหน้าหรือแต้มเฉพาะบริเวณที่เป็นสิว",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Niacinamide (Vitamin B3)", "Allantoin", "Bisabolol 95", "Witch Hazel"],
    benefits: [
      "ช่วยลดการเกิดสิวใหม่",
      "ช่วยควบคุมความมันส่วนเกิน",
      "ช่วยลดรอยแดงจากสิว",
      "ช่วยให้รูขุมขนดูเรียบเนียนขึ้น",
      "ปลอบประโลมผิวที่มีแนวโน้มเป็นสิวง่าย"
    ],
    usage: [
      "ล้างหน้าให้สะอาดและซับผิวให้แห้ง",
      "หยด Clarielle Serum ประมาณ 2-3 หยดลงบนฝ่ามือ",
      "ลูบไล้ให้ทั่วใบหน้า หรือแต้มเฉพาะบริเวณที่เป็นสิว",
      "นวดเบา ๆ จนเซรั่มซึมเข้าสู่ผิว",
      "ใช้เป็นประจำวันละ 2 ครั้ง เช้าและก่อนนอน"
    ]
  },
  {
    title: "Veilance Serum",
    titleTh: "Veilance Serum (เวลานซ์ เซรั่ม)",
    slug: "veilance-serum",
    category: "Serum",
    categoryTh: "เซรั่ม",
    shortDescription: "Barrier-support serum concept for stronger, balanced and healthier-looking skin.",
    shortDescriptionTh: "เซรั่มที่ช่วยสร้างเกราะปกป้องและคืนสมดุลให้ผิว",
    image: "/images/products/placeholder-serum.svg",
    tags: ["Barrier", "Ceramide", "Hydration"],
    packageOptions: ["Dropper bottle", "Airless pump", "Glass bottle"],
    concept: "เซรั่มเสริมเกราะป้องกันผิวสำหรับแบรนด์ที่ต้องการสื่อสารเรื่องผิวแข็งแรง ลดความแห้งและระคายเคือง",
    texture: "เซรั่มใช้เช้าและก่อนนอน ลูบไล้ทั่วใบหน้าและลำคอ",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Niacinamide", "Ceramide", "Squalane", "Vitamin E (Tocopherol)"],
    benefits: [
      "ช่วยเสริมเกราะป้องกันผิวให้แข็งแรง",
      "ลดปัญหาผิวแห้งและระคายเคือง",
      "ช่วยกักเก็บความชุ่มชื้นยาวนาน",
      "ปลอบประโลมผิวที่อ่อนแอ",
      "ช่วยให้ผิวดูสุขภาพดีและสมดุล"
    ],
    usage: [
      "ล้างหน้าให้สะอาด และซับผิวให้แห้ง",
      "หยด Veilance Serum ประมาณ 2-3 หยดลงบนฝ่ามือ",
      "ลูบไล้ให้ทั่วใบหน้าและลำคอ",
      "ตบเบา ๆ เพื่อช่วยให้เซรั่มซึมเข้าสู่ผิวได้ดียิ่งขึ้น",
      "ใช้เป็นประจำทุกเช้าและก่อนนอน"
    ]
  },
  {
    title: "Lumea Serum",
    titleTh: "Lumea Serum (ลูเมีย เซรั่ม)",
    slug: "lumea-serum",
    category: "Serum",
    categoryTh: "เซรั่ม",
    shortDescription: "Brightening serum concept for radiant and even-looking skin.",
    shortDescriptionTh: "เซรั่มเพื่อผิวที่ดูเปล่งประกายและกระจ่างใสอย่างเป็นธรรมชาติ",
    image: "/images/products/placeholder-serum.svg",
    tags: ["Brightening", "Tranexamic", "Hydration"],
    packageOptions: ["Dropper bottle", "Airless pump", "Glass bottle"],
    concept: "เซรั่มผิวกระจ่างใสสำหรับแบรนด์ที่ต้องการจุดขายเรื่องลดเลือนจุดด่างดำ รอยสิว และสีผิวที่ดูสม่ำเสมอ",
    texture: "เซรั่มเนื้อบำรุง ใช้ทั่วใบหน้าและลำคอหลังล้างหน้า",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Tranexamic Acid", "Niacinamide (Vitamin B3)", "Allantoin", "Panthenol", "Aquaxyl"],
    benefits: [
      "ช่วยให้ผิวดูกระจ่างใสอย่างเป็นธรรมชาติ",
      "ลดเลือนจุดด่างดำและรอยสิว",
      "ปรับสีผิวให้ดูสม่ำเสมอ",
      "เติมความชุ่มชื้นให้ผิวดูเปล่งปลั่ง",
      "ช่วยให้ผิวดูเรียบเนียนและสุขภาพดี"
    ],
    usage: [
      "ล้างหน้าให้สะอาดและซับผิวให้แห้ง",
      "หยด Lumea Serum ประมาณ 2-3 หยดลงบนฝ่ามือ",
      "ลูบไล้ให้ทั่วใบหน้าและลำคอ",
      "ตบเบา ๆ เพื่อช่วยให้เซรั่มซึมเข้าสู่ผิวได้ดีขึ้น",
      "ใช้เป็นประจำทุกเช้าและก่อนนอน"
    ]
  },
  {
    title: "Eloria Serum",
    titleTh: "Eloria Serum (เอโลเรีย เซรั่ม)",
    slug: "eloria-serum",
    category: "Serum",
    categoryTh: "เซรั่ม",
    shortDescription: "Anti-aging serum concept for lively, firm and youthful-looking skin.",
    shortDescriptionTh: "สื่อถึงความงดงามเหนือกาลเวลา และผิวที่ดูมีชีวิตชีวา",
    image: "/images/products/placeholder-serum.svg",
    tags: ["Anti-aging", "Peptide", "Firming"],
    packageOptions: ["Dropper bottle", "Airless pump", "Glass bottle"],
    concept: "เซรั่มชะลอวัยสำหรับแบรนด์ที่ต้องการสื่อสารเรื่องริ้วรอย ความกระชับ และผิวดูอิ่มฟู",
    texture: "เซรั่มสำหรับทาทั่วใบหน้าและลำคอ โดยเน้นบริเวณหน้าผาก หางตา และร่องแก้ม",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Copper Peptide", "Tripeptide", "Black Ginseng", "Vitamin E", "Bloomsurfact"],
    benefits: [
      "ช่วยลดเลือนริ้วรอยเล็ก ๆ",
      "ช่วยให้ผิวดูเรียบเนียนและกระชับ",
      "ฟื้นบำรุงผิวให้ดูอิ่มฟู",
      "เพิ่มความชุ่มชื้นให้ผิว",
      "ช่วยให้ผิวดูอ่อนเยาว์และมีชีวิตชีวา"
    ],
    usage: [
      "ล้างหน้าให้สะอาดและซับผิวให้แห้ง",
      "หยด Eloria Serum ประมาณ 2-3 หยดลงบนฝ่ามือ",
      "ลูบไล้ให้ทั่วใบหน้าและลำคอ",
      "เน้นบริเวณที่มีริ้วรอย เช่น หน้าผาก หางตา และร่องแก้ม",
      "ใช้เป็นประจำทุกเช้าและก่อนนอน"
    ]
  },
  {
    title: "Aeri Moisture",
    titleTh: "Aeri Moisture (แอริ มอยส์เจอร์)",
    slug: "aeri-moisture",
    category: "Moisturizer",
    categoryTh: "มอยส์เจอร์ไรเซอร์",
    shortDescription: "Lightweight moisturizer concept that hydrates without a heavy skin feel.",
    shortDescriptionTh: "มอยส์เจอไรเซอร์เนื้อบางเบา มอบความชุ่มชื้นโดยไม่หนักผิว",
    image: "/images/products/placeholder-jar.svg",
    tags: ["Lightweight", "Hydration", "Daily"],
    packageOptions: ["Jar", "Airless pump", "Tube"],
    concept: "มอยส์เจอร์ไรเซอร์เนื้อบางเบาสำหรับแบรนด์ที่ต้องการสินค้าเติมความชุ่มชื้น ใช้ง่าย และเหมาะกับผิวมัน/ผิวผสม",
    texture: "เนื้อบางเบา ซึมไว ไม่เหนียวเหนอะหนะ ใช้หลังลงเซรั่ม",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Sodium Hyaluronate", "Niacinamide", "Bloomsurfact", "Rose Extract", "Macadamia Oil", "Vitamin E", "Vitamin B12"],
    benefits: [
      "เติมความชุ่มชื้นให้ผิวทันที",
      "เนื้อบางเบา ซึมไว ไม่เหนียวเหนอะหนะ",
      "ช่วยลดความแห้งตึงของผิว",
      "เหมาะสำหรับผิวมันและผิวผสม",
      "ช่วยให้ผิวนุ่มลื่นและดูสดชื่น"
    ],
    usage: [
      "ล้างหน้าให้สะอาดและซับผิวให้แห้ง",
      "หลังลงเซรั่มแล้ว ให้ทา Aeri Moisture ในปริมาณที่เหมาะสม",
      "ลูบไล้ให้ทั่วใบหน้าและลำคอ",
      "นวดเบา ๆ จนผลิตภัณฑ์ซึมเข้าสู่ผิว",
      "ใช้เป็นประจำทุกเช้าและก่อนนอน"
    ]
  },
  {
    title: "Serenia Moisture",
    titleTh: "Serenia Moisture (ซีเรเนีย มอยส์เจอร์)",
    slug: "serenia-moisture",
    category: "Moisturizer",
    categoryTh: "มอยส์เจอร์ไรเซอร์",
    shortDescription: "Balancing moisturizer concept for comforted, healthy-looking skin.",
    shortDescriptionTh: "ผิวที่สมดุล สบาย และได้รับการปลอบประโลม",
    image: "/images/products/placeholder-jar.svg",
    tags: ["Balance", "Soothing", "Barrier"],
    packageOptions: ["Jar", "Airless pump", "Tube"],
    concept: "มอยส์เจอร์ไรเซอร์ปรับสมดุลผิวสำหรับแบรนด์ที่ต้องการเน้นผิวชุ่มชื้น แข็งแรง และปลอบประโลม",
    texture: "มอยส์เจอร์ไรเซอร์ใช้หลังเซรั่มหรือผลิตภัณฑ์บำรุงผิว เป็นขั้นตอนถัดไป",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Allantoin", "Niacinamide", "Aquaxyl", "Vitamin E", "Vitamin B12", "Rose Extract", "Bloomsurfact", "Jusanyu B"],
    benefits: [
      "ช่วยรักษาสมดุลความชุ่มชื้นของผิว",
      "ลดปัญหาผิวแห้งและผิวขาดน้ำ",
      "ช่วยให้ผิวดูแข็งแรงขึ้น",
      "ปลอบประโลมผิวและลดความไม่สบายผิว",
      "ช่วยให้ผิวดูสุขภาพดีและเรียบเนียน"
    ],
    usage: [
      "ล้างหน้าให้สะอาดและซับผิวให้แห้ง",
      "หลังลงเซรั่มหรือผลิตภัณฑ์บำรุงผิว ให้ทา Serenia Moisture เป็นขั้นตอนถัดไป",
      "ใช้ปริมาณพอเหมาะ ทาให้ทั่วใบหน้าและลำคอ",
      "นวดหรือตบเบา ๆ จนผลิตภัณฑ์ซึมเข้าสู่ผิว",
      "ใช้เป็นประจำทุกเช้าและก่อนนอน"
    ]
  },
  {
    title: "Velisse Cleanser",
    titleTh: "Velisse Cleanser (เวลิส คลีนเซอร์)",
    slug: "velisse-cleanser",
    category: "Cleanser",
    categoryTh: "คลีนเซอร์",
    shortDescription: "Liquid cleanser concept for clean, fresh and comfortable-feeling skin.",
    shortDescriptionTh: "มอบความสะอาดพร้อมความนุ่มสบายผิว",
    image: "/images/products/placeholder-pump.svg",
    tags: ["Cleanser", "Aloe", "Daily"],
    packageOptions: ["Pump bottle", "Flip cap bottle", "Refill pouch"],
    concept: "สบู่เหลวทำความสะอาดผิวสำหรับแบรนด์ที่ต้องการความสะอาด อ่อนโยน และไม่ทำให้ผิวแห้งตึงหลังใช้",
    texture: "สบู่เหลวผสมน้ำเล็กน้อยและถูให้เกิดฟอง ใช้ทำความสะอาดผิวกาย",
    moq: "อ้างอิงขั้นตอนโรงงาน: สูตรมาตรฐานเริ่มต้น 100 ชิ้น",
    timeline: "ผลิตจริงประมาณ 10-45 วันหลังยืนยันงานออกแบบและรายละเอียดผลิต",
    ingredients: ["Niacinamide", "Aloe Extract"],
    benefits: [
      "ทำความสะอาดผิวอย่างอ่อนโยน",
      "ขจัดสิ่งสกปรกและความมันส่วนเกิน",
      "ช่วยให้ผิวรู้สึกสะอาดและสดชื่น",
      "ไม่ทำให้ผิวแห้งตึงหลังใช้",
      "ช่วยคงความชุ่มชื้นตามธรรมชาติของผิว"
    ],
    usage: [
      "บีบผลิตภัณฑ์ลงบนฝ่ามือหรือฟองน้ำในปริมาณที่เหมาะสม",
      "ผสมน้ำเล็กน้อยและถูให้เกิดฟอง",
      "ลูบไล้ทำความสะอาดผิวกายให้ทั่ว",
      "ล้างออกด้วยน้ำสะอาด",
      "ใช้เป็นประจำทุกวัน เช้าและเย็น หรือได้ตามต้องการ"
    ]
  }
];
