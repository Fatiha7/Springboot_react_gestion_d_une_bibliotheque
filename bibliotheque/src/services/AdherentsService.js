import axios from "axios";

const ADHERENTS_API_BASE_URL ="http://localhost:8082/Gestion_Adherents";

class AdherentsService{
    saveAdherents(Adherents){
        return axios.post(ADHERENTS_API_BASE_URL,Adherents)
    }
    getAdherents(){
        return axios.get(ADHERENTS_API_BASE_URL)
    }
    DeleteAdherents(cin){
        return axios.delete(ADHERENTS_API_BASE_URL+"/"+cin)
    }
    getAdherentById(cin){
        return axios.get(ADHERENTS_API_BASE_URL+"/"+cin)
    }
    updateAdherents(Adherent,cin){
        return axios.put(ADHERENTS_API_BASE_URL+"/"+cin,Adherent)
    }
}
export default new AdherentsService();