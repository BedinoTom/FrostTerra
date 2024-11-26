import { Scene } from "@babylonjs/core";
import { SceneManager } from "./SceneManager";
import { Core } from "@/core/Core";

export abstract class GameScene {
    private sceneManager: SceneManager;
    private _scene: Scene;

    constructor(sceneManager: SceneManager, core: Core)
    {
        this.sceneManager = sceneManager;
        this._scene = new Scene(core.Engine);
    }

    abstract init(): void
    abstract update(): void

    public render(): void {
        this._scene.render();
    }
}