// import React from 'react';
// import { connect } from 'react-redux';
// import { changeInput, insert, toggle, remove } from '../modules/todos';
// import Todos from '../components/Todos';

// const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onInsert={insert}
//       onToggle={toggle}
//       onRemove={remove}
//     />
//   );
// };

// export default connect(
//   // 비구조화 할당으로 todos 분리 => state.todos.input 대신 todos.input 사용!
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   // mapDispatchToProps에 해당하는 파라미터를 액션 생성 함수로 이루어진 객체 형태로 넣어주면 connect 함수가 내부적으로 bindActionCreators 작업해줌
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   },
// )(TodosContainer);

// ------ 아래부터 Hooks 사용 ------
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import Todos from '../components/Todos';

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);
