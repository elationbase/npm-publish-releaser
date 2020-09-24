const StyleDictionary = require("style-dictionary");

console.log("Build started...");
console.log("\n==============================================");

// REGISTER THE CUSTOM TRANFORMS

StyleDictionary.registerTransform({
  name: "size/px",
  type: "value",
  matcher(prop) {
    return (
      prop.attributes.category === "font-size" ||
      prop.attributes.category === "space" ||
      prop.attributes.category === "radius"
    );
  },
  transformer({ value }) {
    const valStg = String(value);
    if (valStg.includes("%")) {
      return value;
    }
    return `${value}px`;
  },
});

StyleDictionary.registerTransform({
  name: "ratio/%",
  type: "value",
  matcher(prop) {
    return prop.group === "ratio";
  },
  transformer(prop) {
    return `${Math.floor(100 * prop.value)}%`;
  },
});

StyleDictionary.registerTransform({
  name: "hexRGB/hexARGB",
  type: "value",
  matcher(prop) {
    return prop.group === "color";
  },
  transformer(prop) {
    // for sake of simplicity, I assume colors are always in the format #xxxxxx
    return prop.value.replace(/^#/, "#FF");
  },
});

StyleDictionary.registerTransform({
  name: "unitless/dp-sp",
  type: "value",
  matcher(prop) {
    return prop.group === "typography" || prop.group === "spacing";
  },
  transformer(prop) {
    // in Android font sizes are expressed in "sp" units
    let unit = prop.group === "typography" ? "sp" : "dp";
    return `${prop.value}${unit}`;
  },
});

StyleDictionary.registerTransform({
  name: "name/squiggle",
  type: "name",
  // notice: if you don't specify a matcher, the transformation will be applied to all the properties
  transformer(prop) {
    return prop.path.join("_");
  },
});

// REGISTER THE CUSTOM TRANFORM GROUPS

StyleDictionary.registerTransformGroup({
  name: "custom/rn",
  transforms: ["name/cti/constant"],
});

StyleDictionary.registerTransformGroup({
  name: "custom/js",
  transforms: [
    "attribute/cti",
    "name/cti/constant",
    "size/px",
    "color/css",
    "time/seconds",
    "ratio/%",
  ],
});

StyleDictionary.registerTransformGroup({
  name: "custom/web",
  transforms: StyleDictionary.transformGroup.scss.concat([
    "size/px",
    "ratio/%",
  ]),
});

StyleDictionary.registerTransformGroup({
  name: "custom/android",
  transforms: ["name/squiggle", "hexRGB/hexARGB", "unitless/dp-sp"],
});

// REGISTER A CUSTOM FORMAT

StyleDictionary.registerFormat({
  name: "custom/android/xml",
  formatter(dictionary) {
    return dictionary.allProperties
      .map(function (prop) {
        return `<item name="${prop.name}">${prop.value}</item>`;
      })
      .join("\n");
  },
});

// APPLY THE CONFIGURATION
// IMPORTANT: the registration of custom transforms
// needs to be done _before_ applying the configuration
const StyleDictionaryExtended = StyleDictionary.extend(
  __dirname + "/config.json"
);

// FINALLY, BUILD ALL THE PLATFORMS
StyleDictionaryExtended.buildAllPlatforms();

console.log("\n==============================================");
console.log("\nBuild completed!");
