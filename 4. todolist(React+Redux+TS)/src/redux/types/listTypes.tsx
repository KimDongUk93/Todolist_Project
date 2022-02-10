export const GET_LISTS = "GET_LISTS";
export const SET_LIST = "SET_LIST";
export const REMOVE_ALL_LIST = "REMOVE_ALL_LIST";

export interface ListStateType {
  lists: Array<string>;
}

export interface TodoListPropsType {
  item: string;
  index: number;
}

interface GetListActionType {
  type: typeof GET_LISTS;
  payload: Array<string>;
}

interface SetListActionType {
  type: typeof SET_LIST;
  payload: Array<string>;
}

interface RemoveAllActionType {
  type: typeof REMOVE_ALL_LIST;
  payload: Array<string>;
}

export type ListActionTypes =
  | GetListActionType
  | SetListActionType
  | RemoveAllActionType;
