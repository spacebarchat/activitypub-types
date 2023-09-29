import { APObject } from "../common/object.interface";
export type APImage = APObject & {
    type: "Image";
};
export declare const ObjectIsImage: (object: APObject) => object is APImage;
