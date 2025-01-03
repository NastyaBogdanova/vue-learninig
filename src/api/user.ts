import { UserTypes } from '@/enums/user.ts';

const api: string = "http://localhost:3001/api/"

export function getUser(userType: UserTypes) {
    return fetch(`${api}/user/${userType}`)
        .then(response => response.json())
}
export function getAccount(userType: UserTypes) {
    return fetch(`${api}/account/${userType}`)
        .then(response => response.json())
}
