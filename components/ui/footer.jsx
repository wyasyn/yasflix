import Link from "next/link";
import { GiFilmSpool } from "react-icons/gi";

import { FiLinkedin, FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

import { FaWhatsapp } from "react-icons/fa";

const myEmail = process.env.MY_EMAIL;
const myPhone = process.env.MY_PHONE;

const data = {
    services: [
        {
            name: "Software Development",
            description:
                "Designing, coding, testing, and maintaining software applications to meet specific user requirements.",
        },
        {
            name: "Algorithm Design",
            description:
                "Creating efficient algorithms and data structures to solve computational problems and optimize processes.",
        },
        {
            name: "System Analysis",
            description:
                "Analyzing and designing complex computer systems to ensure they meet organizational needs and function effectively.",
        },
        {
            name: "Cybersecurity",
            description:
                "Protecting computer systems, networks, and data from security breaches, unauthorized access, and cyber attacks.",
        },
    ],
    contact: [
        {
            name: "github",
            icon: <FiGithub />,
            url: "https://github.com/wyasyn",
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp />,
            url: `https://wa.me/${myPhone}`,
        },
        {
            name: "linkedin",
            icon: <FiLinkedin />,
            url: "https://www.linkedin.com/in/yasin-walum-01b18295/",
        },
        {
            name: "Email",
            icon: <IoMailOutline />,
            url: `mailto:${myEmail}`,
        },
    ],
};

export default function Footer() {
    return (
        <footer className=" bg-secondary text-secondary-foreground py-[5rem] ">
            <div className="container flex flex-col gap-[3rem] items-center md:items-start md:flex-row md:justify-between">
                <div>
                    <Link
                        href="/"
                        className=" font-semibold text-xl flex items-center"
                    >
                        <GiFilmSpool />{" "}
                        <span className=" text-red-700 ">Yas</span>Flix
                    </Link>
                </div>
                <div>
                    <h4 className="scroll-m-20 mb-4 text-md font-semibold tracking-tight">
                        Services
                    </h4>
                    <ul className=" list-none flex flex-col gap-2">
                        {data.services.map((item, i) => (
                            <li className=" text-sm " key={i}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="scroll-m-20 text-md mb-4 font-semibold tracking-tight">
                        Contact
                    </h4>
                    <ul className=" list-none flex flex-col gap-2 capitalize">
                        {data.contact.map((item, i) => (
                            <Link href={item.url} className=" text-sm " key={i}>
                                {item.name}
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    );
}
