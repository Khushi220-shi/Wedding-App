import React from 'react';
import '../App.css';

const Header = () => {
  return (
    <div style={{backgroundColor:'#B4245D', color:'white' ,fontSize:'12px'}}>
      <div>
        <p style={{padding:'10px',fontWeight:400 ,}}>India's Favourite Wedding Planning Platform</p>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
