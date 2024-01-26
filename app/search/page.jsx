import { searchMovie } from "@/lib/requests";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default async function page({ searchParams: { query } }) {
    const movies = await searchMovie(query);
    return (
        <>
            <div className="container mt-[7rem] hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] mb-[10rem]">
                {movies?.map((item) => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
            <div className=" contaiver md:hidden my-[5rem] px-4">
                <Carousel>
                    <CarouselContent>
                        {movies?.map((item) => (
                            <CarouselItem key={item.id}>
                                <Card item={item} />
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
