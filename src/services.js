import axios from "axios";
export const getColumnData = async (workspace_id) => axios.get(process.env.REACT_APP_LOCAL_API + "/columns/list/" + workspace_id)
export const getFolderData = async (id) => axios.get(process.env.REACT_APP_LOCAL_API + "/folder/list/" +id)
export const getListData = async (workspace_id, id) => axios.get(process.env.REACT_APP_LOCAL_API + "/group/list/" + id + "/" + workspace_id)
export const getWishListData = async (workspace_id) => axios.get(process.env.REACT_APP_LOCAL_API + "/workspace/" + workspace_id)
