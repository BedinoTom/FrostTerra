import { Engine } from "@babylonjs/core";
import { CoreConfig } from "./CoreConfig";
import { SceneManager } from "@/scene/SceneManager";
import { SceneManagerEmptyError } from "@/exceptions/SceneManagerEmptyError";

export class Core{
    private static _instance: Core;

    private engine!: Engine;
    private canvas: HTMLCanvasElement;

    private sceneManager: SceneManager;

    private constructor(){
        // create the canvas html element and attach it to the webpage
        this.canvas = document.createElement("canvas");
        this.canvas.style.width = "100%";
        this.canvas.style.height = "100%";
        this.canvas.id = "gameCanvas";
        document.body.appendChild(this.canvas);

        this.sceneManager = SceneManager.Instance;
    }

    public init(coreConfig: CoreConfig): void {
        this.engine = new Engine(this.canvas, coreConfig.AntiAliasing);
    }

    public isInit(): boolean {
        return this.engine !== undefined && this.canvas !== undefined;
    }

    public get Engine(): Engine{
        return this.engine;
    }

    public static get Instance(): Core{
        return this._instance || (this._instance = new this());
    }

    public run(): void{
        if(this.sceneManager.size <= 0){
            throw new SceneManagerEmptyError();
        }
        // run the main render loop
        this.engine.runRenderLoop(() => {
            const currentScene = this.sceneManager.current;
            currentScene.update();
            currentScene.render();
        });
    }
}