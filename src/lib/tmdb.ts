import type { Image_Type } from "@prisma/client";

type PosterSizes = 'w92' | 'w154' | 'w185' | 'w342' | 'w500' | 'w780' | 'original';
type BackdropSizes = 'w300' | 'w780' | 'w1280' | 'original';
type StillSizes = 'w92' | 'w185' | 'w300' | 'original';
type ProfileSizes = 'w45' | 'w185' | 'h632' | 'original';
type LogoSizes = 'w45' | 'w92' | 'w154' | 'w185' | 'w300' | 'w500' | 'original';


type ImageSizeParam<T extends Image_Type> = T extends 'POSTER'
	? PosterSizes
	: T extends 'BACKDROP'
	? BackdropSizes
	: T extends 'STILL'
	? StillSizes
	: T extends 'PROFILE'
	? ProfileSizes
	: T extends 'LOGO'
	? LogoSizes
	: never;

export function getImagePath<T extends Image_Type>(path: string, _format?: T, size?: ImageSizeParam<T>): string {
	if (!path) {
		return '';
	}
	const baseUrl = 'https://image.tmdb.org/t/p/';
	const tmp = `${baseUrl}${size}${path}`;
    console.log(tmp);
    return tmp;
}

