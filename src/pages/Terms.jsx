import LegalPage from "./LegalPage";
import { SITE } from "../config/site";

export default function Terms() {
  return (
    <LegalPage title="Terms & Conditions" updated="June 2026">
      <p>
        These terms govern your use of {SITE.name}. By using this site, you
        agree to the terms below.
      </p>

      <h2>Independent service</h2>
      <p>
        {SITE.name} is an independent provider of printer setup guides and
        troubleshooting support. We are not affiliated with, sponsored by,
        or endorsed by HP, Epson, Canon, Brother, Dell, or any other printer
        manufacturer referenced on this site.
      </p>

      <h2>Use of content</h2>
      <p>
        Guides and troubleshooting steps on this site are provided for
        general informational purposes. We link directly to official
        manufacturer sites for driver downloads and detailed documentation,
        and we encourage you to download software only from those official
        sources.
      </p>

      <h2>No warranty</h2>
      <p>
        We make reasonable efforts to keep guides accurate and current, but
        printer hardware, software, and manufacturer websites change
        frequently. We provide this site "as is" without warranties of any
        kind.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to {SITE.email} or by phone
        at {SITE.phone}.
      </p>
    </LegalPage>
  );
}
