import React from "react";
import reviews from './data'
import Testimonial from "./Testimonial";
const App = () => {
  return (<div className="flex flex-col w-[100vw] h-[100vh] items-center justify-center bg-gray-200">
<div className="text-center">
  <h1 className="text-4xl font-bold">Our Testimonials</h1>
  <div className="bg-violet-400 h-[4px] w-1/5 mx-auto mt-1"></div>
</div>
   <Testimonial reviews={reviews}></Testimonial>
</div>);
};

export default App;
