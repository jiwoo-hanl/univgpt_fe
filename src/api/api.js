import { instance, instanceWithToken } from "./axios";
// Account 관련 말고 다른 API들 추후 추가해야!
// Account 관련 API들
export const signIn = async (data) => {
    const response = await instance.post("/account/signin/", data);
    if (response.status === 200) {
      window.location.href = "/";
    } else {
      console.log("Error");
    }
  };
  
  export const signUp = async (data) => {
    const response = await instance.post("/account/signup/", data);
    if (response.status === 200) {
      window.location.href = "/";
    }
    return response;
  };