class Db 
{
    /**
     * Load Json data from remote location
     * @param {String} _url the url to fetch
     */
    constructor(_url) 
    {
        this.url = _url;
        this.data = []; // data storage
    }

    /**
     * load data from remote location
     * Data is loaded asynchronously
     * https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch
     */
    loadData() 
    {
        fetch(this.url)
        .then((response) => {
            return response.json();
        }).then((json) => {
            this.data = json.data;
        });
    }
}

export { Db }