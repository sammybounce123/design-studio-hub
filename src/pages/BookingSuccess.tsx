import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, X, Loader2, Home } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "failed">("loading");
  const [bookingDetails, setBookingDetails] = useState<{
    name?: string;
    consultationType?: string;
    date?: string;
    time?: string;
  } | null>(null);

  useEffect(() => {
    const verifyPayment = async () => {
      const reference = searchParams.get("reference");
      
      if (!reference) {
        setStatus("failed");
        return;
      }

      try {
        const { data, error } = await supabase.functions.invoke("paystack-verify", {
          body: { reference },
        });

        if (error) throw error;

        if (data?.status && data?.data?.status === "success") {
          setStatus("success");
          setBookingDetails({
            name: data.data.metadata?.name,
            consultationType: data.data.metadata?.consultationType,
            date: data.data.metadata?.date,
            time: data.data.metadata?.time,
          });
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("failed");
      }
    };

    verifyPayment();
  }, [searchParams]);

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full text-center card-elevated p-12"
      >
        {status === "loading" && (
          <>
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
              <Loader2 className="w-10 h-10 text-primary animate-spin" />
            </div>
            <h3 className="font-serif text-3xl mb-4">Verifying Payment...</h3>
            <p className="text-muted-foreground">
              Please wait while we confirm your payment.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-3xl mb-4">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for booking a consultation with DSR Interiors. 
              We've sent a confirmation email with all the details.
            </p>
            {bookingDetails && (
              <div className="p-6 bg-secondary/50 rounded-sm mb-8 text-left">
                <p className="label-refined mb-3">Booking Details</p>
                <div className="space-y-2 text-sm">
                  {bookingDetails.name && (
                    <p><strong>Name:</strong> {bookingDetails.name}</p>
                  )}
                  {bookingDetails.consultationType && (
                    <p><strong>Type:</strong> {bookingDetails.consultationType} Consultation</p>
                  )}
                  {bookingDetails.date && (
                    <p><strong>Date:</strong> {formatDate(bookingDetails.date)}</p>
                  )}
                  {bookingDetails.time && (
                    <p><strong>Time:</strong> {bookingDetails.time}</p>
                  )}
                </div>
              </div>
            )}
            <button
              onClick={() => navigate("/")}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </>
        )}

        {status === "failed" && (
          <>
            <div className="w-20 h-20 rounded-full bg-destructive flex items-center justify-center mx-auto mb-6">
              <X className="w-10 h-10 text-destructive-foreground" />
            </div>
            <h3 className="font-serif text-3xl mb-4">Payment Failed</h3>
            <p className="text-muted-foreground mb-8">
              We couldn't verify your payment. Please try again or contact us for assistance.
            </p>
            <button
              onClick={() => navigate("/")}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </button>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default BookingSuccess;
