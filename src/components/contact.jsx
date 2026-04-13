import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    emailjs
      .send(
        "service_47vo00h",
        "template_27gk4cb",
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        "oKVyGX3W-LSV2sriK",
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus("error");
          console.log(error);
        },
      );
  };

  return (
    <section
      id="contact"
      className="px-6 xl:px-16 py-24 relative overflow-hidden"
    >
      {/* Top edge line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Background watermark */}
      <div className="absolute right-8 top-8 text-[160px] font-black text-white opacity-[0.02] select-none pointer-events-none leading-none">
        05
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-amber-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Contact
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-amber-400 mt-4" />
        </motion.div>

        {/* Two column */}
        <div className="grid xl:grid-cols-2 gap-px bg-gray-800">
          {/* Left — context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-black p-10 xl:p-14 flex flex-col justify-between gap-12"
          >
            <div className="space-y-4">
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind, a question, or just want to say hello?
                Fill the form and I'll get back to you.
              </p>
              <p className="text-gray-600 text-sm">
                Based in Abuja, Nigeria — available for remote work worldwide.
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-6">
              {[
                { label: "Email", value: "bauzytech@gmail.com" },
                {
                  label: "Availability",
                  value: "Open to remote opportunities",
                },
                { label: "Response Time", value: "Within 24 hours" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-5 items-start border-b border-gray-900 pb-6 last:border-0 last:pb-0"
                >
                  <span className="text-gray-700 text-xs font-black tracking-widest mt-1 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-gray-600 text-xs uppercase tracking-widest mb-1">
                      {item.label}
                    </p>
                    <p className="text-white font-semibold text-sm">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="bg-black p-10 xl:p-14"
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`bg-gray-950 text-white border px-5 py-4 outline-none text-sm transition-all duration-200 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-800 focus:border-amber-400"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="johndoe@email.com"
                  className={`bg-gray-950 text-white border px-5 py-4 outline-none text-sm transition-all duration-200 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-800 focus:border-amber-400"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">{errors.email}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold tracking-widest uppercase text-gray-600">
                  Message
                </label>
                <textarea
                  rows={6}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={`bg-gray-950 text-white border px-5 py-4 outline-none text-sm resize-none transition-all duration-200 ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-800 focus:border-amber-400"
                  }`}
                />
                {errors.message && (
                  <span className="text-red-500 text-xs">{errors.message}</span>
                )}
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border border-gray-700 text-white px-10 py-4 font-black tracking-widest uppercase text-sm hover:border-amber-400 hover:text-amber-400 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full"
              >
                {status === "sending" ? "Sending..." : "Send Message →"}
              </motion.button>

              {/* Status messages */}
              {status === "success" && (
                <p className="text-amber-400 text-sm font-semibold text-center">
                  ✓ Message sent successfully. I'll be in touch soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm font-semibold text-center">
                  ✗ Failed to send. Please try again.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom edge line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
    </section>
  );
};
