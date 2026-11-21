import { ArrowUp } from "lucide-react";
import { site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Made with love, for {site.fullName}.</p>
      <a href="#hero">
        Back to the beginning <ArrowUp size={16} className="ml-2" aria-hidden="true" />
      </a>
    </footer>
  );
}