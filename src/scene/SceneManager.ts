import { SceneManagerNotFindError } from "@/exceptions/SceneManagerNotFindError";
import { GameScene } from "./GameScene";

export class SceneManager {
    private currentSceneId: string;
    private scenes: Map<string, GameScene>;

    private static _instance: SceneManager;

    private constructor(){
        this.scenes = new Map<string, GameScene>();
        this.currentSceneId = "";
    }

    public get sceneId(): string {
        return this.currentSceneId;
    }

    public get size(): number{
        return this.scenes.size;
    }

    public get current(): GameScene{
        if(this.currentSceneId !== ''){
            const scene = this.scenes.get(this.currentSceneId);
            if(scene !== undefined){
                return scene;
            }
            throw new SceneManagerNotFindError();
        }
        const firstKey = this.scenes.keys().next().value;
        if(firstKey === undefined){
            throw new SceneManagerNotFindError();
        }
        const scene = this.scenes.get(firstKey);
        if(scene !== undefined){
            return scene;
        }
        throw new SceneManagerNotFindError();
    }

    public static get Instance(): SceneManager{
        return this._instance || (this._instance = new this());
    }
}