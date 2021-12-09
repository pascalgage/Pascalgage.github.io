class Zc {

    constructor(_url) {
        this.url = _url;
        this.data = [];
    }

    loadData() {
        return fetch(this.url)
            .then((response) => {
                return response.json();
            }).then((json) => {
                return json.data;
            });
    }
}
export { Zc }