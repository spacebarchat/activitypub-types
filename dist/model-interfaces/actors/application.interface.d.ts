import { APActor } from "./actor.interface";
export type APApplication = APActor & {
    type: "Application";
};
export declare const ActorIsApplication: (actor: APActor) => actor is APApplication;
