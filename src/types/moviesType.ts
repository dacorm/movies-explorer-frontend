export interface Thumbnail {
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Small {
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Medium {
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Large {
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: any;
    url: string;
}

export interface Formats {
    thumbnail: Thumbnail;
    small: Small;
    medium: Medium;
    large: Large;
}

export interface Image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string;
    provider: string;
    provider_metadata?: any;
    created_at: Date;
    updated_at: Date;
}

export interface Movies {
    id: number;
    nameRU: string;
    nameEN: string;
    director: string;
    country: string;
    year: string;
    duration: number;
    description: string;
    trailerLink: string;
    created_at: Date;
    updated_at: Date;
    image: Image;
}
