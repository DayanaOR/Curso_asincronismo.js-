const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCsRM0YB_dabtEPGPTKo-gcw&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'content-type': 'application/octet-stream',
		'X-RapidAPI-Key': '4ee7398e8cmsh428dc41f8a80d1cp1b5555jsn80a01942e0dd',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
async function fetchData(urlApi){
    const response = await fetch (urlApi, options);
    const data = await response.json();
    return data;  
}
(async () => {
    try {
    	const videos = await fetch(url);
    	let view = `
        
        
        `;
    } catch (error) {
    	console.error(error);
    }
})();


