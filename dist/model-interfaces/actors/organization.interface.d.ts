import { APActor } from "./actor.interface";
export type APOrganization = APActor & {
    type: "Organization";
};
export declare const ActorIsOrganization: (actor: APActor) => actor is APOrganization;
