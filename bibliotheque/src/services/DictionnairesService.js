import axios from "axios";

const DICTIONNAIRE_API_BASE_URL ="http://localhost:8086/Gestions_Dictionnaires";


class DictionnairesService{
    saveDictionnaires(Dictionnaires){
        return axios.post(DICTIONNAIRE_API_BASE_URL,Dictionnaires)
    }
    getDictionnaires(){
        return axios.get(DICTIONNAIRE_API_BASE_URL)
    }
    DeleteDictionnaires(id){
        return axios.delete(DICTIONNAIRE_API_BASE_URL+"/"+id)
    }
    getDictionnairesById(id){
        return axios.get(DICTIONNAIRE_API_BASE_URL+"/"+id)
    }
    updateDictionnaires(Dictionnaire,id){
        return axios.put(DICTIONNAIRE_API_BASE_URL+"/"+id,Dictionnaire)
    }
}
export default new DictionnairesService();