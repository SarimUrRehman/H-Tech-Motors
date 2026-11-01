import React, { useState, useEffect } from 'react';
import { SITE_CONFIG } from '../config/siteConfig';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Navigation,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  Car,
  RotateCcw,
  Instagram,
  Facebook,
  Globe,
} from 'lucide-react';

interface ContactSectionProps {
  selectedService?: string;
  onClearSelectedService?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedService = '',
  onClearSelectedService,
}) => {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: selectedService || '',
    vehicleInfo: '',
    preferredDate: '',
    message: '',
  });

  // Sync selectedService prop if user clicked "Enquire" from the Services grid
  useEffect(() => {
    if (selectedService) {
      setFormData((prev) => ({ ...prev, serviceType: selectedService }));
    }
  }, [selectedService]);

  // Validation errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [mapIframeFailed, setMapIframeFailed] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate front-end booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (onClearSelectedService) {
        onClearSelectedService();
      }
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      serviceType: '',
      vehicleInfo: '',
      preferredDate: '',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-[#101214] py-16 lg:py-24 border-b border-[#1C2026] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#FF6B1A] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B1A]" />
            <span>ESTIMATES & WORKSHOP APPOINTMENTS</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-white"
            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
          >
            Contact & Service Booking
          </h2>

          <p className="mt-3 text-[#A7AEB8] text-base sm:text-lg">
            Schedule a diagnostic check, request a quote, or call our Richmond shop directly. We will confirm your preferred timing promptly.
          </p>
        </div>

        {/* Two-Column Layout (Stacked on Mobile, 2 Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* COLUMN 1: The Booking Form (7 Cols on LG) */}
          <div className="lg:col-span-7 bg-[#181B1F] border border-[#252A32] rounded-xl p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#252A32]">
              <div>
                <h3
                  className="text-2xl font-bold uppercase tracking-wide text-white"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  Book a Service or Request a Quote
                </h3>
                <p className="text-xs text-[#A7AEB8] mt-0.5">
                  No credit card required. Upfront estimate before any repairs.
                </p>
              </div>
              <Calendar className="w-6 h-6 text-[#FF6B1A]" />
            </div>

            {isSubmitted ? (
              /* Success Confirmation Card */
              <div className="bg-[#121417] border border-emerald-500/40 rounded-lg p-6 sm:p-8 text-center space-y-5 animate-in fade-in duration-200">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h4
                    className="text-2xl font-bold uppercase text-white"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                  >
                    Booking Request Received!
                  </h4>
                  <p className="text-sm text-[#A7AEB8] max-w-md mx-auto">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Our service advisor at H Tech Motor Inc. will review your request for{' '}
                    <strong className="text-[#FF6B1A]">{formData.serviceType}</strong> and call or email you shortly at{' '}
                    <span className="text-white font-mono">{formData.phone}</span>.
                  </p>
                </div>

                {/* Submitted Summary Info */}
                <div className="bg-[#181B1F] border border-[#2A2F38] rounded p-4 text-xs font-mono text-left space-y-1.5 text-[#A7AEB8] max-w-md mx-auto">
                  <div className="flex justify-between">
                    <span>Vehicle:</span>
                    <span className="text-white">{formData.vehicleInfo || 'Not specified'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Preferred Date:</span>
                    <span className="text-white">{formData.preferredDate || 'Earliest available'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shop Location:</span>
                    <span className="text-white">5671 Minoru Blvd #140, Richmond</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="inline-flex items-center gap-2 bg-[#20242A] hover:bg-[#2A313C] text-white border border-[#2A2F38] px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4 text-[#FF6B1A]" />
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Interactive Form */
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5"
                    >
                      Full Name <span className="text-[#FF6B1A]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jason Lee"
                      className={`w-full bg-[#101214] border ${
                        errors.name ? 'border-red-500' : 'border-[#2A2F38]'
                      } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#4B5563] focus:border-[#FF6B1A] transition-colors`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5"
                    >
                      Phone Number <span className="text-[#FF6B1A]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(604) 000-0000"
                      className={`w-full bg-[#101214] border ${
                        errors.phone ? 'border-red-500' : 'border-[#2A2F38]'
                      } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#4B5563] focus:border-[#FF6B1A] transition-colors font-mono`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Email & Service Type Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5"
                    >
                      Email Address <span className="text-[#FF6B1A]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className={`w-full bg-[#101214] border ${
                        errors.email ? 'border-red-500' : 'border-[#2A2F38]'
                      } rounded px-3.5 py-2.5 text-sm text-white placeholder-[#4B5563] focus:border-[#FF6B1A] transition-colors`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="serviceType"
                      className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5"
                    >
                      Service Required <span className="text-[#FF6B1A]">*</span>
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={`w-full bg-[#101214] border ${
                        errors.serviceType ? 'border-red-500' : 'border-[#2A2F38]'
                      } rounded px-3.5 py-2.5 text-sm text-white focus:border-[#FF6B1A] transition-colors`}
                    >
                      <option value="" disabled>
                        Select a service category...
                      </option>
                      {SITE_CONFIG.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Mechanical Inspection">
                        General Mechanical Inspection
                      </option>
                      <option value="Other / Not Sure">Other / Not Sure</option>
                    </select>
                    {errors.serviceType && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.serviceType}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Vehicle Make/Model/Year & Preferred Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="vehicleInfo"
                      className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 flex items-center gap-1.5"
                    >
                      <Car className="w-3.5 h-3.5 text-[#FF6B1A]" />
                      <span>Vehicle Make, Model & Year</span>
                    </label>
                    <input
                      type="text"
                      id="vehicleInfo"
                      name="vehicleInfo"
                      value={formData.vehicleInfo}
                      onChange={handleChange}
                      placeholder="e.g. 2019 Toyota RAV4"
                      className="w-full bg-[#101214] border border-[#2A2F38] rounded px-3.5 py-2.5 text-sm text-white placeholder-[#4B5563] focus:border-[#FF6B1A] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5 flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5 text-[#FF6B1A]" />
                      <span>Preferred Date</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-[#101214] border border-[#2A2F38] rounded px-3.5 py-2.5 text-sm text-white focus:border-[#FF6B1A] transition-colors"
                    />
                  </div>
                </div>

                {/* Message / Symptoms Notes */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-white mb-1.5"
                  >
                    Symptoms or Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe sounds, vibrations, dashboard warning lights, or specific service requests..."
                    className="w-full bg-[#101214] border border-[#2A2F38] rounded px-3.5 py-2.5 text-sm text-white placeholder-[#4B5563] focus:border-[#FF6B1A] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button: Safety orange with dark text for WCAG AA contrast */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#e85c0f] disabled:opacity-60 text-[#101214] font-extrabold text-base uppercase tracking-wider py-3.5 rounded shadow-lg shadow-[#FF6B1A]/20 transition-all cursor-pointer"
                    style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.25rem' }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-[#101214] border-t-transparent rounded-full animate-spin" />
                        <span>Submitting Request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 fill-current stroke-none" />
                        <span>Send Booking Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-[#A7AEB8] text-center mt-2 font-mono">
                    We will never share your contact information.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* COLUMN 2: Direct Contact, Operating Hours, Socials & Map Embed (5 Cols on LG) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* Quick Action Buttons: Click-to-call & Text & Email */}
            <div className="bg-[#181B1F] border border-[#252A32] rounded-xl p-6 shadow-xl space-y-4">
              <h3
                className="text-xl font-bold uppercase tracking-wide text-white"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Immediate Assistance
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Call Button */}
                <a
                  href={SITE_CONFIG.contact.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-[#FF6B1A] hover:bg-[#e85c0f] text-[#101214] font-bold text-sm uppercase py-3 px-4 rounded shadow transition-all"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem' }}
                >
                  <Phone className="w-4 h-4 fill-current stroke-none" />
                  <span>Call (604) 276-8933</span>
                </a>

                {/* SMS/Text Button */}
                <a
                  href={SITE_CONFIG.contact.smsHref}
                  className="inline-flex items-center justify-center gap-2 bg-[#20242A] hover:bg-[#2A313C] text-white hover:text-[#FF6B1A] border border-[#2A2F38] font-bold text-sm uppercase py-3 px-4 rounded transition-all"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '1.15rem' }}
                >
                  <MessageSquare className="w-4 h-4 text-[#FF6B1A]" />
                  <span>Text Us</span>
                </a>
              </div>

              {/* Email Button */}
              <a
                href={`mailto:${SITE_CONFIG.contact.emailPlaceholder}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#121417] hover:bg-[#1a1e24] text-[#A7AEB8] hover:text-white border border-[#2A2F38] text-xs font-mono py-2.5 px-4 rounded transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#FF6B1A]" />
                <span>{SITE_CONFIG.contact.emailPlaceholder}</span>
              </a>

              {/* Address details */}
              <div className="pt-2 border-t border-[#252A32] space-y-2">
                <div className="flex items-start gap-2.5 text-sm text-[#A7AEB8]">
                  <MapPin className="w-4 h-4 text-[#FF6B1A] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white font-semibold">H Tech Motor Inc.</div>
                    <div>{SITE_CONFIG.contact.address.fullText}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-[#181B1F] border border-[#252A32] rounded-xl p-6 shadow-xl space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#252A32]">
                <h4
                  className="text-lg font-bold uppercase tracking-wide text-white flex items-center gap-2"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  <Clock className="w-4 h-4 text-[#FF6B1A]" />
                  <span>Shop Operating Hours</span>
                </h4>
                <span className="text-[11px] font-mono text-[#A7AEB8]">[Editable]</span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                {SITE_CONFIG.contact.operatingHours.map((slot, i) => (
                  <div key={i} className="flex items-center justify-between py-1 border-b border-[#20242A] last:border-0">
                    <span className="text-[#A7AEB8]">{slot.days}</span>
                    <span className="text-white font-semibold">{slot.hours}</span>
                  </div>
                ))}
              </div>

              {/* Social Placeholders */}
              <div className="pt-3 border-t border-[#252A32] flex items-center justify-between text-xs text-[#A7AEB8]">
                <span className="font-mono text-[11px]">Connect With Us:</span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#20242A] text-[#A7AEB8] hover:text-[#FF6B1A] transition-colors"
                    aria-label="Instagram placeholder"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#20242A] text-[#A7AEB8] hover:text-[#FF6B1A] transition-colors"
                    aria-label="Facebook placeholder"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE_CONFIG.contact.address.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded bg-[#20242A] text-[#A7AEB8] hover:text-[#FF6B1A] transition-colors"
                    aria-label="Google Maps Business"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Keyless Google Maps Embed + Fallback Card + Get Directions Button */}
            <div className="bg-[#181B1F] border border-[#252A32] rounded-xl overflow-hidden shadow-xl flex flex-col">
              <div className="relative aspect-[16/9] w-full bg-[#121417]">
                {!mapIframeFailed ? (
                  <iframe
                    title="H Tech Motor Inc. Location Map"
                    src={SITE_CONFIG.contact.address.embedIframeUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    onError={() => setMapIframeFailed(true)}
                    className="w-full h-full grayscale contrast-125 opacity-85 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  /* Styled Fallback Card in case iframe is blocked */
                  <div className="w-full h-full bg-[#14171A] flex flex-col items-center justify-center p-6 text-center space-y-2">
                    <MapPin className="w-8 h-8 text-[#FF6B1A]" />
                    <div className="text-sm font-bold text-white uppercase">
                      5671 Minoru Blvd #140, Richmond, BC
                    </div>
                    <p className="text-xs text-[#A7AEB8]">
                      Map preview unavailable in current browser sandbox. Click below for live GPS directions.
                    </p>
                  </div>
                )}
              </div>

              {/* Get Directions Button Bar */}
              <div className="p-4 bg-[#14171A] border-t border-[#252A32] flex items-center justify-between">
                <div className="text-xs font-mono text-[#A7AEB8] truncate mr-2">
                  Minoru Blvd & Alderbridge Way
                </div>

                <a
                  href={SITE_CONFIG.contact.address.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#20242A] hover:bg-[#FF6B1A] text-white hover:text-[#101214] font-bold text-xs uppercase tracking-wider px-3.5 py-2 rounded transition-colors shrink-0"
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
