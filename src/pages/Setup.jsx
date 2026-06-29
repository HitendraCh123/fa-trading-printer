import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import {
  Phone, CalendarCheck, MessageCircle, ShoppingCart, Wrench, Settings2,
  Gauge, PackagePlus, Network, Headset, CheckCircle2, Send,
} from "lucide-react";
import Reveal from "../components/Reveal";
import SetupHeader from "../components/SetupHeader";
import { SITE } from "../config/site";
import "../assets/css/Setup.css";

const CATEGORIES = [
  {
    title: "Home Printers",
    desc: "Perfect for home office use, compact and efficient printers for everyday printing needs.",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Office Printers",
    desc: "High-volume printers designed for busy offices with multiple users and heavy printing loads.",
    img: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "Photo Printers",
    desc: "Specialized printers for high-quality photo printing with vibrant colors and fine details.",
    img: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=600&auto=format&fit=crop",
  },
  {
    title: "High-Speed Printers",
    desc: "Fast and efficient printers for environments that require rapid document processing.",
    img: "https://images.unsplash.com/photo-1581235720704-06d3acc6dd17?q=80&w=600&auto=format&fit=crop",
  },
];

const PRODUCTS = [
  {
    title: "Wireless All-in-One Color Printer",
    desc: "Wireless printer with scanning and copying functions, ideal for home offices.",
    price: "$199.99",
    img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "High-Speed Laser Printer",
    desc: "Fast monochrome laser printer perfect for busy offices with high-volume printing needs.",
    price: "$1549.99",
    img: "https://images.unsplash.com/photo-1581235720704-06d3acc6dd17?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Professional Photo Printer",
    desc: "Advanced photo printer with 6-color ink system for gallery-quality prints.",
    price: "$249.99",
    img: "https://images.unsplash.com/photo-1612278675615-7b093b07772d?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Compact Inkjet Printer",
    desc: "Compact and affordable printer perfect for students and occasional home use.",
    price: "$89.99",
    img: "https://images.unsplash.com/photo-1612815154131-4d6e0e3e6d09?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Multifunction Workgroup Printer",
    desc: "Network-ready printer with advanced features for medium to large workgroups.",
    price: "$1599.99",
    img: "https://images.unsplash.com/photo-1614689103260-32cba0e4b6ba?q=80&w=500&auto=format&fit=crop",
  },
  {
    title: "Eco-Friendly Printer",
    desc: "Energy-efficient printer with low-cost consumables and duplex printing.",
    price: "$2779.99",
    img: "https://images.unsplash.com/photo-1606229365485-93a4b6113c6c?q=80&w=500&auto=format&fit=crop",
  },
];

const SERVICES = [
  { icon: Wrench, title: "Printer Repair", desc: "Expert repair services for all printer models. Fast diagnosis and quality repairs to get you back to printing quickly." },
  { icon: Settings2, title: "Setup & Installation", desc: "Professional setup and installation services for new printers, including network configuration and software installation." },
  { icon: Gauge, title: "Maintenance", desc: "Regular maintenance services to keep your printer running smoothly and extend its lifespan." },
  { icon: PackagePlus, title: "Supply Replacement", desc: "Genuine ink, toner, and other printer supplies with professional installation services." },
  { icon: Network, title: "Network Setup", desc: "Configure your printer for wireless or wired network access for seamless printing from multiple devices." },
  { icon: Headset, title: "Remote Support", desc: "Get help with printer issues remotely without the need for an on-site visit." },
];

export default function Setup() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", model: "", issue: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_b50e08n", // Service ID
        "template_hyuxh1l", // Template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          model: form.model,
          issue: form.issue,
        },
        "WHTEW8Ps9-2U_9fEV" // Public Key
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        model: "",
        issue: "",
      });
    } catch (error) {
      console.error("Email Error:", error);
      alert("Failed to send message.");
    }
    console.log(form);

  };

  return (
    <>
      <SetupHeader />

      {/* ── HERO ── */}
      <section className="setup-hero" id="home">
        <div className="hero-bg-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="container setup-hero-inner">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="setup-hero-content"
          >
            <h1 className="setup-hero-title">
              Your One-Stop Solution for <span className="hero-title-accent">Printer Sales &amp; Support</span>
            </h1>
            <p className="setup-hero-sub">
              We provide reliable printer sales, installation, and technical support for all major
              printer types, including LaserJet printers, home printers, and office printers.
            </p>
            <div className="setup-hero-actions">
              <a href={SITE.phoneHref} className="btn btn-primary">
                <Phone size={16} /> Call Now
              </a>
              <a href="#appointment" className="btn btn-secondary">
                <CalendarCheck size={16} /> Setup Now
              </a>
              <a href="#appointment" className="btn btn-ghost">
                <MessageCircle size={16} /> Chat Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PRINTER CATEGORIES ── */}
      <section className="section" id="categories">
        <div className="container">
          <Reveal>
            <h2 className="section-title centered">Printer Categories</h2>
          </Reveal>
          <div className="category-grid">
            {CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.08}>
                <div className="category-card">
                  <div className="category-img-wrap">
                    <img src={cat.img} alt={cat.title} loading="lazy" />
                  </div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRINTERS ── */}
      <section className="section featured-section" id="products">
        <div className="container">
          <Reveal>
            <h2 className="section-title centered">Featured Printers</h2>
          </Reveal>
          <div className="product-grid">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.06}>
                <div className="product-card">
                  <div className="product-img-wrap">
                    <img src={p.img} alt={p.title} loading="lazy" />
                  </div>
                  <div className="product-body">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="product-price">{p.price}</div>
                    <button type="button" className="btn btn-primary add-cart-btn">
                      <ShoppingCart size={15} /> Add to Cart
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES ── */}
      <section className="section" id="services">
        <div className="container">
          <Reveal>
            <h2 className="section-title centered">Our Services</h2>
          </Reveal>
          <div className="service-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <div className="service-card">
                  <div className="service-icon-band">
                    <s.icon size={28} />
                  </div>
                  <div className="service-card-body">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCHEDULE AN APPOINTMENT ── */}
      <section className="section appointment-section" id="appointment">
        <div className="container">
          <Reveal>
            <h2 className="section-title centered">Schedule an Appointment Today</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="appointment-form-card">
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Enter your full name"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="Enter your email address"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone" name="phone" type="tel" minLength={10} maxLength={12} required
                      placeholder="Enter your phone number"
                      value={form.phone} onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="model">Printer Model Number *</label>
                    <input
                      id="model" name="model" type="text" required
                      placeholder="Enter your printer model number"
                      value={form.model} onChange={handleChange}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="issue">Describe Issue *</label>
                    <textarea
                      id="issue" name="issue" rows={5} required
                      placeholder="Describe your printer issue in detail"
                      value={form.issue} onChange={handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary submit-btn">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon"><CheckCircle2 size={48} /></div>
                  <h2>Thank You!</h2>
                  <p>Your message has been sent successfully. We will contact you within 24 hours.</p>
                  <a href={SITE.phoneHref} className="btn btn-primary"><Phone size={15} /> Or call us now</a>
                </motion.div>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
