
import { Playlist } from "./playlist";

export class User {
    private playlists: Playlist[] = [];

    addPlaylist(playlist: Playlist): void {
        this.playlists.push(playlist);
    }

    getUserPlaylistsInfo(): string[] {
        return this.playlists.map(playlist => playlist.getPlaylistInfo());
    }
}
