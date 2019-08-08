import * as Types from './../actions/typeAction'


var initialState = {
  display_name: '',
  display_info: '',
  avatar: '',
  phone: '',
}

var appReduce = (state = initialState, action) => {
  switch (action.type) {
      case Types.GET_PROFILE:
          console.log("dataProfile: ", action.state);
          return {
            ...state,
              
              display_info: action.state.display_info,
              phone: action.state.phone,
              display_name: action.state.display_name,
          };

      case Types.UPDATE_PROFILE:
          console.log("data", action.state);
          return {
              ...action.state
          };

      default: return state;

  }

}

export default appReduce;