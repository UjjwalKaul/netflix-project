import prisma from '../utils/db';

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      overview: true,
      title: true,
      imageString: true,
      youtubeString: true,
      age: true,
      release: true,
      duration: true,
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
    <div>
      <p>Hello from Component</p>
    </div>
  );
};

export default RecentlyAdded;
