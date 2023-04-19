import plugin from "tailwindcss/plugin";

const openVariant = plugin(function ({ addVariant }) {
  addVariant("group-open", ":merge(.group).open &");
});

export default openVariant;
