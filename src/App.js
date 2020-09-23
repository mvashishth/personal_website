import React from 'react';
import Header from "./Components/headerComponent/header";
import Footer from "./Components/footerComponent/footer";
import Homepage from "./Components/pages/homepage";
import Blog from "./Components/pages/blog";
import{
	BrowserRouter as Router,
	Route,
	Link
}from 'react-router-dom';

function App() {
  return (
  	<Router>
    <div className="App">
    
    <Header />



    <Route exact path='/' component={Homepage} />
    <Route exact path='/Blog' component={Blog} />





    <Footer />
    </div>
    </Router>
  );
}

export default App;
