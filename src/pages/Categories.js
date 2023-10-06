import * as React from 'react';
import Input from "../Components/Input";
import Container from "../Components/Container";
import Button from "../Components/Button";
import Form from "../Components/Form";
import Sidebar from "../Components/Sidebar";
import '../App.css';
const Categories = () => {
  return (
    
     <div className="shopping-list">
      <Sidebar />
      <h1>Categories</h1>
      <ul className='shplist'>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
     </div>
    
    
  );
};


export default Categories;