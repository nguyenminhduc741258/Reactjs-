import * as Types from './../actions/typeAction'


  var inintialState = {
    display_name:'',
    display_info:'',
    phone:'',
    avatar:''
  };
  const appReduce = ( state = inintialState , action ) => {
      switch (action.Types) {
          case Types.SHOW_PROFILE : 
          
            return {
              ...state,
          display_name: action.state.display_name, 
          display_info: action.state.display_info,
          phone: action.state.phone,
          avatar: action.state.avatar

            };
          
          default:
            return state;
        }
          
  }

  export default appReduce ;