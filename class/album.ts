import { Artist } from "./artist";
import { Playlist } from "./playlist";
import { Song } from "./song";

export class Album {
    private title: string;
    private artist: Artist;
    private year: number;
    private track: Song[]

    constructor(title:string, artist:Artist, year:number) {
        this.title = title,
        this.artist = artist,
        this.year = year
    }

    getTitle(): string {
        return this.title;
    }

    setTitle(newTitle: string): void {
        this.title = newTitle;
    }

    addTrack(songs: Song): void {
        this.track.push(songs);
    }

    getAlbumInfo(): string {
        return `${this.title} by ${this.artist.getArtistName()}, released in ${this.year}`;
    }
}
