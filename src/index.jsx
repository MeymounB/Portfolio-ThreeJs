import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    camera={{
      fov: 35,
      near: 0.1,
      far: 2000,
      position: [-3, 1.5, 4],
    }}
  >
    <Experience />
  </Canvas>
);
