import axios from "axios";
import { IBlog } from "./types";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const BlogService = {
  async getAll() {
    const { data }= await axios.get<IBlog[]>(BASE_URL);

    return data;
  },

  async getById(id: string) {
    const { data } = await axios.get<IBlog>(`${BASE_URL}/${id}`);

    return data;
  },
};
