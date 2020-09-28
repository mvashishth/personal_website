import React from 'react';
import "../../Assets/css/blog.css";
import{
	Link
}from 'react-router-dom';
function Blog() {
  return (

 <div>
 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1" style={{height:"5rem"}}>
</div>


{/*Start from here*/}

 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify">
 <div>

<h1 className="blog-heading"><Link to="/Blog1" className="blog-hyperlinks">Why do we use it?</Link></h1>

<h5 className="blog-date">Date: 28 September 2020</h5>
<p className="blog-content">
It is a long established fact that a reader will be distracted by the readable content of a page
 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
 distribution of letters, as opposed to using 'Content here, content here', making it look like readable
  English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
  text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
  have evolved over the years, sometimes by accident, sometimes on purpose.
<Link to="/Blog1" className="blog-hyperlinks" style={{color:'#132743', fontWeight:"bold"}}>[Read More]</Link>
</p>
<span className="blog-tags">Tags: Reddit</span>
</div>
</div>

 <div className="col-lg-6 col-lg-offset-3 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 align-items-center text-justify bottom-scroll">
 <div>

<h1 className="blog-heading"><Link to="/Blog1" className="blog-hyperlinks">Why do we use it?</Link></h1>

<h5 className="blog-date">Date: 28 September 2020</h5>
<p className="blog-content">
It is a long established fact that a reader will be distracted by the readable content of a page
 when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal 
 distribution of letters, as opposed to using 'Content here, content here', making it look like readable
  English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model 
  text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions 
  have evolved over the years, sometimes by accident, sometimes on purpose.
<Link to="/Blog1" className="blog-hyperlinks" style={{color:'#132743', fontWeight:"bold"}}>[Read More]</Link>
</p>
<span className="blog-tags">Tags: Reddit</span>
</div>
</div>













</div>
  );
}

export default Blog;
