# Custom typography

You can generate, customize and apply custom text styles to format specification typography.

This feature is only available via the Pro subscription to the EightShapes Specs plugin.

![](https://framerusercontent.com/images/qJl0ueF7mt87IZiya3MiN6CS9as.png)

Example using Salesforce Lightning's community file with custom typography and color.

## How it works

To customize specification formats:

1. Subscribe to the Pro version.
2. In the `Settings` tab's Format section, select `Typography`.

When the plugin runs, it will generate relevant text styles and apply each to your specification output. You can then customize those styles to format current and future specifications.

The plugin looks for local text styles in the file that begin with `EightShapes Spec`. If a text style does not exist, the plugin adds the text style to the local file. As specifications are subsequently produced, each text style is applied to relevant frames throughout the output.

EightShapes Spec text styles in local file:

![](https://framerusercontent.com/images/u3XdCTm3tJSEJvcUxaB26nQdPA.png)

Text style applied to spec output:

![](https://framerusercontent.com/images/jtfi1NkX3AN5QCCPpKt2PTmI3s.png)

For example, if your design system's primary `Font name` is `IBM Plex Sans`, you can update the `Font name` each text style to that font name. Subsequent runs of the plugin that configure the `Spec styling` to `Use local styles` or `Add local styles` will continue to apply these updated text styles to spec outputs.

![](https://framerusercontent.com/images/pmntbfAdcycjWAdRoVGdOfGuB0.png)

## FAQs

**Can I associate spec output styling with other text styles and color styles or color variables in the local file or a library?**

At this time, the plugin does not support mapping styling formats to other preexisting styles in your local file or in a separate library. To support adding this feature, upvote Issue [#39:Map user-generated text and color styles to plugin output](https://github.com/EightShapes/specs-plugin/issues/39).

**Color variables and text styles added by the plugin show up as publishable when I publish my library. Can the plugin hide those by default?**

The Figma plugin API does not yet support setting text styles to `hide from publishing`. However, text styles prepended with `.` are hidden from publishing by default.

Therefore, the Specs plugin is setup to detect existing EightShapes Specs styles that begin with `EightShapes Specs/…` or `.EightShapes Specs /…`, and apply either to specs output.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
