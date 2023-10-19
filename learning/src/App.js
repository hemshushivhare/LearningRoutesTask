import Header from "./Header";

import Container from "./Container";
import Category from "./Category";
import Feedbackform from "./Feedbackform";
import Stastics from "./Stastics";

 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>,
        <Container/>,
        
        <Category/>,
        <Stastics/>
        <Feedbackform/>
      </header>
    </div>
  );
}

export default App;
