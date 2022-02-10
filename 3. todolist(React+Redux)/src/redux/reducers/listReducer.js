import { ADD_TO_LIST, GET_TO_LIST, REMOVE_LIST, REMOVE_ALL_LIST, UPDATE_LIST } from "../actionTypes/listActionType";

export const listReducer = (state = [], action) => {
    const listArray = localStorage.getItem("todoList");
    let listParsed = JSON.parse(listArray);
    const text = action.payload;

    switch(action.type){
        case ADD_TO_LIST:
            if(listArray === null){
                localStorage.setItem("todoList", `["${text}"]`);
                
                return {
                    list: [text]
                }
            } else {
                listParsed.push(text);
                const data = JSON.stringify(listParsed);
                localStorage.setItem("todoList", data)

                return {
                    list: listParsed
                }
            }
        case GET_TO_LIST:
            return {
                list: listParsed
            }
        case REMOVE_LIST:
            listParsed.splice(text, 1);
            let data;

            if(listParsed.length === 0){
                localStorage.removeItem("todoList");

                return {
                    list: []
                }
            } else {
                data = JSON.stringify(listParsed);
                localStorage.setItem("todoList", data);

                return {
                    list: listParsed
                }
            }
        case UPDATE_LIST:
            const {id, value} = text;
            listParsed[id] = value;

            const data2 = JSON.stringify(listParsed);
            localStorage.setItem("todoList", data2)

            return {
                list: listParsed
            }
        case REMOVE_ALL_LIST:
            localStorage.removeItem("todoList");

            return {
                list: []
            }
        default : return state
    }
}