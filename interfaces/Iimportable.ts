import { Playlist } from "../class/playlist";


export interface IImportable {
    loadPlaylist(): Playlist;
}