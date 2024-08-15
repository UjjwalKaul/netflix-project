import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PlayVideoModalProps {
  title: string;
  overview: string;
  youtubeUrl: string;
  state: boolean;
  changaState: any;
  release: number;
  age: number;
  duration: number;
}
const PlayVideoModal = ({
  title,
  overview,
  youtubeUrl,
  state,
  changaState,
  age,
  release,
  duration,
}: PlayVideoModalProps) => {
  return (
    <Dialog
      open={state}
      onOpenChange={() => {
        changaState(!state);
      }}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription className="line-clamp-3">
            {overview}
          </DialogDescription>
          <div className="flex gap-x-2 items-center">
            <p className="font-normal text-sm">{release}</p>
            <p className="font-normal border py-0.5 px-1 border-gray-200 rounded-sm text-sm">
              {age}+
            </p>
            <p className="font-normal text-sm">{duration}h</p>
          </div>
        </DialogHeader>
        <iframe
          src={youtubeUrl}
          allow="autoplay"
          className="w-full"
          height={250}></iframe>
      </DialogContent>
    </Dialog>
  );
};

export default PlayVideoModal;
