

export const todoReducer = (initialState = [], action) => {

  switch (action.type) {
    // throw new Error('Actin.type = ABC no esta implemtado');
    case '[TODO] Add Todo':
      return  [
        ...initialState,
        action.payload
      ];
    case '[TODO Remove Todo]':
      return initialState.filter(todo => todo.id !== action.payload);

    case '[TODO Toggle Todo]':
      return initialState.map(resp => {
        if( resp.id === action.payload ){
          return {
            ...resp,
            done: !resp.done
          }
        }

        return resp;
      });

    default:
      return initialState
  }

}
