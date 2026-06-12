
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
                {name: "About us", url: "#"},
                {name: "Industries", url: "#"},
                {name: "Clients", url: "#"},
                {name: "Reviews", url: "#"}
            ]
        },
        {
            name: "Services",
            links: [
                {name: "Networking Equipment", url: "#"},
                {name: "Surveillance", url: "#"},
                {name: "Power Systems", url: "#"},
                {name: "About us", url: "#"}
            ]
        },
        {
            name: "Products",
            links: [
                {name: "Vane Oil Pumps", url: "#"},
                {name: "Radio Transmitter", url: "#"},
                {name: "Slack Ropes", url: "#"},
                {name: "More Products", url: "#"}
            ]
        },
        {
            name: "Contact Us",
            links: [
                {name: "Fax", url: "#"},
                {name: "Telephone", url: "#"},
                {name: "Email", url: "#"},
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
                                    return <li key={j}><a href={link2.url}>{link2.name}</a></li>;
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