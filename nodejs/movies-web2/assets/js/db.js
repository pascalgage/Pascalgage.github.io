class Db 
{
    constructor(_url) 
    {
        this.url = _url;
        this.data = [];
    }

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