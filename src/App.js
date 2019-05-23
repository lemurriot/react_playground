import React from 'react';
import './App.css';
import Split from './composition/Split';


function App() {
  return (
    <main className="App">
      <Split className="left">
        This is the content for the left split. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ut autem perferendis nam saepe repellendus ipsa consectetur vero quo? Animi placeat excepturi modi exercitationem aliquid tenetur eius necessitatibus voluptatum ipsa.
      </Split>
      <Split className="right">
        This is the content for the right split. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti minus officiis atque voluptatem itaque, aut dolores impedit odio aperiam, obcaecati aspernatur non, odit suscipit. Laborum harum ex similique repudiandae quae?
      </Split>
    </main>
  );
}

export default App;
