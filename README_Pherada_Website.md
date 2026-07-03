# Pherada Cosmetics Website

เว็บไซต์สำหรับ **ห้างหุ้นส่วนจำกัด ภีรดา คอสเมติกส์ (Pherada Cosmetics Ltd.)**  
คอนเซปต์: เว็บไซต์โรงงานรับผลิตเครื่องสำอางแบบ Premium Cosmetic Factory inspired by Bazic Skin  
Mood: Dark / Blue Gradient / Clean Luxury / Cosmetic Tech  
Brand Color: `#0038AE`, `#48ACD6`

---

## 1. Project Goal

สร้างเว็บไซต์บริษัทสำหรับนำเสนอธุรกิจโรงงานรับผลิตเครื่องสำอางแบบ One Stop Service ครบตั้งแต่

- ให้คำปรึกษาการสร้างแบรนด์
- วิจัยและพัฒนาสูตร R&D
- เลือกสูตรมาตรฐาน / พัฒนาสูตรใหม่
- จดแจ้งเครื่องสำอาง / เอกสาร อย.
- ออกแบบฉลาก โลโก้ และบรรจุภัณฑ์
- ผลิตจริง / QC / BMR
- ส่งมอบสินค้าให้ลูกค้า

เว็บไซต์ต้องดูน่าเชื่อถือ ทันสมัย และพร้อมใช้เสนอให้ลูกค้าหรือเจ้าของแบรนด์ใหม่

---

## 2. Design Direction

### Visual Concept

ใช้แนวคิด **The Blue Factory**  
ปรับจาก mood เว็บโรงงานสกินแคร์พรีเมียม ให้เข้ากับแบรนด์ Pherada

### Keywords

- Premium
- Cosmetic Factory
- Scientific R&D
- Clean Luxury
- One Stop Service
- SME Friendly
- Trust / Standard / Safety

### Color Tokens

```css
:root {
  --primary: #0038AE;
  --accent: #48ACD6;
  --dark-bg: #050816;
  --dark-section: #0B1224;
  --dark-card: #111A2E;
  --light-bg: #F6FBFF;
  --white: #FFFFFF;
  --text-dark: #10223F;
  --text-muted: #64748B;
  --text-light: #CDEFFF;
  --border: #D8E9F5;
}
```

### Dark Mode

Dark mode ต้องเป็นธีมหลักสำหรับหน้า Home และหน้า Showcase

```css
.dark {
  background: #050816;
  color: #FFFFFF;
}

.dark-card {
  background: #0B1224;
  border: 1px solid #1F4BC2;
}

.dark-muted {
  color: #CDEFFF;
}
```

### Typography

แนะนำใช้

- Thai: `Noto Sans Thai`
- English: `Inter`
- Weight: Regular / Medium / SemiBold / Bold

---

## 3. Recommended Tech Stack

ใช้ stack นี้เพื่อขึ้นโครงเร็วและ deploy ง่าย

```txt
Next.js 15+
TypeScript
Tailwind CSS
Framer Motion
Lucide React
Vercel
```

Optional:

```txt
next-themes สำหรับ dark mode
react-hook-form สำหรับฟอร์ม Contact / Quote
zod สำหรับ validate form
```

---

## 4. Folder Structure

```txt
pherada-website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── showcase/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── process/
│   │   └── page.tsx
│   ├── standards/
│   │   └── page.tsx
│   ├── knowledge/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   ├── common/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── CTASection.tsx
│   │   ├── Button.tsx
│   │   └── Container.tsx
│   │
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── SimplePowerfulSection.tsx
│   │   ├── FeaturedServices.tsx
│   │   ├── ShowcasePreview.tsx
│   │   └── ProcessPreview.tsx
│   │
│   ├── services/
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceGrid.tsx
│   │   └── ServiceDetailHero.tsx
│   │
│   ├── showcase/
│   │   ├── ProductCard.tsx
│   │   ├── ProductGrid.tsx
│   │   └── ProductDetail.tsx
│   │
│   ├── process/
│   │   └── ProcessTimeline.tsx
│   │
│   └── forms/
│       └── QuoteForm.tsx
│
├── data/
│   ├── nav.ts
│   ├── services.ts
│   ├── products.ts
│   ├── process.ts
│   ├── knowledge.ts
│   └── company.ts
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── factory/
│   │   └── logos/
│   └── logo.svg
│
├── README.md
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 5. Pages

### 5.1 Home

Route:

```txt
/
```

Sections:

1. Hero Section
2. Stats Bar
3. A Simple is Powerful
4. Our Services
5. Showcase Preview
6. Production Process Preview
7. Standard / Trust CTA
8. Contact CTA
9. Footer

Hero copy:

```txt
The Blue Factory
โรงงานรับผลิตเครื่องสำอางครบวงจร

จากคอนเซปต์ สู่สูตร บรรจุภัณฑ์ และสินค้าพร้อมจำหน่าย
OEM / ODM / R&D / FDA / Packaging / Production
```

CTA:

```txt
เริ่มสร้างแบรนด์
ดูบริการทั้งหมด
ขอใบเสนอราคา
```

---

### 5.2 About

Route:

```txt
/about
```

Content:

- ประวัติ Pherada Cosmetics Ltd.
- โรงงาน One Stop Service
- Vision and Mission
- Research & Innovation
- Quality & Safety
- Long Term Partnership
- Team / Founder
- Factory location

Sections:

```txt
About Hero
Company Story
Vision & Mission
Why Choose Us
Founder / Team
CTA
```

---

### 5.3 Services

Route:

```txt
/services
```

Main service categories:

```txt
Facial Care
Body Care
Hair Care
Fragrance / Aroma
Packaging & Labeling
FDA / Document Service
```

Service Card Fields:

```ts
type Service = {
  title: string;
  slug: string;
  shortDescription: string;
  items: string[];
  image: string;
};
```

---

### 5.4 Service Detail

Route:

```txt
/services/[slug]
```

Example:

```txt
/services/facial-care
/services/body-care
/services/hair-care
/services/fragrance
```

Sections:

```txt
Service Detail Hero
What We Can Produce
Formula Options
MOQ / Timeline
Production Steps
FAQ
Contact CTA
```

Example copy:

```txt
Facial Care OEM
Cream • Serum • Gel • Sunscreen

บริการพัฒนาสูตรและผลิตสินค้าดูแลผิวหน้า
สำหรับเจ้าของแบรนด์ใหม่และ SME
```

---

### 5.5 Showcase

Route:

```txt
/showcase
```

Product categories:

```txt
Facial Care
Body Care
Scrub
Soap & Shampoo
Sunscreen
Oral Care
Fragrance Diffuser
Spa Product
```

Layout:

- Filter by category
- Product cards
- Product mood image
- CTA to product detail or quote

---

### 5.6 Product Detail

Route:

```txt
/showcase/[slug]
```

Example:

```txt
/showcase/hyaluronic-serum
/showcase/body-scrub
/showcase/fragrance-diffuser
```

Sections:

```txt
Product Hero
Product Concept
Texture / Usage
Packaging Options
MOQ
Production Timeline
CTA
```

---

### 5.7 Process

Route:

```txt
/process
```

Production steps:

```txt
1. ลูกค้าแจ้งรายละเอียด
2. เลือกสูตร / พัฒนาสูตร
3. ออกใบเสนอราคา / วางมัดจำ
4. จดแจ้งเครื่องสำอาง
5. ออกแบบฉลากและบรรจุภัณฑ์
6. ผลิตจริง / QC / BMR
7. ส่งมอบสินค้า
```

Use timeline UI.

---

### 5.8 Standards

Route:

```txt
/standards
```

Content:

- Thai FDA Standard
- หนังสือรับรองสถานที่ผลิตเครื่องสำอาง
- QC Process
- BMR Document
- Halal / GMP / ISO in progress if available

Sections:

```txt
Standards Hero
FDA Certificate Card
Quality Control
Document Workflow
CTA
```

---

### 5.9 Knowledge / News

Route:

```txt
/knowledge
```

Article topics:

```txt
เริ่มสร้างแบรนด์เครื่องสำอางต้องเตรียมอะไร
สูตรมาตรฐาน vs สูตรพัฒนาใหม่ ต่างกันยังไง
MOQ คืออะไร
จดแจ้งเครื่องสำอางใช้เวลากี่วัน
ฉลากเครื่องสำอางต้องมีอะไรบ้าง
```

---

### 5.10 Article Detail

Route:

```txt
/knowledge/[slug]
```

Example article:

```txt
How to Start Cosmetic Brand
เริ่มสร้างแบรนด์เครื่องสำอางต้องเตรียมอะไรบ้าง
```

Sections:

```txt
Article Header
Table of Contents
Article Content
Checklist
Related Articles
CTA
```

---

### 5.11 Contact / Quote Form

Route:

```txt
/contact
```

Form fields:

```txt
ชื่อผู้ติดต่อ
ชื่อแบรนด์
เบอร์โทร
Line ID
Email
ประเภทสินค้าที่ต้องการผลิต
จำนวนผลิตโดยประมาณ
ต้องการสูตรมาตรฐานหรือพัฒนาสูตรใหม่
รายละเอียดเพิ่มเติม
```

Contact info:

```txt
064-2451536
061-6289415
pherada3569@gmail.com
Line: @440bqhfk
5 ถนนวิฑูรอุทิศ 8 ตำบลสะเตง อำเภอเมือง จังหวัดยะลา 95000
```

---

## 6. Navigation

Main nav:

```ts
export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Service", href: "/services" },
  { label: "Showcase", href: "/showcase" },
  { label: "News / Knowledge", href: "/knowledge" },
  { label: "Contact", href: "/contact" },
];
```

CTA nav:

```txt
Contact Us
ขอใบเสนอราคา
```

---

## 7. Prototype / Route Flow

Use this flow for Figma Prototype and website navigation.

```txt
Home
├── About
├── Services
│   └── Service Detail
│       └── Contact
├── Showcase
│   └── Product Detail
│       └── Contact
├── Process
│   └── Contact
├── Standards
│   └── Contact
├── Knowledge
│   └── Article Detail
│       └── Contact
└── Contact
```

User journey:

```txt
ลูกค้าเข้าหน้า Home
→ ดูบริการ
→ เลือกหมวดสินค้า
→ ดูขั้นตอนผลิต
→ ดูมาตรฐาน
→ กรอกฟอร์มขอใบเสนอราคา
```

---

## 8. Data Models

### Company

```ts
export const company = {
  nameTh: "ห้างหุ้นส่วนจำกัด ภีรดา คอสเมติกส์",
  nameEn: "Pherada Cosmetics Ltd.",
  tagline: "From the Concept to Global Success",
  concept: "The Blue Factory",
  phone: ["064-2451536", "061-6289415"],
  email: "pherada3569@gmail.com",
  line: "@440bqhfk",
  address:
    "5 ถนนวิฑูรอุทิศ 8 ตำบลสะเตง อำเภอเมือง จังหวัดยะลา 95000",
};
```

### Service

```ts
export type Service = {
  title: string;
  slug: string;
  category: "facial" | "body" | "hair" | "fragrance" | "document" | "packaging";
  shortDescription: string;
  description: string;
  items: string[];
  timeline?: string;
  moq?: string;
};
```

### Product

```ts
export type Product = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  image: string;
  tags: string[];
  packageOptions: string[];
};
```

### Article

```ts
export type Article = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  content: string;
};
```

---

## 9. Components Specification

### Navbar

Requirements:

- Sticky top
- Transparent on Home hero
- White / dark mode support
- Mobile hamburger menu
- CTA button on desktop
- Logo left
- Menu center/right

Props:

```ts
type NavbarProps = {
  variant?: "light" | "dark";
};
```

---

### HeroSection

Requirements:

- Large headline
- Dark gradient background
- Product bottle visual or placeholder image
- CTA buttons
- Responsive layout

Props:

```ts
type HeroSectionProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};
```

---

### ServiceCard

Requirements:

- Number badge
- Icon
- Title
- Short description
- Hover animation
- Link to detail page

Props:

```ts
type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  href: string;
};
```

---

### ProductCard

Requirements:

- Product image
- Category
- Title
- Tags
- Link to detail page

Props:

```ts
type ProductCardProps = {
  title: string;
  category: string;
  image: string;
  href: string;
  tags?: string[];
};
```

---

### ProcessTimeline

Requirements:

- Desktop: horizontal timeline
- Mobile: vertical timeline
- Each step has number, title, description

Props:

```ts
type ProcessStep = {
  number: number;
  title: string;
  description: string;
};
```

---

### QuoteForm

Requirements:

- Contact fields
- Product type select
- Formula option radio
- Quantity field
- Message textarea
- Submit button
- Validation

Fields:

```ts
type QuoteFormValues = {
  contactName: string;
  brandName?: string;
  phone: string;
  lineId?: string;
  email?: string;
  productType: string;
  quantity?: string;
  formulaType: "standard" | "new-formula" | "not-sure";
  message?: string;
};
```

---

## 10. Responsive Breakpoints

```ts
const breakpoints = {
  mobile: "390px",
  tablet: "834px",
  desktop: "1440px",
};
```

Tailwind:

```ts
theme: {
  screens: {
    sm: "390px",
    md: "834px",
    lg: "1024px",
    xl: "1440px",
  },
}
```

Layout rules:

```txt
Desktop: 12-column grid, max width 1280px
Tablet: 8-column grid, padding 40px
Mobile: 4-column grid, padding 24px
```

---

## 11. Animation Direction

Use Framer Motion.

Animations:

```txt
Hero text fade up
Product bottle floating
Service cards hover lift
Timeline step fade in
CTA button subtle scale
Page transition fade
```

Example:

```ts
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};
```

---

## 12. Installation

```bash
npx create-next-app@latest pherada-website \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir false \
  --import-alias "@/*"
```

Install packages:

```bash
cd pherada-website

npm install framer-motion lucide-react next-themes react-hook-form zod @hookform/resolvers
```

Run dev:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

---

## 13. Codex / AI Build Prompt

Copy this prompt to Codex or Cursor.

```txt
Build a Next.js 15 TypeScript Tailwind CSS website for Pherada Cosmetics Ltd.

Use the README requirements exactly.

Project concept:
- Premium cosmetic factory website
- Inspired by Bazic Skin structure, but do not copy
- Brand concept: The Blue Factory
- Colors: #0038AE, #48ACD6
- Support dark mode and light mode
- Build all routes:
  /
  /about
  /services
  /services/[slug]
  /showcase
  /showcase/[slug]
  /process
  /standards
  /knowledge
  /knowledge/[slug]
  /contact

Required:
- Responsive desktop/tablet/mobile
- Reusable components
- Data-driven services/products/articles
- Sticky navbar
- Footer
- Contact / Quote form
- Smooth animations with Framer Motion
- No backend required yet
- Use placeholder images if real assets are not available
- Clean code, readable file structure
- Thai and English text supported
```

---

## 14. Acceptance Criteria

The project is ready for first client preview when:

- [ ] Home page matches premium dark cosmetic factory mood
- [ ] All 11 pages are accessible via route
- [ ] Navbar links work
- [ ] Services page links to service detail
- [ ] Showcase page links to product detail
- [ ] Knowledge page links to article detail
- [ ] Contact form UI is complete
- [ ] Desktop layout looks good at 1440px
- [ ] Tablet layout looks good at 834px
- [ ] Mobile layout looks good at 390px
- [ ] Dark mode works
- [ ] Light mode works
- [ ] CTA buttons go to `/contact`
- [ ] No console errors
- [ ] Ready to deploy on Vercel

---

## 15. Deployment

Deploy to Vercel:

```bash
npm run build
```

If build passes:

```bash
vercel
```

Recommended environment:

```txt
Node.js 20+
Next.js 15+
Vercel
```

---

## 16. Future Phase

หลังจากเว็บบริษัทเสร็จ สามารถต่อยอดเป็นระบบหลังบ้านได้:

```txt
Customer Portal
Production Tracking
Quote Management
Order Management
Formula Management
Inventory
FDA Document Management
BMR
Line notification bot
```

Future stack:

```txt
Supabase Database
Google Drive document storage
Line Bot Notification
Vercel Hosting
```
