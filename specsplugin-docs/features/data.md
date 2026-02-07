# Data

![](https://framerusercontent.com/images/I1lbIA7A3C0bLLSp9x4lnk47BD0.png?scale-down-to=1024)

The plugin can produce a Data section that includes specs in JSON format aligned with the structure, models and outcomes of what the plugin produces visually for the Anatomy and Properties sections.

The **Data** feature is available in beta for all subscribers and will likely only be available to paid subscribers once the feature leaves beta.

## Table of contents

- [What it includes](#what-it-includes)
- [How it works](#how-it-works)
- FAQs

## What it includes

The Data section includes specification text content transformed into a JSON structure to be copied and leveraged independently by plugin users.

## How it works

As the plugin traverses artwork to evaluate and compare elements, properties, options, and attributes, those values are added to a JSON structure that's cleaned up and exported into a Figma text frame.

Optionally, users can omit `attributes` from the data.

The JSON model is:

- `anatomy` as an array of elements, each with:
  - `name`
  - `type` (`FRAME`, `TEXT`, …)
  - `instanceOf` (only for instances)
  - `attributes` as an array of property (for instances) or visual (for other types), each with:
    - Any attribute:
      - `value`
        - For variables, it shows a concatenated variable collection and variable name
        - For styles, it shows the style name
        - For hardcoded values, it shows the value
      - `format`, such as `PROPERTY`, `HARDCODED`, `VARIABLE`, or `STYLE`
    - Visual attributes:
      - `key`
      - `systemId` for including the Figma id of a variable or style
      - `rawValue`
    - Property attributes:
      - `propertyName`
- `properties` as an array of props, each with:
  - `name`
  - `type`, such as `VARIANT`, `BOOLEAN`, `TEXT` and `INSTANCE_SWAP`
  - `default`
  - `options` as an array of options, each with:
    - `name`
    - `elements`, with the same model as elements in Anatomy

## FAQs

**Will Layout and Spacing attributes be included?**

These features were out of scope for the initial beta but are under consideration. If these attributes are added, they are expected to be consolidated into the anatomy data.

**Will two-way comparison of properties be supported?**

It is not expected that this feature will be supported by JSON data unless there's strong interest from subscribers.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
