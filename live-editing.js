import { registerAstroComponent } from "@cloudcannon/editable-regions/astro";
import "@cloudcannon/editable-regions/astro-react-renderer";

const componentModules = import.meta.glob("./src/components/**/*.astro", { eager: true });

for (const [path, module] of Object.entries(componentModules)) {
  const match = path.match(/\.\/src\/components\/(.+)\.astro$/);
  if (!match) continue;

  const fullPath = match[1];
  const parts = fullPath.split("/");
  const filename = parts[parts.length - 1];
  const parentFolder = parts.length > 1 ? parts[parts.length - 2] : null;

  const kebabFilename = filename.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  const kebabParent = parentFolder ? parentFolder.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase() : null;

  const registrationPath = kebabFilename === kebabParent
    ? parts.slice(0, -1).join("/")
    : parts.slice(0, -1).concat(kebabFilename).join("/");

  const component = module.default?.default ?? module.default;
  if (component) {
    registerAstroComponent(registrationPath, component);
  }
}

export {};
