import { APActor } from "./actor.interface";
export type APPerson = APActor & {
    type: "Person";
};
export declare const ActorIsPerson: (actor: APActor) => actor is APPerson;
