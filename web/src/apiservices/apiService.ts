import ServiceBase from "./serviceBase";
import { ApiResponse, ToDo } from "./types";

class ApiService extends ServiceBase {
  getTodos = async (): Promise<ApiResponse<ToDo[]>> => {
    return this.get("todos");
  };

  updateToDo = async (id: string): Promise<ApiResponse<string>> => {
    return this.put(`todo/${id}`);
  };

  deleteToDo = async (id: string): Promise<ApiResponse<ToDo>> => {
    return this.delete(`todo/${id}`);
  };

  createToDo = async (data: ToDo): Promise<ApiResponse<string>> => {
    return this.post(`todo`, data);
  };
}

const API = new ApiService();

export default API;
