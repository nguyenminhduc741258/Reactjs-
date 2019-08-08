import * as Types from './../actions/typeAction'

    var inintialState =  {

        email : '', 
        password :'' ,
        isLoading: false,
        token:''

    }
    const appReduce = ( state = inintialState , action ) => {
        switch (action.Types) {
            case Types.LOGIN : 
            console.log( action.email, action.password, action.token);
            return {
              ...state,
              email :action.state.email,
              password : action.state.password,
              isLoading : true,
              token : action.state.token,
            };

            default:
              return state;
          }
            
    }

    export default appReduce ;