import plugin from "tailwindcss/plugin";
import { ModuleGraph } from "vite";

const tableCaption = plugin(function ({ addUtilities }) {
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
    ".caption-top": {
      "caption-side": "top",
    },
  });
});

export default tableCaption;
