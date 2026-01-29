import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PaymentRequest {
  email: string;
  amount: number;
  name: string;
  consultationType: string;
  date: string;
  time: string;
  phone?: string;
  message?: string;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const PAYSTACK_SECRET_KEY = Deno.env.get("PAYSTACK_SECRET_KEY");
    if (!PAYSTACK_SECRET_KEY) {
      throw new Error("PAYSTACK_SECRET_KEY is not configured");
    }

    const { email, amount, name, consultationType, date, time, phone, message }: PaymentRequest = await req.json();

    if (!email || !amount || !name) {
      throw new Error("Email, amount, and name are required");
    }

    // Initialize Paystack transaction
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: amount * 100, // Paystack expects amount in kobo
        callback_url: `${req.headers.get("origin")}/booking-success`,
        metadata: {
          name,
          consultationType,
          date,
          time,
          phone: phone || "",
          message: message || "",
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to initialize payment");
    }

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Paystack initialization error:", error);
    return new Response(
      JSON.stringify({ 
        status: false, 
        message: error instanceof Error ? error.message : "An error occurred" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
