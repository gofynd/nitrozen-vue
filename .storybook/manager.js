import { addons } from "@storybook/addons";
import NitrozenTheme from "./NitrozenTheme";
import favicon from "./favicon_io/favicon.ico";
import "./TitleAddon";
addons.setConfig({
  theme: NitrozenTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);
