import { api } from '@/utils/constants.ts';

export function getTasksRequest() {
    return fetch(`${api}/issues`)
        .then(response => response.json());
}