import { UserTypes } from '@/enums/user.ts';
import { api } from '@/utils/constants.ts';

export function getUser(userType: UserTypes) {
    return fetch(`${api}/user/${userType}`)
        .then(response => response.json())
}
export function getAccount(userType: UserTypes) {
    return fetch(`${api}/account/${userType}`)
        .then(response => response.json())
}
