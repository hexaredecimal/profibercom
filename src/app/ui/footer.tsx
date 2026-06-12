
type FooterItem = {
    name: string, 
    url: string
};

type FooterCol = {
    name: string,
    links: FooterItem[]
}

export default function Footer() {
    const footerlinks : FooterCol[] = [
        {
            name: "Company",
            links: [
                {name: "Home", url: "/"},
                {name: "About us", url: "/about"},
                {name: "Contact", url: "/contact"},
            ]
        },
        {
            name: "Services",
            links: [
                {name: "Networking Equipment", url: "/services"},
                {name: "Surveillance", url: "/services"},
                {name: "Power Systems", url: "/services"},
                {name: "Installation", url: "/services"}
            ]
        },
        {
            name: "Products",
            links: [
                {name: "Vane Oil Pumps", url: "#"},
                {name: "Embedded DVR", url: "#"},
                {name: "Flow Metering", url: "#"},
                {name: "PLCs", url: "#"}
            ]
        },
        {
            name: "Contact Us",
            links: [
                {name: "Tel: 0158801599", url: "tel:0158801599"},
                {name: "admin@profibercom.co.za", url: "admin@profibercom.co.za"},
                {name: "manager@profibercom.co.za", url: "Manager@profibercom.co.za"},
            ]
        }
    ];
    return  <footer className="footer">
  	 <div className="footer-container">
  	 	<div className="row">
            {
                footerlinks.map((link, i) => {
                    return <div className="footer-col" key={i}>
                        <h4>{link.name}</h4>
                        <ul>
                            {
                                link.links.map((link2, j) => { 
                                    const lnk = `/products?category=${link2.name.split(" ").join("-")}`;
                                    const url = link2.url != "#" ? link2.url : lnk;
                                    return <li key={j}><a href={url}>{link2.name}</a></li>;
                                })
                            }
                        </ul>
                    </div>
                })
            }
  	 	</div>
  	 </div>
  </footer>

}