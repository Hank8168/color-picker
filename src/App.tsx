import "bulma/css/bulma.min.css";
import { ColorPicker } from "./ColorPicker/ColorPicker";

export default function App() {
  return (
    <div className="section">
      <div className="container">
        <ColorPicker />
      </div>
    </div>
  );
}
