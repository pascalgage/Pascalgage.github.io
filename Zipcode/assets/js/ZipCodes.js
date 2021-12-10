import { Zc } from './Zc.js';

class ZipCodes extends Zc
{
    getCommunes(_codepostal){
        return this.data.filter(commune=>commune.codePostal.includes(_codepostal));
    }

    getZipCode(_nomCommune){
        
        return this.data.filter(item=>item.nomCommune==_nomCommune);
    }






}
export { ZipCodes, Zc}