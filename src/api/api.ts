const api: string = "http://localhost:3001/api/issues"

function getTasksRequest() {
    return fetch(api)
        .then(response => response.json())
}

export { getTasksRequest }