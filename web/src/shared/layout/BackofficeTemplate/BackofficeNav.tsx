import { Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import links from "./BackofficeNavLinks";

interface IArgsNavBar {
  isFirstActivation: boolean;
}

export default function BackofficeNav({ isFirstActivation }: IArgsNavBar) {
  const navLinks = isFirstActivation
    ? links.filter((item) => item.isHideFirstActivation === false)
    : links;

  return (
    <Nav vertical className="nav flex-column">
      {navLinks.map((item) => (
        <>
          <NavItem
            key={item.url}
            className={`nav-item ${
              window.location.pathname === item.url
                ? "bg-info text-white rounded"
                : ""
            }`}
          >
            <Link
              to={item.url}
              className="nav-link text-dark"
              aria-current="page"
            >
              {item.icon}
              {item.label}
            </Link>
          </NavItem>
        </>
      ))}
    </Nav>
  );
}
