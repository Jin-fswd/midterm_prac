export class Artist {
    private name: string;
    private albums: string[];
    constructor(name: string) {
        this.name = name;
    }

    getArtistName(): string {
        return this.name;
    }
}

