import Counter from './components/Counter';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>리덕스 프로젝트 만들기</h1>
      <Counter number={0} />
      <br />
      <br />
      <Todos />
    </div>
  );
}

export default App;
