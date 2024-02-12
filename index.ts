import { Artist } from "./class/artist.ts";
import { User } from "./class/user.ts";
import { Song } from "./class/song.ts";
import { Album } from "./class/album";
import { Playlist } from "./class/playlist";
//import LocalImporter from "./LocalImporter";
//import CloudImporter from "./CloudImporter";
//import PlaylistImporter from "./PlaylistImporter";

const artist = new Artist("Muse");
const album = new Album("The 2nd Law", artist, 2012);
const song = new Song("Madness");

album.addTrack(song);

const album2 = new Album("Parachutes", new Artist("Coldplay"), 2000);
album2.addTrack(new Song("Don't Panic"));
album2.addTrack(new Song("Shiver"));
album2.addTrack(new Song("Spies"));
album2.addTrack(new Song("Sparks"));
album2.addTrack(new Song("Yellow"));
album2.addTrack(new Song("Trouble"));
album2.addTrack(new Song("Parachutes"));
album2.addTrack(new Song("High Speed"));
album2.addTrack(new Song("We never change"));
album2.addTrack(new Song("Everything's Not Lost"));

const localPlaylistImporter = new PlaylistImporter(
  new LocalImporter("myPlaylist.txt")
);
// const cloudPlaylistImporter = new PlaylistImporter(
//   new CloudImporter("www.youtube.com")
// );

const localPlaylist: Playlist = localPlaylistImporter.importPlaylist();
const cloudPlaylist: Playlist = cloudPlaylistImporter.importPlaylist();

const user = new User("john123", "password123");

localPlaylist.addAlbum(album);
localPlaylist.addAlbum(album2);

cloudPlaylist.addAlbum(album);
cloudPlaylist.addAlbum(album2);

user.addAlbum(album);
user.addAlbum(album2);

user.addPlaylist(localPlaylist);
user.addPlaylist(cloudPlaylist);

console.log("Getting Playlists...");
user.getPlaylists().forEach((pl) => console.log(pl.name));

console.log("---------------------");

console.log("Getting Albums...");
user
  .getAlbums()
  .forEach((album) => console.log(`${album.title} by ${album.artist.name}`));

console.log("---------------------");
console.log("Getting Songs...");
user.getSongs().forEach((song) => console.log(song.title));

//index.ts 는 다음을 수행합니다 일단은 먼저 artist.ts와 album.ts의 클래스파일들을 작성해주세요

//Track 이라는 클래스는 없다 playlist로 대체하고 나머지 클래스들 playlist, song, user class들 작성해줘