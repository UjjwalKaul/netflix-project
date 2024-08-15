'use client';
import { Button } from '@/components/ui/button';
import { InfoIcon, Play } from 'lucide-react';
import { useState } from 'react';
import PlayVideoModal from './PlayVideoModal';

interface MovieButtonsProps {
  overview: string;
  youtubeUrl: string;
  id: number;
  age: number;
  title: string;
  releaseDate: number;
  duration: number;
}
const MovieButtons = ({
  age,
  duration,
  id,
  overview,
  releaseDate,
  title,
  youtubeUrl,
}: MovieButtonsProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        className="text-lg font-medium">
        <Play className="mr-2 h-4 w-4" />
        Play
      </Button>

      <Button
        onClick={() => {
          setOpen(true);
        }}
        className="text-lg font-medium bg-white/40 hover:bg-white/20 text-white">
        <InfoIcon className="mr-2 h-[1.25rem] w-[1.25rem]" />
        Learn More
      </Button>
      <PlayVideoModal
        age={age}
        duration={duration}
        key={id}
        overview={overview}
        release={releaseDate}
        title={title}
        youtubeUrl={youtubeUrl}
        state={open}
        changeState={setOpen}
      />
    </>
  );
};

export default MovieButtons;
