import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      businessName,
      service,
      budget,
      timeline,
      projectDescription,
      honeyPot,
    } = body;

    // Spam protection check (honeypot field)
    if (honeyPot) {
      return NextResponse.json(
        { error: "Spam submission detected" },
        { status: 400 }
      );
    }

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter your full name." },
        { status: 422 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 422 }
      );
    }

    if (!service) {
      return NextResponse.json(
        { error: "Please select a service." },
        { status: 422 }
      );
    }

    if (
      !projectDescription ||
      typeof projectDescription !== "string" ||
      projectDescription.trim().length < 10
    ) {
      return NextResponse.json(
        { error: "Please describe your project (minimum 10 characters)." },
        { status: 422 }
      );
    }

    // Generate unique inquiry reference code
    const inquiryId = `VNM-${Date.now().toString(36).toUpperCase()}-${Math.random()
      .toString(36)
      .substring(2, 6)
      .toUpperCase()}`;

    // Log inquiry securely on backend (for production email integration / webhook dispatch)
    console.log("=== NEW VENOMOUS PROJECT INQUIRY ===", {
      inquiryId,
      timestamp: new Date().toISOString(),
      fullName,
      email,
      businessName: businessName || "Not provided",
      service,
      budget: budget || "Not specified",
      timeline: timeline || "Flexible",
      projectDescription,
    });

    return NextResponse.json(
      {
        success: true,
        inquiryId,
        message:
          "Inquiry received successfully. Samuel Tafese will review your brief and respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please email directly at tafeses43@gmail.com" },
      { status: 500 }
    );
  }
}
