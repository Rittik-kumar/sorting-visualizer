import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
      <div className='navbar'>
          <div class="array-inputs">
                <p>Size of the array:</p>
                <input id="a_size" type="range" min='20' max='150' step='1' defaultvalue='80' />
                <p>Speed of the algorithm:</p>
                <input id="a_speed" type="range" min='1' max='5' step='1' defaultvalue='4' />
                <button id="a_generate">Generate New Array!</button>
          </div>

            <div class="header_right">
                <p class="nav-heading">Sorting visualizer</p>

                <div class="algos">
                    <button >Bubble</button>
                    <button >Selection</button>
                    <button >Insertion</button>
                </div>
            </div>
            
      </div>
     


    );
}

export default NavBar;