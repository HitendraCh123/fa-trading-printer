import LegalPage from "./LegalPage";
import { SITE } from "../config/site";

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p>
        This policy explains what information {SITE.name} collects and how
        it's used.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact details you provide through our support form (name, email, message).</li>
        <li>Basic, anonymized analytics about how visitors use the site.</li>
      </ul>

      <h2>How we use it</h2>
      <p>
        We use the information you submit only to respond to your support
        request. We do not sell or share your personal information with
        third parties for marketing purposes.
      </p>

      <h2>Manufacturer links</h2>
      <p>
        When you follow a link to an official manufacturer site (HP, Epson,
        Canon, Brother, Dell, etc.), that site's own privacy policy applies
        to any information you provide there — we have no access to it.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, reach us at {SITE.email}.
      </p>
    </LegalPage>
  );
}
