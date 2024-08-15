import Image from 'next/image';
import prisma from '../utils/db';
async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      WatchLists: true,
      imageString: true,
      videoSource: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 4,
  });
  return data;
}

const RecentlyAdded = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => {
        return (
          <div key={movie.id} className="relative h-48">
            <Image
              width={500}
              height={600}
              src={movie.imageString}
              alt="Thumbnail"
              className="rounded-sm absolute w-full h-full"
            />
          </div>
        );
      })}
    </div>
  );
};

export default RecentlyAdded;
