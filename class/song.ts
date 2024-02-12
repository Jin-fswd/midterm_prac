export class Song {
    private title: string

    constructor(title: string) {
        this.title = title;
    }

    getSongInfo(): string {
        return `${this.title}`;
    }
}