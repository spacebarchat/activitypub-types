import { DescribesField } from "../../fields";
import { APObject } from "./object.interface";

export interface APProfile extends APObject {
	type: "Profile";

	/**
	 * On a Profile object, the describes property identifies
	 * the object described by the Profile.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#describes Docs}
	 */
	describes?: DescribesField;
}

export const ObjectIsProfile = (object: APObject): object is APProfile => {
	return object.type == "Profile";
};
