import Link from 'next/link';
import React from 'react';

function Navbar() {

    const links = [
        {url: "/", title: "Home"},
        {url: "/skills", title: "Compétences"},
        {url: "/portfolio", title: "Portfolio"},
        {url: "/contact", title: "Contact"}
    ];

  return (
    <div>
        <div>
            <Link href="">
                {/* Logo */}
            </Link>
        </div>
        <div>
            {/* Menu list */}
            {links.map(link=>(
                <Link href={link.url}>{link.title}</Link>
            ))}
        </div>
        <div>
            {/* Responsive Menu */}
        </div>


    </div>
  )
}

export default Navbar