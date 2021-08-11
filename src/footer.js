import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export function Footer() {
  return (
    <footer className="footer">
      <p>
        Copyright <FontAwesomeIcon icon={faCopyright} /> Your Website 2021
      </p>
    </footer>
  );
}
