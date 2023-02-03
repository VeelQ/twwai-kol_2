import logo from './logo.svg';
import './App.css';

import {Data} from "./components/data";
import { LineChart } from './components/LineChart';

const styles = {
   display: 'flex',
   justifyContent: 'space-between'
};

function App() {


   return (
    <div className="App">
    <div style={styles}>
        <div className="col-2">
            <Data/>
        </div>
        <div className="col-10">
          <LineChart/>
        </div>
    </div>
</div>

   );
}

export default App;
