import { IReviewRating } from 'helpers/general/types';
import { getDecimalValue } from 'helpers/general/utils';

export enum FormItemNames {
  PHOTO = 'photo',
  COMMENT = 'comment',
  RATING_TASTE = 'rating_taste',
  RATING_VISUAL = 'rating_visual',
  RATING_TEXTURE = 'rating_texture',
}

export interface IFormValues {
  [FormItemNames.PHOTO]: string;
  [FormItemNames.COMMENT]: string;
  [FormItemNames.RATING_TASTE]: number;
  [FormItemNames.RATING_VISUAL]: number;
  [FormItemNames.RATING_TEXTURE]: number;
}

export const getRatingPayload = ({
  rating_taste,
  rating_visual,
  rating_texture,
}: Omit<IFormValues, 'photo' | 'comment'>): IReviewRating => ({
  rating_avg: getDecimalValue([rating_taste, rating_visual, rating_texture]),
  taste: rating_taste,
  texture: rating_visual,
  visual: rating_texture,
});
