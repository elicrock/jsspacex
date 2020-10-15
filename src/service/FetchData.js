export default class FetchData {

	startUrl = 'https://api.spacexdata.com/v4/';

	getResourece = async url => {
		const res = await fetch(url);

		if (!res.ok) {
			throw new Error (`Произошла ошибка ${res.status}`);
		}

		return await res.json();

	};

	getRocket = async () => 
		await this.getResourece(this.startUrl + 'rockets');

	getLaunches = async () => 
		await this.getResourece(this.startUrl + 'launches/past');

	getCompany = async () => 
		await this.getResourece(this.startUrl + 'company');

}