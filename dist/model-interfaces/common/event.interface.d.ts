import { APObject } from "./object.interface";
export type APEvent = APObject & {
    type: "Event";
};
export declare const ObjectIsEvent: (object: APObject) => object is APEvent;
