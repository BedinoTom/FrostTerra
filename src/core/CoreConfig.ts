export class CoreConfig {
    private antiAliasing: boolean;

    constructor(antiAliasing: boolean){
        this.antiAliasing = antiAliasing;
    }

    public static Default(): CoreConfig{
        return new this(true);
    }

    public get AntiAliasing(): boolean{
        return this.antiAliasing;
    }
}