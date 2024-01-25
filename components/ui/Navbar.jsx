import Link from "next/link";
import { ModeToggle } from "./ToggleBtn";

import { GiFilmSpool } from "react-icons/gi";
import { InputWithButton } from "./search";

export default function Navbar() {
    return (
        <header className=" fixed top-0 left-0 w-full z-50 backdrop-blur-sm border-b bg-background/80 py-2">
            <div className=" container ">
                <div className=" flex items-center justify-between py-2 ">
                    <Link
                        href="/"
                        className=" font-semibold text-xl flex items-center"
                    >
                        <GiFilmSpool />{" "}
                        <span className=" text-red-700 ">Yas</span>Flix
                    </Link>

                    <InputWithButton />
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
