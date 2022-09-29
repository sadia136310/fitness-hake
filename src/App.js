import './App.css';
import Blog from './components/Blog/Blog';

import Fitness from './components/Fitness/Fitness';
import Header from './components/Header/Header';


function App() {
  return (
    <div>
  <Header></Header>
      <Fitness></Fitness>
     
   <Blog></Blog>
    </div>
  );
}

export default App;
