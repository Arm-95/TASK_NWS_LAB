//styles
import './App.scss';

import React,{Suspense,lazy} from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//lazy imports
const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const Home = lazy(() => import('./pages/Home'))

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div>loading...</div>}>
            <Router>
                    <Route path="/" exact component={Home} />
                    <Route path="/category/:id" component={CategoryPage} />
            </Router>
        </Suspense>
    </div>
  );
}

export default App;