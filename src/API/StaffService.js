import axios from "axios";

export default class StaffService {
  static async getAll() {
    const response = await axios.get("http://localhost:3000/staff");
    return response;
  }
}
