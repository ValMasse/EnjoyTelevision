export class Comments {
    private _id: number;
    private _date: string;
    private _author: string;
    private _content: string;

    constructor(id, date, author, content) {
        this._id = id;
        this._date = date;
        this._author = author;
        this._content = content;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get date(): string {
        return this._date;
    }
    public set date(value: string) {
        this._date = value;
    }
    public get author(): string {
        return this._author;
    }
    public set author(value: string) {
        this._author = value;
    }

    public get content(): string {
        return this._content;
    }
    public set content(value: string) {
        this._content = value;
    }
}