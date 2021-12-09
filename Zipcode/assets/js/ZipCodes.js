import { Zc } from './Zc.js';

class ZipCodes extends Zc
{
    getCommunes(_codepostal){
        return this.data.filter(commune=>commune.codePostal.includes(_codepostal));
    }







}
export { ZipCodes, Zc}