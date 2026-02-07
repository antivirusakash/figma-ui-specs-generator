# Anatomy

![](https://framerusercontent.com/images/4JU4YST1nUUADCK2gKOK7J0cLsE.png?scale-down-to=2048)

You can annotate and display visual attributes of each element within an Anatomy section.

## Table of contents

- [What it includes](#what-it-includes)
- [How it works](#how-it-works)
- [Examples](#examples)

## What it includes

The Anatomy section includes:

1. An itemized element list (the "content") that can include:

   - All text, line, polygon, star, rectangle, and similar layers encountered
   - All frame layers to which relevant attributes are associated
   - All nested component instances, but _not_ any children layers within those nested instances

2. A frame (the "artwork) that includes a cloned version of the selected item and annotated markers associating each element with the enumerated item in the list

Relevant content can include:

- Element name
- Element Figma layer type (indicated by an icon)
- Dependency ("Depends on"), associating a nested instance with it's origin component
- Visual attributes, such as `background color`, `width` and `opacity`, that – if Properties is also produced – are limited to those that do not vary across property options
- Configured property values of nested instances

## How it works

To produce the anatomy, the plugin traverses the node's layers to itemize and mark text, instances, and other shapes as elements.

Each itemized component is enumerated in the content, with instances highlighting dependency name and relevant prop values and other nodes reflecting visual attributes and styles. In the artwork, markers are placed on the periphery, prioritizing the left edge and finding a location on any edge that hasn't already been used.

The plugin stops traversing into a the hierarchy of a component (like Card) when it runs into a nested component (like CardText). Spec authors are encouraged to run the plugin again on each relevant nested component. Refer my writing on Subcomponents for learn more.

The results work for most practical component displays, even if it's not perfect. In extreme cases, components with many sibling elements "cross the streams" (nod to Ghostbusters) of each marker's tail and many components left unmarked. In these cases, spec authors can prune and tailor what markers work best.

## Examples

**Simple anatomy**

The `Button` anatomy includes elements for `Icon`, `Label` and the `DS Button` container (since it has relevant visual attributes applied to it).

![](https://framerusercontent.com/images/F1AzVAfiYXODPHG3eFeh1Jc67pY.png)

**Complete anatomy**

This card-like example has multiple anatomy sections, one for each variant that includes one or more newly detected elements. This [complete anatomy feature](./features/complete-anatomy.md) is available for upgraded subscribers

![](https://framerusercontent.com/images/6sKDvB7BGgDY1xsBSs730ZFPkpQ.png)

**Material modal date picker**

In this extreme example, the Anatomy itemizes every cell of the calendar. As markers surround the date picker in a first ring, the plugin then begins including a second ring of markers slightly offset until those, too, run out of space. For each element, the plugin attempts to place a marker on all four sides in the first ring, then all four sides of the second ring, and then gives up.

![](https://framerusercontent.com/images/WDR4lJEzWFkxOu0S5dh6Qart8.png?scale-down-to=1024)

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
