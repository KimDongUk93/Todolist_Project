import { GET_LISTS, SET_LIST, REMOVE_ALL_LIST, ListStateType ,ListActionTypes } from "../types/listTypes";
//ListStateType : store.todoList의 초기값의 상태값을 정해놓은 타입, Array<string>으로 정했다.
const initialState: ListStateType = {
    lists: []
}
//store.todoList의 결과 역시 lists: Array<string>를 반환하도록 세팅
//ListActionType : 각 액션별로 다른 형태의 payload들이 들어올 수 있기때문에 여러개의 타입을 하나로 묶은 타입을 만들어 지정했다.
const todoList = (state = initialState, action:ListActionTypes):ListStateType => {
    switch(action.type){
        case GET_LISTS :
            return {
                lists: action.payload
            }
        case SET_LIST :
            return {
                lists: action.payload
            }
        case REMOVE_ALL_LIST :
            return {
                lists: []
            }
        default: return state;
    }
}

export default todoList;