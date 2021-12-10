import { Zc } from './Zc.js';

class ZipCodes extends Zc
{
    getCommunes(_codepostal){
        return this.data.filter(item=>item.codePostal.includes(_codepostal));
    }

    getByZipCode(_nomCommune){
        
        return this.data.filter(item=>item.nomCommune.includes(_nomCommune));
    }






}
export { ZipCodes, Zc}