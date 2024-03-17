"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const  NavLink  = ({link}) => {
    const pathName = usePathname();

    return (
        <Link className={`${pathName === link.url} relative group`} href={link.url}>
            {link.title}

            <span className={`
            h-[2px] inline-block bg-[#C4552F] dark:bg-dark-secondary 
            absolute left-0 -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${pathName === link.url ? 'w-full' : 'w-0'}
             `}>
                &nbsp;
            </span>
        </Link>
    )
}

export default NavLink