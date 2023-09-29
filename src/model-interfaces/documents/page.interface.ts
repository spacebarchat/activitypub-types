import { APObject } from "../common/object.interface";

export type APPage = APObject & { type: "Page" };

export const ObjectIsPage = (object: APObject): object is APPage => {
	return object.type == "Page";
};
