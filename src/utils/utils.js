const URL = (num) => `https://jsonplaceholder.typicode.com/users/${num}`

export const loadUser = async (num = '1') => {
    const data = await fetch(URL(num));
    const json = await data.json();
    return json;
}

export const loadAllUsers = async () => {
    const data = await fetch(URL());
    const json = await data.json();
    return json;
}