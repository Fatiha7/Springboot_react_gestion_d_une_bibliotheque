import axios from "axios";

const LIVRES_API_BASE_URL ="http://localhost:8086/Gestions_Livres";


class LivresService{
    saveLivres(Livres){
        return axios.post(LIVRES_API_BASE_URL,Livres)
    }
    getLivres(){
        return axios.get(LIVRES_API_BASE_URL)
    }
    DeleteLivres(id){
        return axios.delete(LIVRES_API_BASE_URL+"/"+id)
    }
    getLivresById(id){
        return axios.get(LIVRES_API_BASE_URL+"/"+id)
    }
    updateLivres(Livre,id){
        return axios.put(LIVRES_API_BASE_URL+"/"+id,Livre)
    }
}
export default new LivresService();