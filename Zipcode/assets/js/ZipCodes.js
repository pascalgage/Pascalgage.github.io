import { Zc } from './Zc.js';

class ZipCodes extends Zc
{
    getCommunes(_codepostal){
        return this.data.filter(commune=>commune.codePostal.includes(_codepostal));
    }

    getCommuneByZipcode(_zipcode){
        _zipcode=parseInt(_zipcode);
        return this.data.filter(item=>item.codePostal==_zipcode);
    }






}
export { ZipCodes, Zc}