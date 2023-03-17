import { create } from "@storybook/theming";
import nitrozenIcon from "../src/assets/nitrozen.png";
export default create({
  base: "light",
  brandTitle: "Nitrozen",
  brandUrl: "https://fyndreact.github.io/nitrozen/",
  brandImage: nitrozenIcon,
  brandTarget: "https://fyndreact.github.io/nitrozen/",
  fontBase: "Inter, Helvetica",
  colorPrimary: "black",

  colorSecondary: "#9F38FF",
  barTextColor: "silver",
  barSelectedColor: "white",
  barBg: "linear-gradient(109.8deg, #9F38FF 0%, #2E31BE 100%)",
});
