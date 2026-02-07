# Complete Anatomy and Layout

The plugin detects additional elements and layouts across variants beyond those detected in the selected component and displays each in additional anatomy and layout rows.

![](https://framerusercontent.com/images/iv7wjzAJU4XznT0l3gMJnngAxE.png?scale-down-to=4096)

This feature is only available via the Pro subscription to the EightShapes Specs plugin.

## What is included

When properties are generated, elements and additional layout configurations may be detected in alternatives to the primary variant being annotated. Each will be identified in a successive exhibit, marked in artwork and itemized in relevant attribtes not already displayed in the the Properties section.

## How it works

As the Properties section is generated, each alternative variant is inspected for each property. As variants include distinct elements and layout not already detected, each is inventoried. When the Anatomy and Layout sections are subsequently generated, a row of artwork and annotation is generated for each variant that included one or more additional detected elements.

An element is considered distinct if the combination all following criteria is unique within the inspected frame or component:

1. layer type (such as TEXT or INSTANCE) _and_
2. layer name (such as Settings or Title) _and_
3. layer parent hierarchy (such as Card / Title Lockup / Title) _and_
4. child position of layers at that level of the same type and name

## Examples

- `Card / Title Lockup / Title (TEXT)` is a distinct element from `Card / Title (TEXT)`, since they are at different levels of a layer hierarchy.

- `Card / Actions /` with two children both named `Action item` are considered two distinct elements (think of it as `Action item` (1) and `Action item` (2)

- Consider `Card / Title Lockup / Title (TEXT)` as a first child of `Title Lockup` in variant 1 and `Card / Title Lockup / Title (TEXT)` as a second child in variant 2 (because the first child of `Title Lockup` is an icon instance). Those elements are the _same_ element and would not be included twice in the Anatomy.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
