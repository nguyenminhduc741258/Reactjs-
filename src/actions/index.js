import axios from "axios";
import * as Types from './typeAction'


export const login = (email, password) => {
  return {
    Types : Types.LOGIN,
    email: email,
		password: password
  };
};

export const loginAPI = (email, password) => {
  return dispatch => {
    axios({
      method: "post",
      url: "https://terralogic-training.web.app/api/login ",
      data: {
          email: email,
          password: password,
         }
      })
        .then(res =>{
          if (res.status >= 200 && res.status < 300) {
            alert(' login Successfully ')
          }
          else 
          {
            alert(' fail login  ')
          }
          console.log(res);
          dispatch(login(email, password))


        })
        .catch(er =>{
          console.log(er);
        });
  };
};
export const register = (email, password) => {
  return {
    Types : Types.REGISTER,
    email: email,
		password: password
  };
};

export const RegisterAPI = ( email , password )=> {
  return dispatch => {
    axios({
      method: "post",
      url: "https://terralogic-training.web.app/api/sign_up ",
      data: {
          email: email,
          password: password,
         }
      })
        .then(res =>{
          if (res.status >= 200 && res.status < 300) {
            alert(' create user Successfully ')
          }
          else
            {
              alert ('user exists')
            }
          console.log(res);
          dispatch(register(email, password))

        })
        .catch(er =>{
          console.log(er);

        });
  };
};
export const showProfile = (state ) => {
  return {
    type: Types.SET_PROFILE,
    state: state,
  };
};
export const Show_ProfileAPI = (state) => {
  return dispatch => {
    var token = localStorage.getItem("token");
    axios({
      method: "post",
      url: "https://terralogic-training.web.app/api/set_profile ",
      headers: {
        "x-user-token": token
      },
      data: state
    })
      .then(res => {
        console.log(res);
        if (res.status >= 200 && res.status < 300) {
          alert(' save user Successfully ')
        }
        dispatch(showProfile(res.data));
       })
      .catch(er => {});
  };
};