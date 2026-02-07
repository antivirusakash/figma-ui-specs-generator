# Custom value formats

You can control how some values are display in specification outputs.

![](https://framerusercontent.com/images/Z6tAVPqFkuGYqzy2JadFMMP7JY.png?scale-down-to=512)

This feature is only available via the Pro subscription to the EightShapes Specs plugin.

## How it works

To customize how values are formatted in specification outputs:

1. Subscribe to the Pro version.
2. In the `Settings` tab's Format section, select relevant settings to prioritize and format individual values.

When the plugin runs, it will format values accordingly.

### Preferred value: Variable or Token?

When both a [Figma variable](./variables.md) and [Tokens Studio token](./tokens-studio.md) are detected for the same attribute (such as `fill` color) for the same layer (such as a `frame`), you can specify which value to show:

- Variable (default)
- Tokens Studio token

Both values cannot be shown simultaneously.

### Color value format

Raw color values can be displayed in one of two formats:

- `Hex` (default), such as `#FFFFFF`
- `HSLA`, such as `hsla(20, 45%, 74%, 1)`

### Display raw value after styling

When a [Figma variable](./variables.md), [Tokens Studio token](./tokens-studio.md), Figma color style or Figma text style is detected, then a raw value is by default not shown. However, you can set that the raw value is also shown in parentheses following the preferred style).

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
