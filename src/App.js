import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

function App() {
  return (
    <div className="App">
      <h1>리덕스 프로젝트 만들기</h1>
      <CounterContainer />
      <br />
      <br />
      <TodosContainer />
    </div>
  );
}

export default App;
