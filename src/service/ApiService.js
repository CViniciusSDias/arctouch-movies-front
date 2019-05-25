export class ApiService {
    static #apiUrl = window.location.host.startsWith('localhost') ? 'http://localhost:8080' : 'https://arctouch-api.herokuapp.com';

    static fetchFromApi(path, callback) {
        const url = `${ApiService.#apiUrl}${path}`;

        return fetch(url)
            .then(res => {
                if (!res.ok) throw res;
                return res.json();
            })
            .then(callback)
            .catch(res => {
                if (typeof res.json === 'function') {
                    return res.json();
                }

                return {
                    status_message: res.message
                };
            });
    }
}
