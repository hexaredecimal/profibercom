
import Logo from  "@/assets/logo-blank.png"
import Link from "next/link";

export type MenuItem = {
  label: string;
  href?: string;
  icon?: string;
  children?: MenuItem[];
};

export const menu: MenuItem[] = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        icon: "fas fa-caret-down",
        children: [
            {
                label: "System Design",
                href: "/services",
            },
            {
                label: "System Integration",
                href: "/services",
            },
            {
                label: "Maintenance",
                href: "/services",
            },
            {
                label: "Installation",
                icon: "fas fa-caret-down",
                children: [
                    {
                        label: "Fiber optic",
                        href: "/services",
                    },
                    {
                        label: "Radio (VHF/UHF)",
                        href: "/services",
                    },
                    {
                        label: "Control systems",
                        href: "/services",
                    },
                    {
                        label: "Security",
                        icon: "fas fa-caret-down",
                        children: [
                            { label: "Surveillance", 
                              href: "/services",
                            },
                        ],
                    },
                ],
            },
            {
                label: "Power Systems",
                href: "/services",
            },
        ],
    },

    {
        label: "Products",
        icon: "fas fa-caret-down",
        children: [
            {
                label: "All Products",
                href: "/products",
            },
            {
                label: "Head End Control Unit",
                href: "#",
            },
            {
                label: "PLCs",
                href: "#",
            },
            {
                label: "Flow Metering",
                href: "#",
            },
            {
                label: "Industrial Network Switching",
                href: "#",
            },
            {
                label: "Embedded DVR",
                href: "#",
            },
            {
                label: "Vane Oil Pumps",
                href: "#",
            },
            {
                label: "More",
                children: [
                    {
                        label: "NVR Surveillance",
                        href: "#",
                    },
                    {
                        label: "Speed Switch BSD3000",
                        href: "#",
                    },
                    {
                        label: "Fluid Control",
                        href: "#",
                    },
                    {
                        label: "Industrial Valves",
                        href: "#",
                    },
                ]
            }

        ],
    },
    {
        label: "About",
        href: "/about",
    },

];

export function renderMenu(items: MenuItem[]) {
  return (
    <ul>
      {items.map((item, index) => (
        <li className="nav-link" key={index}>
            <Link href={item.href ?? "#"}>
                {item.label}
                {item.icon && <i className={item.icon}></i>} 
            </Link>

          {item.children && (
            <div className="dropdown">
              {renderSubMenu(item.children)}
            </div>
          )}
        </li>
      ))}
      <div className="arrow"></div>
    </ul>
  );
}

function renderSubMenu(items: MenuItem[]) {
  return (
    <ul>
      {items.map((item, index) => {
        const link = `/products?category=${item.label.split(" ").join("-")}`;
        const url = item.href ?? "#";
        return <li className="dropdown-link" key={index}>
        <Link href={url !== "#" ? url : link}>
            {item.label}
            {item.icon && <i className={item.icon}></i>}
          </Link>

          {item.children && (
            <div className="dropdown second">
              {renderSubMenu(item.children)}
            </div>
          )}
        </li>
      })}
      <div className="arrow"></div>
    </ul>
  );
}

export default function NavigationBar() {
  return (
    <header>
      <div className="container">
        <input type="checkbox" id="check" />

        <Link href="/">
        <div className="logo-container">
          <img src={Logo.src} id="logo_image" />
          <h3 className="logo">
            rofiber<span>com</span>
          </h3>
        </div>
        </Link>

        <div className="nav-btn">
          <div className="nav-links">
            {renderMenu(menu)}
          </div>

          <div className="log-sign">
            <Link href="/contact" className="btn solid">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

