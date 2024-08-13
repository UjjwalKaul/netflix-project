import prisma from '../utils/db';

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      release: true,
      duration: true,
      id: true,
      age: true,
    },
  });
  return data;
}
const MovieVideo = async () => {
  const data = await getData();
  return <div>MovieVideo</div>;
};

export default MovieVideo;
