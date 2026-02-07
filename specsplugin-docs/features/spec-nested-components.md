# Spec nested components

To ease the specification of [subcomponents and nested components](https://medium.com/eightshapes-llc/subcomponents-753ce9f6600a) encountered, the Spec nested subcomponents setting will add any instance encountered within selected items to also be spec'ed during that plugin run.

![](https://framerusercontent.com/images/eVdGn1moSSxh8KsaAMpU80bcmw.png)

The _spec nested components_ feature is only available via the Pro subscription to the EightShapes Specs plugin.

## How it works

1. Navigate to the plugin **Settings** tab.
2. Set the **Spec nested subcomponents** toggle to active.

## Examples

The first spec run (on the left, set to [Dark mode](https://github.com/EightShapes/specs-plugin/blob/main/docs/pro-features/dark-mode.md)) did not include nested components, resulting in only the specification of `Button`. The second spec run (on the right, set to light mode) set **Spec nested subcomponents** to active, resulting in the `Icon` and `Icon art asset` components also being included.

## FAQs

**Will all nested components of a detected nested instance be spec'ed?**

Not necessarily. Only nested instances of the _original selected item_ will be spec'ed. If a nested instance has other variants with other nested components within that, those many not be included.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
