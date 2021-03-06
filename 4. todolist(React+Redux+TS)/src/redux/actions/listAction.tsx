import { GET_LISTS, SET_LIST, REMOVE_LIST, REMOVE_ALL_LIST } from "../types/listTypes";

export const getList = () => {
    //listArray:string | null : localStorage.getItem을 하면 나오는 타입을 정해놈(이건 타입스크립트에서 정해 놓은거같다.)
    const listArray :string | null = localStorage.getItem("todoList");
    let listParsed;

    if(listArray !== null) listParsed = JSON.parse(listArray);

    return {
        type: GET_LISTS,
        payload: listParsed
    }
}
//text:string : InputComp에서 dispatch(setList(text))로 넘어온 text의 타입을 string으로 고정
export const setList = (text:string) => {
    let listArray:string | null = localStorage.getItem("todoList");
    let listParsed;
    
    if(listArray !== null) {
        listParsed = JSON.parse(listArray);
    } else {
        localStorage.setItem("todoList", `[]`);
        const newlistArray = localStorage.getItem("todoList");
        if(newlistArray !== null) listParsed = JSON.parse(newlistArray);
    }
    
    listParsed.push(text);
    const listStringfy = JSON.stringify(listParsed);
    localStorage.setItem("todoList", listStringfy);

    return {
        type: SET_LIST,
        payload: listParsed
    }
}

export const updateList = (index:number, text:string | undefined) => {
    let listArray:string | null = localStorage.getItem("todoList");
    let listParsed;
    
    if(listArray !== null) {
        listParsed = JSON.parse(listArray);
        listParsed[index] = text;
    }
    
    const listStringfy = JSON.stringify(listParsed);
    localStorage.setItem("todoList", listStringfy);

    return {
        type: SET_LIST,
        payload: listParsed
    }
}

export const removeList = (id:number) => {
    const listArray:string | null = localStorage.getItem("todoList");
    let listParsed;
    let data;

    if(listArray !== null) {
        listParsed = JSON.parse(listArray);
        listParsed.splice(id, 1);

        if(listParsed.length === 0){
            localStorage.removeItem("todoList");

            return {
                type: REMOVE_LIST,
                payload: undefined
            }
        } else {
            data = JSON.stringify(listParsed);
            localStorage.setItem("todoList", data);

            return {
                type: REMOVE_LIST,
                payload: listParsed
            }
        }
    }
}

export const removeAllList = () => {
    localStorage.removeItem("todoList");
    
    return {
        type: REMOVE_ALL_LIST,
    }
}