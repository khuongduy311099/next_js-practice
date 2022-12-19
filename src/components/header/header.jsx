import Link from "next/link";
import Image from "next/image";

function Header() {
    return (
        <header>
            <div className="topNav">
                <Image
                    src={"/images/logo.png"}
                    width={50}
                    height={50}
                    alt="logo"
                />
                <nav>
                    <ul>
                        <li>
                            <Link href="">Home </Link>
                        </li>
                        <li>
                            <Link href="/events">Events </Link>
                        </li>
                        <li>
                            <Link href="/aboutUs">About Us </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <h1>Next.js React Framework Course</h1>
        </header>
    );
}

export default Header;
