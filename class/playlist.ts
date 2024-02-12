import { Song } from "./song";

export class Playlist {
    private songs: Song[] = [];

    constructor(private name: string) {}

    addSong(song: Song): void {
        this.songs.push(song);
    }

    getPlaylistInfo(): string {
        return `${this.name} Playlist: ` + this.songs.map(song => song.getSongInfo()).join(", ");
    }
}
