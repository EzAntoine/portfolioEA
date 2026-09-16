import Link from "next/link"

const NavLink = ({ href, title }) => {
    return(
        <Link
            href={href}
            className="group block py-2 pl-3 pr-4 text whitespace-nowrap"
        >
            <span className="border-b border-transparent transition-colors group-hover:border-lime-500 group-focus-visible:border-lime-500">
                {title}
            </span>
        </Link>
    )
}

export default NavLink;
