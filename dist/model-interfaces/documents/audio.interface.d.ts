import { APObject } from "../common/object.interface";
export type APAudio = APObject & {
    type: "Audio";
};
export declare const ObjectIsAudio: (object: APObject) => object is APAudio;
