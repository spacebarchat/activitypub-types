import { APObject } from "../common/object.interface";
export type APDocument = APObject & {
    type: "Document";
};
export declare const ObjectIsDocument: (object: APObject) => object is APDocument;
