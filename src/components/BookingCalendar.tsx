import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import { Clock, MapPin, Video, ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

const consultationTypes = [
  {
    id: "in-person",
    icon: MapPin,
    title: "In-Person",
    description: "Visit our studio for a personalized consultation",
    duration: "90 minutes",
  },
  {
    id: "virtual",
    icon: Video,
    title: "Virtual",
    description: "Connect via video call from the comfort of your home",
    duration: "60 minutes",
  },
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isDateDisabled = (date: Date) => {
    const day = date.getDay();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return day === 0 || day === 6 || date < today;
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center card-elevated p-12"
          >
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary-foreground" />
            </div>
            <h3 className="font-serif text-3xl mb-4">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-6">
              Thank you for scheduling a consultation with us. We've sent a
              confirmation email to <strong>{formData.email}</strong> with all
              the details.
            </p>
            <p className="font-serif text-xl">
              {date?.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}{" "}
              at {selectedTime}
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="label-refined mb-4">Book a Consultation</p>
          <h2 className="heading-section mb-6">Let's Create Together</h2>
          <p className="body-elegant max-w-2xl mx-auto text-muted-foreground">
            Schedule a complimentary consultation to discuss your project. 
            We'll explore your vision, answer questions, and outline next steps.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center font-medium transition-colors",
                    step >= s
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={cn(
                      "w-16 md:w-24 h-0.5 ml-4",
                      step > s ? "bg-primary" : "bg-muted"
                    )}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="max-w-4xl mx-auto card-elevated p-8 md:p-12"
        >
          {/* Step 1: Select Type */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h3 className="font-serif text-2xl mb-8 text-center">
                Choose Your Consultation Type
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {consultationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConsultationType(type.id)}
                    className={cn(
                      "p-6 border-2 text-left transition-all duration-300",
                      consultationType === type.id
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <type.icon className="w-8 h-8 mb-4 text-primary" />
                    <h4 className="font-serif text-xl mb-2">{type.title}</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {type.description}
                    </p>
                    <p className="label-refined flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {type.duration}
                    </p>
                  </button>
                ))}
              </div>
              <div className="mt-8 text-center">
                <button
                  onClick={() => setStep(2)}
                  disabled={!consultationType}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Date & Time */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h3 className="font-serif text-2xl mb-8 text-center">
                Select Date & Time
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isDateDisabled}
                    className="rounded-md border pointer-events-auto"
                  />
                </div>
                <div>
                  <p className="label-refined mb-4">Available Times</p>
                  <div className="grid grid-cols-2 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        disabled={!date}
                        className={cn(
                          "py-3 px-4 border text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
                          selectedTime === time
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border hover:border-primary"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-8 flex justify-between">
                <button onClick={() => setStep(1)} className="btn-outline">
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!date || !selectedTime}
                  className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center gap-2"
                >
                  Continue <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <h3 className="font-serif text-2xl mb-8 text-center">
                Your Information
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="label-refined block mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="label-refined block mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="label-refined block mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="label-refined block mb-2">
                    Tell us about your project
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-border bg-background focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Describe your space, style preferences, and goals..."
                  />
                </div>

                {/* Summary */}
                <div className="p-6 bg-secondary/50 rounded-sm">
                  <p className="label-refined mb-3">Booking Summary</p>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Type:</strong>{" "}
                      {consultationTypes.find((t) => t.id === consultationType)
                        ?.title || ""}{" "}
                      Consultation
                    </p>
                    <p>
                      <strong>Date:</strong>{" "}
                      {date?.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>
                      <strong>Time:</strong> {selectedTime}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn-outline"
                  >
                    Back
                  </button>
                  <button type="submit" className="btn-primary">
                    Confirm Booking
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default BookingCalendar;
