import { APActor } from "./actor.interface";
export type APService = APActor & {
    type: "Service";
};
export declare const ActorIsService: (actor: APActor) => actor is APService;
