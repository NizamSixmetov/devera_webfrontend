import { motion } from "motion/react";
import { toast, Toaster } from "sonner";
import { useTranslation } from "react-i18next";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Music2 } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  projectType?: string;
}

export default function Contact() {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit: SubmitHandler<ContactFormData> = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success(t("contact.form.successMessage"));
    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300"
    >
      <Toaster position="top-center" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-[#0A66C2] dark:text-blue-400 uppercase tracking-[0.2em] mb-4">
              {t("contact.sectionTitle")}
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 leading-tight">
              {t("contact.mainTitle")}
            </h3>
            <p className="text-lg text-[#6B7280] dark:text-gray-400 mb-12 leading-relaxed">
              {t("contact.description")}
            </p>

            <div className="space-y-8 mb-12">
              {[
                {
                  icon: <Mail size={24} />,
                  label: t("contact.contactInfo.email.label"),
                  value: t("contact.contactInfo.email.value"),
                  color:
                    "bg-blue-50 dark:bg-blue-900/20 text-[#0A66C2] dark:text-blue-400",
                },
                {
                  icon: <Phone size={24} />,
                  label: t("contact.contactInfo.phone.label"),
                  value: t("contact.contactInfo.phone.value"),
                  color:
                    "bg-purple-50 dark:bg-purple-900/20 text-[#7C3AED] dark:text-purple-400",
                },
                {
                  icon: <MapPin size={24} />,
                  label: t("contact.contactInfo.address.label"),
                  value: t("contact.contactInfo.address.value"),
                  color:
                    "bg-blue-50 dark:bg-blue-900/20 text-[#0A66C2] dark:text-blue-400",
                },
              ].map((info, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${info.color}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-[#6B7280] dark:text-gray-500 font-medium">
                      {info.label}
                    </p>
                    <p className="text-xl font-bold text-black dark:text-white">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              {[
                {
                  icon: <Linkedin size={20} />,
                  label: "Linkedin",
                  href: "https://www.linkedin.com/in/devera-groups-7477a639a/",
                },
                {
                  icon: <Instagram size={20} />,
                  label: "Instagram",
                  href: "https://www.instagram.com/devera_groups/",
                },
                {
                  icon: <Music2 size={20} />,
                  label: "TikTok",
                  href: "https://www.tiktok.com/@devera_groups",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
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
            className="bg-gray-50 dark:bg-gray-900/50 p-10 md:p-12 rounded-[48px] border border-gray-100 dark:border-gray-800"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black dark:text-gray-300 ml-1">
                    {t("contact.form.name.label")}
                  </label>
                  <input
                    {...register("name", {
                      required: t("contact.form.name.error.required"),
                    })}
                    placeholder={t("contact.form.name.placeholder")}
                    className={`w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border ${
                      errors.name
                        ? "border-red-500"
                        : "border-gray-100 dark:border-gray-700"
                    } text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-black dark:text-gray-300 ml-1">
                    {t("contact.form.email.label")}
                  </label>
                  <input
                    {...register("email", {
                      required: t("contact.form.email.error.required"),
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: t("contact.form.email.error.invalid"),
                      },
                    })}
                    placeholder={t("contact.form.email.placeholder")}
                    className={`w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border ${
                      errors.email
                        ? "border-red-500"
                        : "border-gray-100 dark:border-gray-700"
                    } text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all`}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black dark:text-gray-300 ml-1">
                  {t("contact.form.projectType.label")}
                </label>
                <select
                  {...register("projectType")}
                  className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all appearance-none"
                >
                  <option className="dark:bg-gray-800">
                    {t("contact.form.projectType.options.web")}
                  </option>
                  <option className="dark:bg-gray-800">
                    {t("contact.form.projectType.options.mobile")}
                  </option>
                  <option className="dark:bg-gray-800">
                    {t("contact.form.projectType.options.design")}
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-black dark:text-gray-300 ml-1">
                  {t("contact.form.message.label")}
                </label>
                <textarea
                  {...register("message", {
                    required: t("contact.form.message.error.required"),
                  })}
                  placeholder={t("contact.form.message.placeholder")}
                  rows={5}
                  className={`w-full px-6 py-4 rounded-2xl bg-white dark:bg-gray-800 border ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-100 dark:border-gray-700"
                  } text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A66C2] transition-all resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-xl shadow-purple-100 dark:shadow-none active:scale-[0.98] disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    {t("contact.form.submit")} <Send size={20} />
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
