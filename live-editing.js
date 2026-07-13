import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";
import components from "./src/scripts/register-components";

for (const [key, component] of Object.entries(components)) {
  registerAstroComponent(key, component);
}

export {};
