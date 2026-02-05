import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  // Validate form fields
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
          alert("Message sent successfully!");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error);
        },
      );
  };

  return (
    <section id="contact" className="my-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-5xl flex-col-center font-bold mb-6 text-white">
          Get in Touch
        </h2>
        <p className="text-gray-400 mb-12 text-base md:text-lg max-w-2xl">
          Have a project in mind, a question, or just want to say hello? Fill
          the form below and I’ll get back to you.
        </p>

        <form className="grid md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`contact-input bg-gray-900 text-white border rounded-lg px-4 py-3 focus:ring-2 outline-none transition ${
                errors.name
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-700 focus:ring-yellow-400"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="johndoe@email.com"
              className={`contact-input bg-gray-900 text-white border rounded-lg px-4 py-3 focus:ring-2 outline-none transition ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-700 focus:ring-yellow-400"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col">
            <label className="mb-2 text-sm text-gray-400">Message</label>
            <textarea
              rows="6"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={`contact-input resize-none bg-gray-900 text-white border rounded-lg px-4 py-3 focus:ring-2 outline-none transition ${
                errors.message
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-700 focus:ring-yellow-400"
              }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message}
              </span>
            )}
          </div>

          {/* Button */}
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full md:w-fit px-10 py-4 bg-yellow-400 text-black font-semibold rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
