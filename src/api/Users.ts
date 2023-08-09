import { Invite, TeamMember } from "../interface/User";
import { USERS, INVITE } from "../temp/Temp";

const getUsers = async (): Promise<TeamMember[]> => {
    return USERS as TeamMember[];
}
const getInvites = async (): Promise<Invite[]> => {
    return INVITE as Invite[]
}

export default {
    getUsers,
    getInvites
}