import { searchMovie } from "@/lib/requests";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default async function page({ searchParams: { query } }) {
    const movies = await searchMovie(query);
    return (
        <>
            <div className="container mt-[7rem] hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] mb-[10rem]">
                {movies.map((item) => (
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
                ))}
            </div>
            <div className=" contaiver md:hidden my-[5rem] px-4">
                <Carousel>
                    <CarouselContent>
                        {movies.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className=" max-w-[220px] shadow-md"
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
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </>
    );
}
