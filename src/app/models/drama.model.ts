import { Comments } from './comments.model';

export class Drama {
    private _id: number;
    private _name: string;
    private _releaseDate: string;
    private _numberSeasons: string;
    private _description: string;
    private _critical: string;
    private _picture: string;
    private _comments: Array<Comments>;
    
    constructor(id, name, releaseDate, numberSeasons, description,critical, picture){
        this._id = id;
        this._name = name;
        this._releaseDate = releaseDate;
        this._numberSeasons = numberSeasons;
        this._description = description;
        this._critical = critical;
        this._picture = picture;
        this._comments = new Array<Comments>();
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    
    public get name(): string {                                
        return this._name;                            
    }
    
    public set name(value: string) {                                
        this._name = value;                            
    }
    
    public get releaseDate(): string {                   
        return this._releaseDate;                
    }
    
    public set releaseDate(value: string) {                    
        this._releaseDate = value;                
    }
    
    public get numberSeasons(): string {
        return this._numberSeasons;
    }
    public set numberSeasons(value: string) {
        this._numberSeasons = value;
    }
    
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    
    public get critical(): string {
        return this._critical;
    }
    public set critical(value: string) {
        this._critical = value;
    }
    
    public get picture(): string {
        return this._picture;
    }
    public set picture(value: string) {
        this._picture = value;
    }
    
    public get comments(): Array<Comments> {
        return this._comments;
    }
    public set comments(value: Array<Comments>) {
        this._comments = value;
    }
    
    
}