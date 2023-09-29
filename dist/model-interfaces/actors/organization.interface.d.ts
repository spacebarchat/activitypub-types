import { APObject } from "../common/object.interface";
import { APActor } from "./actor.interface";
export type APOrganization = APActor & {
    type: "Organization";
};
export declare const ObjectIsOrganization: (actor: APObject) => actor is APOrganization;
