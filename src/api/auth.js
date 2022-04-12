import client from "./client"

export const login = ({username, password}) => {
    client.post(`/api/v1/users/login`,{username, password})
}

export const register = ({ username, password, name, nickname }) => {
    client.post('/api/v1/users/signup', {username, password, name, nickname})
}

