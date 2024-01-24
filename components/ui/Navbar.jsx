import { ModeToggle } from "./ToggleBtn";

export default function Navbar() {
    return (
        <header className=" bg-secondary text-secondary-foreground ">
            <div className=" container ">
                <div className=" flex items-center justify-between py-2 ">
                    <h1>Yasyn</h1>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
