import { IImportable } from "../interfaces/Iimportable";
import { Playlist } from "./playlist"; // 가정: Playlist 클래스가 이미 정의되어 있음
import * as fs from "fs";

export class LocalImporter implements IImportable {
    constructor(private filePath: string) {}

    loadPlaylist(): Playlist {
        // 파일에서 플레이리스트 데이터를 읽기
        const fileContent = fs.readFileSync(this.filePath, "utf8");
        const data = JSON.parse(fileContent);

        // Playlist 객체 생성 및 구성
        const playlist = new Playlist("Imported Playlist");
        data.albums.forEach(album => {
            album.tracks.forEach(track => {
                // Playlist에 각 트랙 추가, 가정: Playlist의 addSong 메소드가 Song 객체를 받는다고 가정
                playlist.addSong(new Song(track, album.name, "3:00")); // 곡 길이는 예시 값
            });
        });

        return playlist;
    }
}
