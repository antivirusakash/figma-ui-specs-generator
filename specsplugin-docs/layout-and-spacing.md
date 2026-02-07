# Layout and spacing

You can annotate padding, item spacing and other layout attributes and detail values for each layer with Autolayout in a Layout and spacing section.

![](https://framerusercontent.com/images/wd0oQScwd8PGZP8rusN8ibqn2s.png?scale-down-to=4096)

## What it includes

The Layout and Spacing section includes:

- Content that specifies relevant layout attributes
- Visual annotations in artwork overlaid and adjacent to the relevant element layer

Relevant content includes:

- Element name
- Element Figma layer type (indicated by an icon)
- Visual autolayout attributes, such as:
  - `Layout direction`
  - `Layout alignment`
  - `Vertical resizing` (such as `Fixed`, `Hug` and `Fill`)
  - `Horizontal resizing` (such as `Fixed`, `Hug` and `Fill`)
  - `Padding`
  - `Padding left`
  - `Padding top`
  - `Padding right`
  - `Padding bottom`
  - `Item spacing` (sometimes referred to as "gap")

Relevant visual annotations include:

- Element overlay (blue)
- Padding overlay (green)
- Item spacing overlay (orange)
- Padding markers
- Item spacing markers
- Layout direction icon (pointer to the right or down)
- Layout alignment icon (3x3 grid with cell filled to identify alignment, such as "top right")
- Vertical, horizontal and wrapped vertical `Auto` spacing
- Resizing markers, denoting `Fill`, `Fixed` or `Hug`

## How it works

The plugin traverses the item to find any layer configured with Figma autolayout to create an exhibit for that layer.

## FAQs

**Can I choose to simplify annotations to not include so much "marker junk" on the periphery?**

Not all users value markers for attributes like resizing, alignment and direction. A request for [a setting to hide these markings](https://github.com/EightShapes/specs-plugin/issues/79) is in the backlog.

**Can I hide the less important visual annotations for direction, alignment and resizing?**

Yes. Because some customers and their stakeholders (such as developers to which they handoff) don't prefer including these annotations, there's a setting to "Hide outer layout annotations" that omits markers for direction, alignment and resizing.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
