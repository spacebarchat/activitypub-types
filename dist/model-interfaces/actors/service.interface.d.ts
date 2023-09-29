import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";
export type APService = APActor & {
    type: "Service";
};
export declare const ObjectIsService: (actor: APObject) => actor is APService;
