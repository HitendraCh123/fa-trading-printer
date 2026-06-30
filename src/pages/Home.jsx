import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {
  Search, Download, PlayCircle, Wifi, ShieldCheck, Cable,
  CheckCircle2, AlertCircle, ArrowRight, Star, Zap, Clock, Users, X
} from "lucide-react";
import Reveal from "../components/Reveal";
import FeedLine from "../components/FeedLine";
import { BRANDS, SITE } from "../config/site";

import printer_connect_hero from "../assets/images/printer_connect_hero.png";

import "../assets/css/Home.css";

function detectOS() {
  const ua = window.navigator.userAgent;
  if (ua.includes("Win")) return "Windows";
  if (ua.includes("Mac")) return "macOS";
  if (ua.includes("Linux")) return "Linux";
  if (ua.includes("Android")) return "Android";
  if (ua.includes("like Mac")) return "iOS";
  return "your device";
}

const STEPS = [
  { icon: Search, num: "01", title: "Identify Your Printer", text: "Click the setup button and select your printer's brand and exact model number." },
  { icon: Download, num: "02", title: "Download Software", text: "Download the recommended unified driver package for your operating system." },
  { icon: PlayCircle, num: "03", title: "Run Installer", text: "Open the downloaded file and follow the on-screen instructions to connect." },
];

const CONNECT_POINTS = [
  { icon: Wifi, text: "Step-by-step connection wizards" },
  { icon: ShieldCheck, text: "Latest security updates for firmware" },
  { icon: Cable, text: "Network and Wi-Fi pairing configurations" },
];

const STATS = [
  { icon: Users, num: "50K+", label: "Printers Setup" },
  { icon: Star, num: "4.9/5", label: "Customer Rating" },
  { icon: Zap, num: "< 5 min", label: "Avg. Setup Time" },
  { icon: Clock, num: "24/7", label: "Support Available" },
];

const SETUP_STEPS = [
  "Remove the printer from its packaging and connect it to a power source.",
  "Carefully install the ink cartridges.",
  "Put paper into the input tray — make sure it's compatible with your model.",
  "Set preferences such as time, language, and country.",
  "Download and install the software so your printer can connect to your PC or mobile.",
  "Try printing a test document to confirm your printer works properly.",
];

const OFFLINE_FIXES = [
  "Check cable connections — ensure the USB cable is firm and inserted well.",
  "Set the printer online manually from your OS settings.",
  "Remove all pending print jobs from the print queue.",
  "Reinstall drivers — outdated or corrupted drivers are the #1 cause of offline issues.",
  "Run the Print and Scan Doctor to identify and rectify printer errors.",
  "Check for paper jam by removing the input tray carefully.",
];

function CountUp({ target, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target);
    if (isNaN(num)) { setCount(target); return; }
    let start = 0;
    const step = (num / duration) * 16;
    const interval = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num % 1 === 0 ? num : num.toFixed(1)); clearInterval(interval); }
      else setCount(num % 1 === 0 ? Math.floor(start) : start.toFixed(1));
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target, duration]);
  return <span ref={ref}>{typeof count === "string" ? count : count}{suffix}</span>;
}

export default function Home() {
  const [os, setOs] = useState("Windows");
  const [confirmed, setConfirmed] = useState(null);
  const [showOsModal, setShowOsModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => { setOs(detectOS()); }, []);

  function handleYesContinue() {
    setShowOsModal(false);
    navigate(`/setup?os=${encodeURIComponent(os)}`);
  }

  const handleChooseManually = () => {
  setShowOsModal(false); // Modal close
  navigate("/setup");    // Setup page par redirect
};

  useEffect(() => {
    document.body.style.overflow = showOsModal ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [showOsModal]);

  return (
    <>
      {/* ──── HERO ──── */}
      <section className="hero">
        <div className="hero-bg-grid" />
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="container hero-inner">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <motion.span
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
              <span className="hero-badge-dot" />
              Software &amp; Driver Downloads
            </motion.span>
            <h1 className="hero-title">
              Welcome to<br />
              <span className="hero-title-accent">Software and Drivers</span>
            </h1>
            <p className="hero-sub">
              Identify your printer to get the latest official drivers, firmware, and software
              for a secure and hassle-free setup.
            </p>
            <div className="hero-actions">
              <button type="button" className="btn btn-primary" onClick={() => setShowOsModal(true)}>
                Identify Your Printer <ArrowRight size={16} />
              </button>
              <Link to="/support" className="btn btn-secondary">
                Talk to Support
              </Link>
            </div>
            {/* <div className="hero-trust">
              {["HP", "Epson", "Canon", "Brother", "Dell"].map(b => (
                <span key={b} className="hero-brand-badge">{b}</span>
              ))}
            </div> */}
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
          >
            <img src={printer_connect_hero} alt="Printer software and driver setup" className="hero-illustration" />
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {showOsModal && (
          <motion.div
            className="os-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setShowOsModal(false)}
          >
            <motion.div
              className="os-card os-modal-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="os-modal-close"
                aria-label="Close"
                onClick={() => setShowOsModal(false)}
              >
                <X size={18} />
              </button>

              <div className="os-card-header">
                <span className="os-card-label">Operating System Detected</span>
                <div className="os-card-row">
                  <span className="status-dot" />
                  <span className="os-card-value mono">{os}</span>
                </div>
                <p className="os-card-sub">We've detected you are using: <strong>{os}</strong></p>
              </div>
              {confirmed === null && (
                <div className="os-card-body">
                  <p className="os-card-question">Is this correct?</p>
                  <div className="os-card-actions">
                    <button className="btn btn-primary btn-sm" onClick={handleYesContinue}>
                      <CheckCircle2 size={15} /> Yes, Continue to Setup
                    </button>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={handleChooseManually}
                    >
                      No, Let me choose
                    </button>
                  </div>
                </div>
              )}
              {confirmed === true && (
                <motion.p className="os-result success" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <CheckCircle2 size={16} /> Great! Head to <Link to="/diagnose" onClick={() => setShowOsModal(false)}>Diagnose</Link> to find your model.
                </motion.p>
              )}
              {confirmed === false && (
                <motion.p className="os-result" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <AlertCircle size={16} /> Select your system on the <Link to="/diagnose" onClick={() => setShowOsModal(false)}>Diagnose</Link> page.
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ──── STATS ──── */}
      <section className="stats-strip">
        <div className="container stats-grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat-item"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
            >
              <s.icon size={20} className="stat-icon" />
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="container"><FeedLine nodeCount={1} /></div>

      {/* ──── HOW TO INSTALL ──── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Getting Started</span>
            <h2 className="section-title">How to Install Your Printer</h2>
            <p className="section-sub">Follow these three simple steps to connect your device and start printing in minutes.</p>
          </Reveal>
          <div className="steps-row">
            {STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.12}>
                <div className="step-card">
                  <div className="step-num">{step.num}</div>
                  <div className="step-icon"><step.icon size={22} /></div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {i < STEPS.length - 1 && <div className="step-connector" />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="container"><FeedLine nodeCount={3} /></div>

      {/* ──── BRANDS ──── */}
      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Coverage</span>
            <h2 className="section-title">We Cover All Major Brands</h2>
            <p className="section-sub">Official drivers sourced directly from the manufacturers.</p>
          </Reveal>

          {/* brand images   */}
          {/* <div className="brand-grid">
            {BRANDS.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.07}>
                <a href={b.driverUrl} target="_blank" rel="noopener noreferrer" className="brand-card">
                  <img src={b.logoUrl} alt={b.name + " Logo"} className="brand-logo" onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                  <span className="brand-name-fallback" style={{ display: 'none' }}>{b.name}</span>
                  <span className="brand-cta">Official Drivers ↗</span>
                </a>
              </Reveal>
            ))}
          </div> */}

        </div>
      </section>

      {/* ──── CONNECT SEAMLESSLY ──── */}
      <section className="connect-section">
        <div className="connect-bg-pattern" />
        <div className="container connect-grid">
          <Reveal>
            <span className="eyebrow eyebrow-light">Seamless Connection</span>
            <h2 className="section-title light">Connect Your Devices Seamlessly</h2>
            <p className="section-sub light">
              Printing shouldn't be a hassle. Whether you are using a sleek ultra-book, a powerful desktop
              workstation, or a mobile phone, our guided setup helps you install the necessary drivers
              without confusion.
            </p>
            <ul className="connect-list">
              {CONNECT_POINTS.map((p) => (
                <li key={p.text}>
                  <span className="connect-check"><p.icon size={16} /></span>
                  <span>{p.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/setup" className="btn btn-ghost">Find My Model <ArrowRight size={16} /></Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="connect-visual">
              <img
                src="https://fa-trading.com/assets/images/seamless_connection.png"
                alt="Seamless connection setup"
                className="connect-img"
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
              />
              <ConnectFallback />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──── ABOUT ──── */}
      <section className="section">
        <div className="container about-grid">
          <Reveal>
            <span className="eyebrow">About fa-trading</span>
            <h2 className="section-title">Welcome to fa-trading</h2>
            <p className="about-text">
              A printer is a device that has over the years grown to be essential in every office and household.
              Having printed copies can help make documents more vivid and creative. Today everybody can be seen
              using a printer for school projects, presentations and even to create posters and maps.
            </p>
            <p className="about-text" style={{ marginTop: '16px' }}>
              fa-trading is your one-stop solution for seamless printer driver downloads, installation guides,
              and premium technical support across all major brands.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="steps-list-card">
              <h3>How to Proceed with Printer Setup?</h3>
              <ol className="numbered-steps">
                {SETUP_STEPS.map((step, i) => (
                  <li key={i}><span className="step-bullet">{i + 1}</span>{step}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ──── OFFLINE FIX ──── */}
      <section className="offline-section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Common Issues</span>
            <h2 className="section-title">How to Fix Printer Offline Issue?</h2>
            <p className="section-sub">
              If your printer has abruptly stopped working, the printer offline issue is the first thing
              to troubleshoot. Here are quick solutions to get it back online:
            </p>
          </Reveal>
          <div className="offline-grid">
            {OFFLINE_FIXES.map((fix, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="offline-card">
                  <span className="offline-num">0{i + 1}</span>
                  <p>{fix}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="cta-banner">
              <div className="cta-banner-text">
                <h3>Still having trouble?</h3>
                <p>Our support team is available 24/7 to help you get back to printing.</p>
              </div>
              <div className="cta-banner-actions">
                <a href={SITE.phoneHref} className="btn btn-primary"><Phone size={15} />{SITE.phone}</a>
                <Link to="/support" className="btn btn-secondary">Send a Message</Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Phone({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.42 2 2 0 0 1 3.57 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.5a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}



function ConnectFallback() {
  return (
    <svg width="380" height="300" viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <rect x="60" y="180" width="260" height="80" rx="14" fill="#1a3a6b" />
      <rect x="80" y="156" width="220" height="36" rx="7" fill="#1f4480" />
      <rect x="140" y="118" width="100" height="48" rx="5" fill="#0f2847" />
      <circle cx="190" cy="220" r="12" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <path d="M190 118 V70" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 7" />
      <circle cx="190" cy="56" r="26" fill="#10b981" opacity="0.15" />
      <circle cx="190" cy="56" r="12" fill="#10b981" />
      <path d="M110 180 C 110 110, 60 85, 35 92" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 7" />
      <circle cx="28" cy="88" r="18" fill="#3b82f6" opacity="0.18" />
      <path d="M270 180 C 270 110, 320 85, 345 92" stroke="#3b82f6" strokeWidth="2" strokeDasharray="5 7" />
      <circle cx="352" cy="88" r="18" fill="#3b82f6" opacity="0.18" />
    </svg>
  );
}
