import { APObject } from "./object.interface";
export type APNote = APObject & {
    type: "Note";
};
export declare const ObjectIsNote: (object: APObject) => object is APNote;
