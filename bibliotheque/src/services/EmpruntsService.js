import axios from "axios";

const EMPRUNT_API_BASE_URL ="http://localhost:8084/Gestions_Emprunts";
const LIST_DOCUMENT_NONE_LOAN ="http://localhost:8086/Gestions_Documents";

class EmpruntsService{
    saveEmprunt(Emprunts){
        return axios.post(EMPRUNT_API_BASE_URL,Emprunts)
    }
    getEmprunt(){
        return axios.get(EMPRUNT_API_BASE_URL)
    }
    DeleteEmprunt(id_emprunt){
        return axios.delete(EMPRUNT_API_BASE_URL+"/"+id_emprunt)
    }
    getEmpruntById(id_emprunt){
        return axios.get(EMPRUNT_API_BASE_URL+"/"+id_emprunt)
    }
    updateEmprunt(Emprunt,id_emprunt){
        return axios.put(EMPRUNT_API_BASE_URL+"/"+id_emprunt,Emprunt)
    }
    getListDocument(){
        return axios.get(LIST_DOCUMENT_NONE_LOAN)
    }
}
export default new EmpruntsService();