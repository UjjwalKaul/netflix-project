interface MovieCardProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
}
const MovieCard = ({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
}: MovieCardProps) => {
  return <div>Hello from MovieCard</div>;
};

export default MovieCard;
