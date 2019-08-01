import * as Types from './../actions/typeAction'

    var inintialState =  {

        email : '', 
        password :'' ,
        isLoading: false,

    }
    const appReduce = ( state = inintialState , action ) => {
        switch (action.Types) {
            case Types.LOGIN : 
             
              return {
                ...state,
                email: action.email,
                password: action.password,
                isLoading: true,

              };
            
            default:
              return state;
          }
            
    }

    export default appReduce ;