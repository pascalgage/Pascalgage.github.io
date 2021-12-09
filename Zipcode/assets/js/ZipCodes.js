import { Zc } from './Zc.js';

class ZipCodes extends Zc
{
    loadData(){
        return super.loadData().then(data => {
            for(let index in data){
                this.data[index]=new Zc (data[index]);
            }
            return this.data;
        })
    }







}
export { ZipCodes, Zc}