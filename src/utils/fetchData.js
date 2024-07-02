export const exerciseOptions=  {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
        'x-rapidapi-key': 
	}
};
    


export const fetchData=async (url, options) => {
    const response = await fetch(url,options);
    const data=await response.json();

    return data;
}