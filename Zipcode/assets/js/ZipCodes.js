import { Zc } from './Zc.js';

class ZipCodes extends Zc
{
    giveCommunes(_codepostal){
        return this.data.filter(item=>item.codePostal==_codepostal);
    }

    giveZipCode(_nomCommune){
        
        return this.data.filter(item=>item.nomCommune.includes(_nomCommune));
    }






}
export { ZipCodes, Zc}