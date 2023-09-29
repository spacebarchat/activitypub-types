import { APObject } from "../common/object.interface";
export type APPage = APObject & {
    type: "Page";
};
export declare const ObjectIsPage: (object: APObject) => object is APPage;
