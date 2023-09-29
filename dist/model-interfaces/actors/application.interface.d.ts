import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";
export type APApplication = APActor & {
    type: "Application";
};
export declare const ObjectIsApplication: (actor: APObject) => actor is APApplication;
