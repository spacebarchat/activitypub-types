import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";
export type APGroup = APActor & {
    type: "Group";
};
export declare const ObjectIsGroup: (actor: APObject) => actor is APGroup;
