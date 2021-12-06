import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'b9a1dce4ccmsh750ae6fd20fcaaap1ad8fajsn135a21ffe1e2'
        }
    })

    return data;
};