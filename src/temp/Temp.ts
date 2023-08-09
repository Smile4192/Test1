import { Invite, TeamMember } from "../interface/User";

export const USERS: TeamMember[] = [{
    id: 1,
    status: 'approved',
    user: {
        id: 1,
        name: 'Joe',
        lastName: 'Bloggs',
        phone: '123456789',
        email: 'joe@gmail.com',
    },
    role: 'Administrator',
}, {
    id: 2,
    status: 'approved',
    user: {
        id: 2,
        name: 'Sarah',
        lastName: 'Connors',
        phone: '123456789',
        email: 'sarah@gmail.com',
    },
    role: 'Administrator',
}, {
    id: 3,
    status: 'invited',
    user: {
        id: 3,
        name: 'Joe',
        lastName: 'Bloggs',
        phone: '+353 1234567',
        email: 'joe@gmail.com',
    },
    role: 'Administrator',
}, {
    id: 4,
    status: 'approved',
    user: {
        id: 4,
        name: 'Joeseph',
        lastName: 'Bloggs',
        phone: '123456789',
        email: 'joeseph@gmail.com',
    },
    role: 'Standard',
}, {
    id: 4,
    status: 'approved',
    user: {
        id: 4,
        name: 'Joeseph',
        lastName: 'Bloggs',
        phone: '123456789',
        email: 'joeseph@gmail.com',
    },
    role: 'Standard',
}, {
    id: 5,
    status: 'approved',
    user: {
        id: 5,
        name: 'Sarah',
        lastName: 'Connors',
        phone: '123456789',
        email: 'sarah@gmail.com',
    },
    role: 'Standard',
}, {
    id: 6,
    status: 'approved',
    user: {
        id: 6,
        name: 'Mathew',
        lastName: 'Murphy',
        phone: '123456789',
        email: 'mathew@gmail.com',
    },
    role: 'Standard',
}, {
    id: 7,
    status: 'approved',
    user: {
        id: 7,
        name: 'Joeseph',
        lastName: 'Bloggs',
        phone: '123456789',
        email: 'joeseph@gmail.com',
    },
    role: 'Standard',
}, {
    id: 8,
    status: 'approved',
    user: {
        id: 8,
        name: 'Sarah',
        lastName: 'Connors',
        phone: '123456789',
        email: 'sarah@gmail.com',
    },
    role: 'Standard',
}, {
    id: 9,
    status: 'approved',
    user: {
        id: 9,
        name: 'Mathew',
        lastName: 'Murphy',
        phone: '123456789',
        email: 'mathew@gmail.com',
    },
    role: 'Standard',
}];

export const INVITE: Invite[] =[
    {
        id: 1,
        phone: "+353 1234567",
        role: "Administrator",
    }
];