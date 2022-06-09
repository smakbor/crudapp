import { toast } from "react-toastify";
import baseURL from "./BASE_URL";

export const getUserAPi = async (dispatch, setIsLoading) => {
  setIsLoading(true);
  try {
    const res = await baseURL.get("/user");
    dispatch({ type: "GET_USER", payload: res.data });
    setIsLoading(false);
  } catch (error) {
    setIsLoading(false);
  }
};

export const addUserApi = async (data, dispatch) => {
  try {
    const res = await baseURL.post("/user", data);
    dispatch({ type: "POST_USER", payload: res.data });
    toast.success("Student Added Successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const editUserApi = async (data, id, dispatch) => {
  try {
    const res = await baseURL.put("/user/" + id, data);
    dispatch({ type: "EDIT_USER", payload: res.data });
    toast.success("Student update Successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};

export const deleteUserApi = async (id, dispatch) => {
  try {
    const res = await baseURL.delete("/user/" + id);
    dispatch({ type: "DELETE_CONTACT", payload: res.data });
    toast.success("Student deleted Successfully!");
  } catch (error) {
    toast.error(error.message);
  }
};
