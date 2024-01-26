import { getTrendingMovies } from "@/lib/requests";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Card from "@/components/Card";

const BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default async function Home() {
    const trendingMovies = await getTrendingMovies(1);
    const fet = trendingMovies[0];
    const rest = trendingMovies.slice(1);
    return (
        <main>
            <div className="container flex gap-[5rem] flex-col lg:flex-row mt-[7rem] md-[5rem]">
                <div className=" aspect-[3/2] md:aspect-[2/3] overflow-hidden rounded-lg w-full max-w-[400px]">
                    <Image
                        src={BASE_URL + fet.poster_path}
                        alt={fet?.title}
                        width={600}
                        height={800}
                        className=" w-full h-full object-cover object-top "
                    />
                </div>
                <div className=" w-full ">
                    <Badge variant="outline">{fet.media_type}</Badge>

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-4">
                        {fet.title}
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {fet.overview}
                    </p>
                    <Button asChild size="sm" className=" mt-[3rem] ">
                        <Link href={`/movies/${fet.id}`}>Movie Details</Link>
                    </Button>
                </div>
            </div>
            <div className="container mt-[5rem] hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] mb-[10rem]">
                {rest.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <div className=" contaiver md:hidden my-[5rem] px-4">
                <Carousel>
                    <CarouselContent>
                        {rest.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card item={item} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </main>
    );
}
