import { Button } from '@/components/ui/button';
import { Heart, Play } from 'lucide-react';

interface MovieCardProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  time: number;
}
const MovieCard = ({
  title,
  overview,
  movieId,
  watchList,
  watchListId,
  youtubeUrl,
}: MovieCardProps) => {
  return (
    <>
      <button className="-mt-14">
        <Play stroke="#e2e8f0" className="h-20 w-20 mt-16 text-sl" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p>2023</p>
          <p>12+</p>
          <p>1.50h</p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
