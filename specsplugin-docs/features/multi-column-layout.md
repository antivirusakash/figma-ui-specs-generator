# Multi-column layout

The plugin enables users to arrange specs artwork and content in the [Properties](https://github.com/EightShapes/specs-plugin/blob/main/docs/properties.md), [Modes](https://github.com/EightShapes/specs-plugin/blob/main/docs/pro-features/modes.md) and [Layout](https://github.com/EightShapes/specs-plugin/blob/main/docs/layoutandspacing.md) sections in a vertical stacked or multi-column format.

![](https://framerusercontent.com/images/wKUW0Euav6rxcf2bXGb15nBTlPM.png)

The _Layout columns_ feature is only available via the Pro subscription to the EightShapes Specs plugin.

## What is included

By default, the plugin vertical arranges side-by-side displays of specification content (on the left) and artwork (on the right). Alternatively, you can set the plugin to automate the arrangement of artwork/content combinations into 2, 3, or 4 columns and also resize overall spec width to reflow those columns after specs are generated.

## How it works

When specs are set to layout in two or more columns, the plugin will:

- Generate specification displays as it would for a one column default display
- Identify the max width of artwork and content frames
- Set the mininum width of all artwork frames to match the maximum existing width
- Set the width of all content frames to the maximum content frame width
- Set the width of each section and subsection to enable display of the selected quantity of columns
- Add blank "spacer" exhibits, a common technique in CSS's flexbox, to sustain equal column widths as displays wrap across two or more rows

For sections and subsections that include fewer or more items than the column quantity, commensurate whitespace will remain to the right the last item in the last row.

Once the specs are generated, a user can adjust the width of the `Specification` frame and spec artwork and content will adjust and resize within the layout (such as to show five columns) within reasonable limits.

## Examples

### Three columns, manually resized

You can resize the `Specification` layer and items should adjust the size to fill the space until sufficient space for another column is available.

![](https://framerusercontent.com/images/A7SwZAQVySQ8dqQD1CFyh7EaA.png)

### Manually resized, beyond four columns

You can manually resize the `Specification` layer after specs are generated to show more than four items per row. In this example, the width has been adjusted to show five columns.

This example also demonstrates how boolean properties are grouped to wrap together as a set to save space, and how rows with fewer than five items remain aligned with other rows to leave whitespace to the right.

![](https://framerusercontent.com/images/e53cslNTuvz76jRyRmeZiQmBVFo.png)

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
