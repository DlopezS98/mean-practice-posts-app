

export class Posts{
    constructor(values: Posts){
        Object.assign(this, values);
    }
    public id!: string;
    public title!: string;
    public description!: string;
}