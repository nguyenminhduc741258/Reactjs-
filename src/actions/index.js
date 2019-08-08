import axios from "axios";
import * as Types from './typeAction'


export const login = (email, password, isLoading) => {
  return {
    Types : Types.LOGIN,
    email: email,
    password: password ,
    isLoading : isLoading
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
          localStorage.setItem("token", res.data.token);		
          console.log("token",res.data.token);
          dispatch(login(email, password))


        })
        .catch(er  =>{
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
export const getProfile = state => {
  console.log(state);
  return {
      type: Types.GET_PROFILE,
      state
  };
};



export const getProfileRequest = () => {
  return dispatch => {
      var token = localStorage.getItem("token");
      axios({
          method: "post",
          url: "https://terralogic-training.firebaseapp.com/api/get_profile",
          headers: {
              "x-user-token": token
          }
      }).then(res => {
          console.log(res);
          dispatch(getProfile(res.data.data));
      })
  };
}

export const updateProfile = (state) => {
  return {
      type: Types.UPDATE_PROFILE,
      state
  };

}


export const updateProfileRequest = (state) => {
  return dispatch => {
      var token = localStorage.getItem("token");
      console.log("token:", token);
      axios({
          method: "post",
          url: "https://terralogic-training.firebaseapp.com/api/set_profile",
          headers: {
              "x-user-token": token
          },
          data: state
      }).then(res => {
          console.log(res);
          dispatch(updateProfile(res.data.data));
          alert("Update Success!!!");
      })
          .catch(er => {
              alert("Update Failed");
          });
  };
}



export const logout = (state) => {
  return {
      type: Types.LOGOUT,
      state
  };


}


export const logoutRequest = () => {
  return dispatch => {
      var token = localStorage.getItem("token");
      axios({
          method: "post",
          url: "https://terralogic-training.web.app/api/logout",
          headers: {
              "x-user-token": token
          }
      })
          .then(res => {
              console.log('Logout', res);
              dispatch(logout());
              localStorage.clear();

          })
          .catch(er => {
              alert("ERROR");
          });
  };
}
