import axios from "axios";
import ITutorialData from "../types/Tutorial";


const getAll = () => {
  return axios
    .get<Array<ITutorialData>>('http://127.0.0.1:8000/tutorials/')
};

const get = (id: any) => {
  return axios
    .get<ITutorialData>(`http://127.0.0.1:8000/tutorials/${id}`)
};

const create = (data: ITutorialData) => {
  return axios
    .post<ITutorialData>(`http://127.0.0.1:8000/tutorials/`, {
      title: data.title,
      description: data.description,
    })
};

const update = (id: any, data: ITutorialData) => {
  return axios
    .put<any>(`http://127.0.0.1:8000/tutorials/${id}/`, {
      id: data.id,
      title: data.title,
      description: data.description,
      published: data.published
    })
};

const remove = (id: any) => {
  return axios
    .delete<any>(`http://127.0.0.1:8000/tutorials/${id}/`)
};

const removeAll = () => {
  return axios
    .delete<any>(`http://127.0.0.1:8000/tutorials/`)
};

const findByTitle = (title: string) => {
  return axios 
    .get<Array<ITutorialData>>(`http://127.0.0.1:8000/tutorials?title=${title}}`)
};

const TutorialDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle,
};

export default TutorialDataService;