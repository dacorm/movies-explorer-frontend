export const makeRequest = async (url: string, headers?: RequestInit) => {
    const result = await fetch(url, headers);
    const data = await result.json();
    return data;
};
