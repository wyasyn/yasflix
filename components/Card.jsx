import Image from "next/image";
import Link from "next/link";
const BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default function Card({ item }) {
    return (
        <Link
            href={`/movies/${item.id}`}
            key={item.id}
            className=" max-w-[220px] hover:translate-y-[-20px] transition-all shadow-md "
        >
            <div className=" w-full overflow-hidden rounded-md relative">
                <Image
                    src={BASE_URL + item.poster_path}
                    alt={item?.title}
                    width={600}
                    height={800}
                    className=" w-full h-full object-cover "
                />
                <div className=" absolute bottom-0 left-0 w-full p-4 z-10 backdrop-blur-sm bg-background/50 ">
                    <small className="text-sm font-medium leading-none">
                        {item?.title}
                    </small>
                </div>
            </div>
        </Link>
    );
}
