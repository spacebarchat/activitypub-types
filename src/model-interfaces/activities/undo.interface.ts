import { APActivity } from "./activity.interface";

export type APUndo = APActivity & { type: "Undo" };

export const ActivityIsUndo = (activity: APActivity): activity is APUndo => {
	return activity.type == "Undo";
};
