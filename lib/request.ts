export async function getApiResponse(sub_url: string) {
	try {
		const url = `${process.env.NEXT_PUBLIC_API_URL}${sub_url}`;
		// log('url:', url);
		const options = {
			method: 'GET',
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
			},
		};

		// log('options:', options);

		const res = await fetch(url, options);
		// log('res:', res);
		const data = res.ok ? await res.json() : Promise.reject(res);
		// log('data:', data);
		return data;
	} catch (error) {
		console.log(error);
		return Promise.reject(error);
	}
}
