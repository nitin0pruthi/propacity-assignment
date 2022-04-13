export const getUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
    const responseObj = await response.json();
    return responseObj
}

export const getAlbumns = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/albums', {method: 'GET'})
    const responseObj = await response.json();
    return responseObj
}

export const getUserAlbum = async (userId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`, {method: 'GET'})
    const responseObj = await response.json();

    return responseObj
}

export const getAlbumPhoto = async (albumId) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`, {method: 'GET'})
    const responseObj = await response.json();

    return responseObj
}