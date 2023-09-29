import { APObject } from "../common/object.interface";
export type APVideo = APObject & {
    type: "Video";
};
export declare const ObjectIsVideo: (object: APObject) => object is APVideo;
