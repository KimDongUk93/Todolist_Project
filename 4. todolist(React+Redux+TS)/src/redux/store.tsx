import { createStore, combineReducers } from "redux";
import todoList from "./reducers/todoListReducer";

const rootReducer = combineReducers({
    todoList
});

const store = createStore(
    rootReducer
)
//RootState : rootReducer자체를 타입으로 지정하였다.(rootReducer는 결국 state를 반환한다.)
export type RootState = ReturnType<typeof rootReducer>;

export default store