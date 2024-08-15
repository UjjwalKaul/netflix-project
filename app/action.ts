'use server';
import { revalidatePath } from 'next/cache';
import prisma from './utils/db';

export async function addToWatchList(formData: FormData) {
  const movieId = formData.get('movieId');
  const pathname = formData.get('pathname') as string;
  const data = await prisma.watchList.create({
    data: {
      userId: 'abc',
      movieId: Number(movieId),
    },
  });
  revalidatePath(pathname);
}

export async function deleteFromWatchList(formData: FormData) {
  const watchlistId = formData.get('watchlistId') as string;
  const pathname = formData.get('pathname') as string;
  const data = await prisma.watchList.delete({
    where: {
      id: watchlistId,
    },
  });
  revalidatePath(pathname);
}
