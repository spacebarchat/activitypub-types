import { ObjectField, RelationshipField, SubjectField } from "../../fields";
import { APObject } from "./object.interface";

export interface APRelationship extends APObject {
	type: "Relationship";

	/**
	 * On a Relationship object, the subject property identifies one of the connected individuals.
	 * For instance, for a Relationship object describing "John is related to Sally",
	 * subject would refer to John.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#subject Docs}
	 */
	subject?: SubjectField;

	/**
	 * When used within a Relationship describes the entity to which the subject is related.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#object Docs}
	 */
	object?: ObjectField | ObjectField[];

	/**
	 * On a Relationship object, the relationship property
	 * identifies the kind of relationship that exists between subject and object.
	 *
	 * {@link https://www.w3.org/ns/activitystreams#relationship Docs}
	 */
	relationship?: RelationshipField;
}

export const ObjectIsRelationship = (
	object: APObject,
): object is APRelationship => {
	return object.type == "Relationship";
};
