"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorIsOrganization = void 0;
const ActorIsOrganization = (actor) => {
    return actor.type == "Organization";
};
exports.ActorIsOrganization = ActorIsOrganization;
