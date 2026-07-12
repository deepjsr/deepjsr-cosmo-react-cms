// Client-side bootstrap for CloudCannon's editable regions.
//
// The Visual Editor renders each content block in the browser by looking up
// `window.cc_components[block._name]`. That registry is empty unless we
// populate it, so every block is registered here via `registerAstroComponent`.
// The React renderer is registered too (side-effect import) so the
// `Countdown` (and any other React) component can be re-rendered client-side.
import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";
import components from "./register-components";

for (const [key, component] of Object.entries(components)) {
  registerAstroComponent(key, component as any);
}
