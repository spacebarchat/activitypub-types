import { APObject } from "./object.interface";
export type APArticle = APObject & {
    type: "Article";
};
export declare const ObjectIsArticle: (object: APObject) => object is APArticle;
