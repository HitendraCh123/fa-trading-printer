import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wifi, Cable, RefreshCcw, FileWarning, Settings2, ChevronDown, ExternalLink, ArrowRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { BRANDS } from "../config/site";
import "../assets/css/Diagnose.css";

const ISSUES = [
  {
    icon: Wifi,
    title: "Printer is Offline",
    summary: "Your computer shows the printer as offline and won't print.",
    steps: [
      "Check if the printer is turned on and not in sleep mode.",
      "Verify the WiFi connection. Print a Network Configuration Page from the printer's screen.",
      "Restart both the printer and the computer.",
      "Update the printer firmware and reinstall the driver.",
    ],
  },
  {
    icon: FileWarning,
    title: "Paper Jams",
    summary: "The printer has stopped feeding paper or paper is stuck inside.",
    steps: [
      "Turn off the printer completely before pulling paper.",
      "Open all access doors (rear, front, and cartridge areas).",
      "Gently pull the paper out straight to avoid tearing.",
      "Ensure the paper loaded in the tray is aligned and not overfilled.",
    ],
  },
  {
    icon: Settings2,
    title: "Poor Print Quality",
    summary: "Faded prints, streaks, blank pages, or missing colors.",
    steps: [
      "Check ink or toner levels. Replace cartridges if extremely low.",
      "Run the 'Clean Printhead' or 'Nozzle Check' utility from the printer software.",
      "Ensure you are using the correct paper type in the driver settings.",
      "Remove the cartridge and gently wipe the contacts with a lint-free cloth.",
    ],
  },
  {
    icon: Cable,
    title: "Won't Connect via USB",
    summary: "The computer does not recognize the printer when plugged in.",
    steps: [
      "Try a different USB port directly on the computer (avoid USB hubs).",
      "Try using a different USB cable.",
      "Ensure you download the driver software before plugging in the USB cable.",
    ],
  },
];

export default function Diagnose() {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-orb" />
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="eyebrow">Diagnose</span>
            <h1 className="page-title">Diagnose Printer Issues</h1>
            <p className="page-sub">Find quick solutions for the most common printing problems.</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <h2 className="section-heading">Select Your Printer Brand</h2>
            <p className="section-sub-sm">Jump to official drivers and support for your specific brand.</p>
          </Reveal>
          <div className="brand-select-grid">
            {BRANDS.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.06}>
                <button
                  className={"brand-select-btn" + (selectedBrand === b.slug ? " active" : "")}
                  onClick={() => setSelectedBrand(selectedBrand === b.slug ? null : b.slug)}
                >
                  <img
                    src={b.logoUrl} alt={b.name}
                    className="brand-select-logo"
                    onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }}
                  />
                  <span className="brand-fallback-name" style={{display:'none'}}>{b.name}</span>
                  <span className="brand-select-label">{b.name}</span>
                </button>
              </Reveal>
            ))}
          </div>

          <AnimatePresence>
            {selectedBrand && (() => {
              const brand = BRANDS.find((b) => b.slug === selectedBrand);
              return (
                <motion.div
                  className="brand-result-card"
                  initial={{ opacity: 0, y: -12, height: 0 }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: -12, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="brand-result-inner">
                    <div>
                      <h3>Official {brand?.name} Drivers &amp; Support</h3>
                      <p>Find official drivers and setup software for <strong>{brand?.name}</strong> printers directly from the manufacturer.</p>
                    </div>
                    <a href={brand?.driverUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      Go to Official Driver Page <ExternalLink size={15} />
                    </a>
                  </div>
                </motion.div>
              );
            })()}
          </AnimatePresence>
        </div>
      </section>

      <section className="section issues-section">
        <div className="container">
          <Reveal>
            <h2 className="section-heading">Common Printer Issues</h2>
            <p className="section-sub-sm">Expand a problem below for step-by-step troubleshooting guidance.</p>
          </Reveal>
          <div className="issue-list">
            {ISSUES.map((issue, i) => {
              const isOpen = openIndex === i;
              return (
                <Reveal key={issue.title} delay={i * 0.06}>
                  <div className="issue-card" data-open={isOpen}>
                    <button className="issue-header" onClick={() => setOpenIndex(isOpen ? null : i)} aria-expanded={isOpen}>
                      <span className="issue-icon"><issue.icon size={20} /></span>
                      <span className="issue-header-text">
                        <span className="issue-title">{issue.title}</span>
                        <span className="issue-summary">{issue.summary}</span>
                      </span>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }} className="issue-chevron">
                        <ChevronDown size={20} />
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="issue-body"
                        >
                          <ul className="issue-steps">
                            {issue.steps.map((step, idx) => (
                              <li key={idx}>
                                <span className="issue-step-num">{idx + 1}</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal>
            <div className="still-stuck">
              <div className="still-stuck-icon"><RefreshCcw size={22} /></div>
              <div>
                <h3>Still having trouble?</h3>
                <p>Our support team is here to help you get your printer sorted out.</p>
              </div>
              <a href="/support" className="btn btn-primary">Contact Support <ArrowRight size={15} /></a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

