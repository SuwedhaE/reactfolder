import axios from "axios";

const BASE_API_URL = "http://localhost:8080/api";

class EmpService {

    saveEmployee(emp){
        return axios.post(BASE_API_URL+"/save",emp);
    }
    getAllEmployee(){
        return axios.get(BASE_API_URL+"/");
    }
    getEmployeeById(id){
        return axios.get(BASE_API_URL+"/"+id);
    }
    deleteEmployee(id){
        return axios.get(BASE_API_URL+"/delete/"+id);
    }
    updateEmployee(id, emp){
        return axios.post(BASE_API_URL+"/update/"+id,emp);
    }

}

export default new EmpService(); 