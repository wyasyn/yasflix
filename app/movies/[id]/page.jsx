import { Badge } from "@/components/ui/badge";
import { getMovieDetails, getSimilarMovies } from "@/lib/requests";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const BASE_URL = "https://www.themoviedb.org/t/p/w220_and_h330_face";

export default async function page({ params: { id } }) {
    const data = await getMovieDetails(id);
    const rest = await getSimilarMovies(id);
    return (
        <div>
            <div className=" mt-[7rem] mb-[5rem] container flex flex-col lg:flex-row gap-[5rem]">
                <div className=" w-full ">
                    <div className=" aspect-[3/2] md:aspect-[2/3] overflow-hidden rounded-lg w-full max-w-[400px]">
                        <Image
                            src={BASE_URL + data?.backdrop_path}
                            alt={data?.original_title}
                            width={600}
                            height={800}
                            className=" w-full h-full object-cover object-top "
                        />
                    </div>
                </div>

                <div className=" pt-5 ">
                    <div className=" flex gap-4 flex-wrap mb-4 ">
                        {data?.genres.map((item) => (
                            <Badge key={item?.id} variant="outline">
                                {item.name}
                            </Badge>
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                        {data?.tagline}
                    </p>

                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        {data?.original_title}
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6">
                        {data?.overview}
                    </p>
                    <div className="my-6 w-full overflow-y-auto mt-[5rem]">
                        <table className="w-full">
                            <thead>
                                <tr className="m-0 border-t p-0 even:bg-muted">
                                    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                        Logo
                                    </th>
                                    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                        Production Company
                                    </th>
                                    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                                        Country of origin
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.production_companies.map((item) => (
                                    <tr
                                        className="m-0 border-t p-0 even:bg-muted"
                                        key={item.id}
                                    >
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            <Avatar>
                                                <AvatarImage
                                                    src={
                                                        BASE_URL +
                                                        item?.logo_path
                                                    }
                                                />
                                                <AvatarFallback>
                                                    L
                                                </AvatarFallback>
                                            </Avatar>
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            {item.name}
                                        </td>
                                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                                            {item.origin_country}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 container">
                Similar Movies
            </h2>
            <div className="container mt-[5rem] hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[3rem] mb-[10rem]">
                {rest.map((item) => (
                    <Card item={item} key={item.id} />
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
        </div>
    );
}
