import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { IoSend } from "react-icons/io5";

const searchMovie = async (formData) => {
    "use server";
    const search = formData.get("search");
    if (!search) {
        redirect("/");
    } else {
        redirect(`/search?query=${search}`);
    }
};

export function InputWithButton() {
    return (
        <form
            className="flex w-full max-w-sm items-center space-x-2"
            action={searchMovie}
        >
            <Input type="search" name="search" placeholder="Search " />
            <Button type="submit" size="sm">
                <IoSend />
                <span className="sr-only">search</span>
            </Button>
        </form>
    );
}
