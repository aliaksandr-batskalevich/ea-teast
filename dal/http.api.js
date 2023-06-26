class HttpApi {

    _baseURL = 'http://35.192.79.86/api/';

    subscribe(email) {
        const request = new Request(this._baseURL + 'test', {
            method: 'POST',
            body: JSON.stringify({email})
        });

        const promise = fetch(request)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    return Promise.reject(`Error status: ${response.status}`);
                }
            })

        return promise;
    }
}

export default new HttpApi();