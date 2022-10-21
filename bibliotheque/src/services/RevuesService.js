import axios from "axios";

const REVUES_API_BASE_URL ="http://localhost:8086/Gestions_Revues";


class RevuesService{
    saveRevues(Revues){
        return axios.post(REVUES_API_BASE_URL,Revues)
    }
    getRevues(){
        return axios.get(REVUES_API_BASE_URL)
    }
    DeleteRevues(id){
        return axios.delete(REVUES_API_BASE_URL+"/"+id)
    }
    getRevuesById(id){
        return axios.get(REVUES_API_BASE_URL+"/"+id)
    }
    updateRevues(Revue,id){
        return axios.put(REVUES_API_BASE_URL+"/"+id,Revue)
    }
}
export default new RevuesService();