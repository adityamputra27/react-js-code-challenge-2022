import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ColorRenderer from "./01-color-renderer/ColorRenderer";
import DarkMode from "./02-dark-mode/DarkMode";
import FormValidation from "./03-form-validation/FormValidation";
import DocPics from "./04-dog-pics/DocPics";
import ScoreKeeper from "./05-score-keeper/ScoreKeeper";
import ToggleWindowEvent from "./06-window-event/ToggleWindowEvent";
import ColorPicker from "./07-color-picker/ColorPicker";
import PixelArt from "./08-pixel-art/PixelArt";
import SimpleCalculator from "./09-simple-calculator/SimpleCalculator";
import FocusAnInput from "./10-focus-an-input/FocusAnInput";
import ShoppingCart from "./11-shopping-cart/ShoppingCart";
import Home from "./Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-renderer" element={<ColorRenderer />} />
        <Route path="/dark-mode" element={<DarkMode />} />
        <Route path="/form-validation" element={<FormValidation />} />
        <Route path="/doc-pictures" element={<DocPics />} />
        <Route path="/score-keeper" element={<ScoreKeeper />} />
        <Route path="/window-event" element={<ToggleWindowEvent />} />
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/pixel-art" element={<PixelArt />} />
        <Route path="/simple-calculator" element={<SimpleCalculator />} />
        <Route path="/focus-an-input" element={<FocusAnInput />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}
