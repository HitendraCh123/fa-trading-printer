import LegalPage from "./LegalPage";
import { SITE } from "../config/site";

export default function Disclaimer() {
  return (
    <LegalPage title="Disclaimer" updated="June 2026">
      <p>
        {SITE.name} is an independent technical support and information
        resource for printer setup and troubleshooting.
      </p>

      <h2>No manufacturer affiliation</h2>
      <p>
        We are not partners, affiliates, agents, or authorized
        representatives of HP, Epson, Canon, Brother, Dell, or any other
        printer manufacturer named on this site. Brand names and logos are
        used solely to help you identify your product and are the property
        of their respective owners.
      </p>

      <h2>Official downloads</h2>
      <p>
        Always download drivers and firmware directly from the
        manufacturer's official website. Links to official driver pages are
        provided throughout this site for that reason.
      </p>

      <h2>No guarantee of outcome</h2>
      <p>
        Troubleshooting guides reflect common, generally recommended steps.
        Results can vary by printer model, operating system, and
        configuration, and we can't guarantee any specific outcome.
      </p>
    </LegalPage>
  );
}
