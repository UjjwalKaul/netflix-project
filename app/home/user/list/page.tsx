import { authOptions } from '@/app/utils/auth';
import prisma from '@/app/utils/db';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import MovieCard from '@/app/components/MovieCard';

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });

  // Flatten the structure to directly return Movie objects
  return data.map((item) => item.Movie);
}

const WatchList = async () => {
  const session = await getServerSession(authOptions);
  const data = await getData('abc'); // Replace 'abc' with the actual userId from session

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your Watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5 sm:px-0 mt-10 gap-6">
        {data.map((movie) => {
          return (
            <div key={movie.id} className="relative h-60">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={500}
                height={400}
                className="rounded-sm absolute w-full h-full object-cover"
              />
              <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
                <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
                  <Image
                    src={movie.imageString}
                    alt={movie.title}
                    width={800}
                    height={800}
                    className="absolute w-full h-full -z-10 rounded-lg object-cover"
                  />
                  <MovieCard
                    key={movie?.id}
                    age={movie?.age}
                    movieId={movie?.id}
                    overview={movie?.overview}
                    time={movie?.duration}
                    title={movie?.title}
                    watchListId={movie?.WatchLists[0]?.id}
                    watchList={movie?.WatchLists.length > 0 ? true : false}
                    year={movie?.release}
                    youtubeUrl={movie?.youtubeString}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default WatchList;
