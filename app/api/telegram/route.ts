import { NextRequest, NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, lastName, phone, description, from } = body;

    const message = `
📩 *Нова заявка на консультацію*
👤 Ім’я: ${name}
👥 Прізвище: ${lastName}
📞 Телефон: ${phone}
📍 З розділу: ${from}
📝 Опис проблеми: ${description || "—"}
    `;

    const tgRes = await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });

    if (!tgRes.ok) {
      console.error("Telegram API error:", await tgRes.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending message:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
