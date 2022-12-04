// const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
// const INSERT = 'todos/INSERT'; // 새로운 todo 등록
// const TOGGLE = 'todos/TOGGLE'; // todo 체크, 체크 해제
// const REMOVE = 'todos/REMOVE'; // todo 제거

// let id = 3; // todo 예제 객체 두 개를 만들 예정이라 다음에 추가될 항목의 id값을 넣어줌

// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input,
// });

// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// export const toggle = id => ({
//   type: TOGGLE,
//   id,
// });

// export const remove = id => ({
//   type: REMOVE,
//   id,
// });

// const initialState = {
//   input: '',
//   todos: [
//     {
//       id: 1,
//       text: '리덕스 기초 배우는중!',
//       done: true,
//     },
//     {
//       id: 2,
//       text: '리액트에 리덕스 적용하기!',
//       done: false,
//     },
//   ],
// };

// function todos(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         input: action.input,
//       };
//     case INSERT:
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     case TOGGLE:
//       return {
//         ...state,
//         todos: state.todos.map(todo =>
//           todo.id === action.id ? { ...todo, done: !todo.done } : todo,
//         ),
//       };
//     case REMOVE:
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id),
//       };
//     default:
//       return state;
//   }
// }

// export default todos;

// ------ 아래부터 redux-actions 사용 ------
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값을 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 체크, 체크 해제
const REMOVE = 'todos/REMOVE'; // todo 제거

export const changeInput = createAction(CHANGE_INPUT, input => input);

let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우는중!',
      done: true,
    },
    {
      id: 2,
      text: '리액트에 리덕스 적용하기!',
      done: false,
    },
  ],
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
    [INSERT]: (state, { payload: todo }) => ({ ...state, todos: state.todos.concat(todo) }),
    [TOGGLE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      todos: state.todos.filter(todo => todo.id !== id),
    }),
  },
  initialState,
);

export default todos;
