const firstName: string = "john";
console.log(firstName);

//Classes
// Artist User Song Album Playlist LocalImporter CloudImporter PlaylistImporter
//  v      
/*
Albums have a title -> needs getter and setter
Albums have an Artist they belong to
Albums have a year they were released
Albums have tracks (songs)

We can add a track to an album
*/

//타입스크립트로 캡슐화된 Artist 클래스 파일 클래스는 이름과 앨범을 가지고있고 메서드로 addAlbum을 가질수있다 혹시모르니깐 getAlbum이랑 getArtist도 메서드로 넣어줘
//타입스크립트로 캡슐화된 user 클래스, Album은 title을 갖고 (getter와 setter가 필요함) 또 , Albums have an Artist they belong to, Albums have a year they were released, Albums have tracks (songs)


// 사용 예제
//const artist = new Artist("BTS");
// 앨범 추가
//artist.addAlbum("BTS's album");
// 아티스트 이름 조회
//console.log(`Artist: ${artist.getArtist()}`);
// 앨범 조회
//console.log(`Albums: ${artist.getAlbums().join(", ")}`);

/*
// User.ts

class User {
    private albums: Album[] = [];

    addAlbum(album: Album): void {
        this.albums.push(album);
    }

    getAlbums(): Album[] {
        return this.albums;
    }
}

// 사용 예제
const artist = new Artist("BTS");
const album = new Album("BE", artist, 2020);
album.addTrack(new Track("Life Goes On", "3:27"));
album.addTrack(new Track("Fly To My Room", "3:42"));

const user = new User();
user.addAlbum(album);

console.log(user.getAlbums().map(a => a.getAlbumInfo()));

*/