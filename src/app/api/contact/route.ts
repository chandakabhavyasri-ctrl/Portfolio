import { NextResponse } from "next/server";

const WEB3FORMS_ACCESS_KEY = "cf5d41f8-e639-4bcf-a041-e0df4c5f385d";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, _honey } = body;

    // Reject bot submissions silently
    if (_honey) {
      return NextResponse.json({ success: true, message: "Bot submission ignored." });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide your name, email, and message." },
        { status: 400 }
      );
    }

    // Submit directly to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: name,
        email: email,
        subject: subject || `New Portfolio Inquiry from ${name}`,
        message: message,
        from_name: `${name} (Portfolio Contact)`,
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json({ success: true, message: "Message sent successfully!" });
    } else {
      console.error("Web3Forms error response:", data);
      return NextResponse.json(
        { error: data.message || "Unable to send message at this time." },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    console.error("Contact API exception:", err);
    return NextResponse.json(
      { error: "Server connection issue. Please try again." },
      { status: 500 }
    );
  }
}
