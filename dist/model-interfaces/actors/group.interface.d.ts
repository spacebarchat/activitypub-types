import { APActor } from "./actor.interface";
export type APGroup = APActor & {
    type: "Group";
};
export declare const ActorIsGroup: (actor: APActor) => actor is APGroup;
