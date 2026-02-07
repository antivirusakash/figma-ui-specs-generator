# Properties

You can enumerate and display visual attribute differences across each element of each variant in a Properties section.

![](https://framerusercontent.com/images/CSOgYeEJKnKYEJaF0wSjkmZJ5c.png?scale-down-to=2048)

## What it includes

- A subsection for each Variant property that has all options defined for it relative to the selected configuration

- A subsection for each Boolean property included in the selected item (for instance and component types) or default instance (for a selected component set)

## How it works

For component instances, the plugin iterates through each property to highlight differences per option. For variant props, the plugin compares a default with each alternative option by traversing layers and comparing relevant attributes of each layer to find and display differences.

Boolean props are simplified displays to highlight the property type, default value, and impacted layers marked with a blue highlight. While nearly all boolean props are associated with a single layer in practice, the list of associated layers scales to potentially list two or more.

## FAQs

**What if variants vary together, such that combinations of two variant properties result in different visual attributes?**

This is referred to as a "compound props" case, where property combinations (such as type and color mode) are required to fully document how styles changes. The plugin's Pro version supports [two way comparisons](./features/two-way.md) to enumerate across each combination of two properties.

![](https://framerusercontent.com/images/d0dIrDsH4r74kA5JvGrTAzwcEhw.png)

**Why does artwork in the Properties section sometimes show "Variant unavailable"?**

This results from the plugin attempting to set properties of a component instance that result in a variant that isn't available in the component set. For example, this message will display if the default instance inspected is set to **hierarchy:primary** and **selected:true**, the plugin sets **hierarchy:tertiary** and the component set doesn't have a variant corresponding to **hierarchy:tertiary** and **selected:true**.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
