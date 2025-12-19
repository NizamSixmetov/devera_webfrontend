import { useForm, type SubmitHandler } from "react-hook-form";
import { toast, Toaster } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Instagram,
  Music2,
} from "lucide-react";
import { motion } from "motion/react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    toast.success("Message sent successfully! We'll get back to you soon.");
    reset();
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-[#0A66C2] uppercase tracking-[0.2em] mb-4">
              Contact Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Let's Build Something Extraordinary Together
            </h3>
            <p className="text-lg text-[#6B7280] mb-12 leading-relaxed">
              Have a project in mind? Or just want to say hello? We're always
              open to discussing new projects, creative ideas, or opportunities
              to be part of your visions.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A66C2]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] font-medium">
                    Email us at
                  </p>
                  <p className="text-xl font-bold text-black">
                    hello@devera.tech
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-[#7C3AED]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] font-medium">
                    Call us at
                  </p>
                  <p className="text-xl font-bold text-black">
                    +1 (555) 000-DEVERA
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0A66C2]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-[#6B7280] font-medium">
                    Visit our office
                  </p>
                  <p className="text-xl font-bold text-black">
                    Tech Plaza, Silicon Valley, CA
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: <Linkedin size={20} />,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/devera-groups-7477a639a/",
                },
                {
                  icon: <Instagram size={20} />,
                  label: "Instagram",
                  href: "https://www.instagram.com/devera_groups/",
                },
                {
                  icon: <Music2 size={20} />,
                  label: "Instagram",
                  href: "https://www.tiktok.com/@devera_groups",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 md:p-12 rounded-[48px] border border-gray-100"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black ml-1">
                    Full Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="John Doe"
                    className={`w-full px-6 py-4 rounded-2xl bg-white border ${
                      errors.name ? "border-red-500" : "border-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 ml-1">
                      {typeof errors.name.message === "string"
                        ? errors.name.message
                        : "Name is required"}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black ml-1">
                    Email Address
                  </label>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Invalid email",
                      },
                    })}
                    placeholder="john@example.com"
                    className={`w-full px-6 py-4 rounded-2xl bg-white border ${
                      errors.email ? "border-red-500" : "border-gray-100"
                    } focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 ml-1">
                      {typeof errors.email.message === "string"
                        ? errors.email.message
                        : "Email is required"}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">
                  Project Type
                </label>
                <select
                  {...register("projectType")}
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all appearance-none"
                >
                  <option>Web Development</option>
                  <option>Mobile Application</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black ml-1">
                  Your Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className={`w-full px-6 py-4 rounded-2xl bg-white border ${
                    errors.message ? "border-red-500" : "border-gray-100"
                  } focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all resize-none`}
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-red-500 ml-1">
                    {typeof errors.message.message === "string"
                      ? errors.message.message
                      : "Message is required"}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-100 active:scale-[0.98] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
