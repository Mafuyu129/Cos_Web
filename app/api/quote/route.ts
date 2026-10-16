import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const {
      contactName,
      brandName,
      phone,
      lineId,
      email,
      productType,
      otherProductType,
      quantity,
      formulaType,
      message
    } = data;

    if (!contactName || !phone || !productType) {
      return NextResponse.json(
        { error: "ข้อมูลสำคัญไม่ครบถ้วน (กรุณากรอกชื่อ เบอร์โทร และประเภทสินค้า)" },
        { status: 400 }
      );
    }

    const productTypeLabels: Record<string, string> = {
      facial: "Facial Care (ดูแลผิวหน้า: เซรั่ม, ครีม, มาสก์, กันแดด)",
      body: "Body Care (ดูแลผิวกาย: โลชั่น, สครับ, เจลอาบน้ำ)",
      hair: "Hair & Scalp Care (เส้นผมและหนังศีรษะ)",
      fragrance: "Fragrance / Aroma (น้ำหอม, ก้านไม้หอม)",
      packaging: "Packaging & Labeling (จัดหาบรรจุภัณฑ์และออกแบบฉลาก)",
      document: "FDA / Document Service (จดแจ้ง อย. และเอกสารส่งออก)",
      other: `อื่น ๆ (${otherProductType || "-"})`
    };

    const formulaTypeLabels: Record<string, string> = {
      standard: "สูตรมาตรฐาน (Standard Formula)",
      "new-formula": "พัฒนาสูตรใหม่ (Custom Formula Development)",
      "not-sure": "ขอรับคำปรึกษาจากผู้เชี่ยวชาญ (Consultation Needed)"
    };

    const targetProduct = productTypeLabels[productType] || productType;
    const targetFormula = formulaTypeLabels[formulaType] || formulaType || "ขอรับคำปรึกษาจากผู้เชี่ยวชาญ";
    const primaryReceiver = process.env.NOTIFICATION_RECEIVER_EMAIL || "pherada3569@gmail.com";

    const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f9fd; margin: 0; padding: 24px; color: #1e293b; }
        .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 56, 174, 0.08); border: 1px solid #e2e8f0; }
        .header { background: linear-gradient(135deg, #0038AE 0%, #08296a 50%, #48ACD6 100%); padding: 32px 24px; color: #ffffff; }
        .header h1 { margin: 0 0 6px 0; font-size: 20px; font-weight: 800; letter-spacing: -0.02em; }
        .header p { margin: 0; font-size: 13px; opacity: 0.9; }
        .badge { display: inline-block; background: rgba(255, 255, 255, 0.2); border: 1px solid rgba(255, 255, 255, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 600; margin-bottom: 12px; }
        .content { padding: 24px; }
        .section-title { font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #0038AE; margin-top: 20px; margin-bottom: 10px; border-bottom: 1px solid #edf2f7; padding-bottom: 4px; }
        .box { background: #f8fafc; border-left: 4px solid #48ACD6; border-radius: 6px; padding: 12px 16px; margin-top: 14px; font-size: 13px; line-height: 1.6; color: #334155; }
        .footer { background: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #edf2f7; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <span class="badge">NEW OEM / ODM INQUIRY</span>
          <h1>มีผู้ขอใบเสนอราคาใหม่ (Pherada Cosmetics)</h1>
          <p>ส่งจากแบบฟอร์มเว็บไซต์ pheradacosmetics.com</p>
        </div>
        <div class="content">
          <div class="section-title">ข้อมูลผู้ติดต่อ (Client Info)</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">ชื่อผู้ติดต่อ:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${contactName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">เบอร์โทรศัพท์:</td>
              <td style="padding: 8px 0; color: #0038AE; font-weight: 700; font-size: 15px;">
                <a href="tel:${phone}" style="color: #0038AE; text-decoration: none;">${phone}</a>
              </td>
            </tr>
            ${brandName ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">ชื่อแบรนด์:</td>
              <td style="padding: 8px 0; color: #0f172a;">${brandName}</td>
            </tr>` : ""}
            ${lineId ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">LINE ID:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${lineId}</td>
            </tr>` : ""}
            ${email ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">อีเมล:</td>
              <td style="padding: 8px 0; color: #0f172a;">
                <a href="mailto:${email}" style="color: #0038AE;">${email}</a>
              </td>
            </tr>` : ""}
          </table>

          <div class="section-title">ความต้องการด้านการผลิต (Production Brief)</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 140px;">ประเภทสินค้า:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${targetProduct}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">รูปแบบสูตร:</td>
              <td style="padding: 8px 0; color: #0038AE; font-weight: 700;">${targetFormula}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: 600;">จำนวนผลิตโดยประมาณ:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${quantity || "ไม่ได้ระบุ"}</td>
            </tr>
          </table>

          ${message ? `
          <div class="section-title">รายละเอียดเพิ่มเติม / สารสกัดที่สนใจ</div>
          <div class="box">
            ${message.replace(/\n/g, "<br/>")}
          </div>` : ""}

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #edf2f7; font-size: 12px; color: #94a3b8;">
            วันและเวลาที่ส่ง: ${new Date().toLocaleString("th-TH", { timeZone: "Asia/Bangkok" })} น.
          </div>
        </div>
        <div class="footer">
          Pherada Cosmetics Ltd. (ห้างหุ้นส่วนจำกัด ภีรดา คอสเมติกส์)<br/>
          Dermo-Cosmetic OEM/ODM Laboratory System
        </div>
      </div>
    </body>
    </html>
    `;

    const subject = `[ขอใบเสนอราคาใหม่] ${contactName} - ${targetProduct} (${quantity || "ไม่ระบุจำนวน"})`;

    // Send directly to Pherada company inbox
    const sendResult = await resend.emails.send({
      from: "Pherada Web Lead <onboarding@resend.dev>",
      to: primaryReceiver,
      replyTo: email || undefined,
      subject,
      html: htmlBody
    });

    if (sendResult.error) {
      console.error("Resend error:", sendResult.error);
      throw new Error(sendResult.error.message);
    }

    return NextResponse.json({
      success: true,
      message: "ส่งข้อมูลเรียบร้อยแล้ว ทีมงานจะติดต่อกลับโดยเร็วที่สุด",
      id: sendResult.data?.id
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : "Unknown error";
    console.error("Resend API error:", errorMsg);
    return NextResponse.json(
      { error: "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองใหม่อีกครั้ง หรือติดต่อผ่าน Line / โทรศัพท์" },
      { status: 500 }
    );
  }
}
