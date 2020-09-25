import React from 'react';
import "../../Assets/css/homepage.css"
import mainimage from "../../Assets/Images/Home/main.jpg"


function Homepage() {
  return (
  	<html>
  	<body>
  	<main style={{zIndex:"10"}} className="homepage-main">
 <div className="col-lg-4 col-lg-offset-4 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center ">
 <img src={mainimage} className="photo" />
 </div>
<div className="col-lg-4 col-lg-offset-4 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify bottom-scroll">
What is Lorem Ipsum?

Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
unknown printer took a galley of type and scrambled it to make a type specimen book. 
It has survived not only five centuries, but also the leap into electronic typesetting, 
remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
sheets containing Lorem Ipsum passages, and more recently with
 desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu
</div>

</main>



</body>
</html>
  );
}

export default Homepage;
