import { UserTypes } from '@/enums/user.ts';

const api: string = "http://localhost:3001/api/user/"

export function getUser(userType: UserTypes) {
    return fetch(api + userType)
        .then(response => response.json())
}
