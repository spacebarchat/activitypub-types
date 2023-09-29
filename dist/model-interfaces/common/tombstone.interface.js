"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectIsTombstone = void 0;
const ObjectIsTombstone = (object) => {
    return object.type == "Tombstone";
};
exports.ObjectIsTombstone = ObjectIsTombstone;
