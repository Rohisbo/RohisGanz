const https = require('https');
const sfwEndpoints = ['waifu', 'neko', 'shinobu', 'megumin', 'bully', 'cuddle', 'cry', 'hug', 'awoo', 'kiss', 'lick', 'pat', 'smug', 'bonk', 'yeet', 'blush', 'smile', 'wave', 'highfive', 'handhold', 'nom', 'bite', 'glomp', 'slap', 'kill', 'kick', 'happy', 'wink'];
const nsfwEndpoints = ['waifu', 'neko', 'trap', 'blowjob'];
const types = ['sfw', 'nsfw'];

async function getSFWImage(endpoint) {
	if (!sfwEndpoints.includes(endpoint)) throw new TypeError(`Unknown Endpoint: Specified SFW endpoint not found.`);
	const body = await get(types[0], endpoint);
	if (!body) return console.warn(`API ERROR: There are a problem found while requesting to the api.`);
	return body;
}

async function getNSFWImage(endpoint) {
	if (!nsfwEndpoints.includes(endpoint)) throw new TypeError(`Unknown Endpoint: Specified NSFW endpoint not found.`);
	const body = await get(types[1], endpoint);
	if (!body) return console.warn(`API ERROR: There are a problem found while requesting to the api.`);
	return body;
}

async function get(type, endpoint) {
	if (!endpoint) throw new TypeError(`Failed Endpoint: An endpoint is required to complete the url.`);
	if (typeof endpoint !== 'string') throw new TypeError(`Bad Endpoint: Specified endpoint isn't a valid string endpoint,`)
	
	return new Promise((res, rej) => {
		return https.get(`https://api.waifu.pics/${type}/${endpoint}`, (got) => {
			let data = '';
			got.on('data', (chunk) => {
				data += chunk; 
			});
			got.on('end', () => {
				return res(JSON.parse(data).url)
			})
			got.on('error', (err) => console.error(err))
		}).on('error', (err) => console.log(err));
	})
}

module.exports = { getSFWImage, getNSFWImage };
