const loadF = async () => {
    const serverURL = 'http://localhost:3000/forecastf';
    const response = await fetch(serverURL);
    const data = await response.json();

    return data;
};

export { loadF }