import { APObject } from "./object.interface";

export type APArticle = APObject & { type: "Article" };

export const ObjectIsArticle = (object: APObject): object is APArticle => {
	return object.type == "Article";
};
