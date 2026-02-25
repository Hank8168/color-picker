import "bulma/css/bulma.min.css";
import { ColorPicker } from "./ColorPicker/ColorPicker";

export default function App() {
  return (
    <div className="section">
      <div className="container">
        <input type="color" style={{width: 150, height: 150}} />
        
      </div>
    </div>
  );
}
