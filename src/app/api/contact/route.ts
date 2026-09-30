import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _honey } = body;

    // Reject bot submissions silently
    if (_honey) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    // Send from server to eliminate CORS or client browser ad-block restrictions
    const response = await fetch("https://formsubmit.co/ajax/chandakabhavyasri@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "User-Agent": "Bhavya-Portfolio-Server/1.0",
      },
      body: JSON.stringify({
        Name: name,
        Email: email,
        Subject: subject || `New Portfolio Message from ${name}`,
        Message: message,
        _subject: `New Message on Portfolio from ${name}`,
        _template: "table",
        _captcha: "false",
      }),
    });

    const result = await response.json().catch(() => ({}));

    if (response.ok) {
      return NextResponse.json({ success: true, result });
    } else {
      return NextResponse.json(
        { error: result.message || "Failed to deliver email" },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    console.error("API contact error:", err);
    return NextResponse.json(
      { error: "Internal server error occurred while sending message." },
      { status: 500 }
    );
  }
}
