# Variable formatting

The plugin will detect, format and compare attribute values mapped to Figma variables.

![](https://framerusercontent.com/images/vAGa9uERj0DSvG6jwkG9Zeun4A.png)

The _Figma variables formatting_ feature is only available via the Pro subscription to the EightShapes Specs plugin.

## What is included

For any variable on a supported attribute, the variable is displayed in a pill format and includes the variable collection name, variable name, and variable raw value. For colors, the pill also includes a square swatch corresponding to the variable hex value.

## How it works

When a supported attribute (like `Fill color` or `Width` or `Item spacing`) of an element (like a frame, instance or text) is set to a Figma variable, the plugin will:

- Display that element in the content for that alternative
- Display that attribute value formatted as a Figma variable

For the Properties section, the plugin compares values of many attributes on every node (layer) of every alternative option in a variant set. When a variable is detected on an attribute, the plugin will distinguish that alternative from others that apply a different variable OR a Tokens Studio token OR a hardcoded value, even if that hardcoded value is the same as the variable's value.

## Examples

![](https://framerusercontent.com/images/ODaiLhTRmcO1IXM5XSQ2swU.png)

Background and text color of a component instance mapped to `Alert/Basic/Background` and `Alert/Basic/Element` variables, respectively, of the `ESDS Color` variable collection

## FAQs

**If both a Figma variable and Tokens studio token studio are encountered, what happens?**

The plugin prioritizes formats – and, when comparing attributes across properties, distinguishes values – in the following order:

- Figma variable
- Figma style (for color, text and effect)
- Tokens Studio token
- Hardcoded value

The plugin will only display an attribute value based on the first format it encounters. When more than one format could be matched, only the first format is considered.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
