# Custom color formats

You can generate, customize and apply custom variables to format specification colors.

This feature is only available via the Pro subscription to the EightShapes Specs plugin.

![](https://framerusercontent.com/images/qJl0ueF7mt87IZiya3MiN6CS9as.png)

Example using Salesforce Lightning's community file with custom typography and color.

## How it works

To customize specification formats:

1. Subscribe to the Pro version.
2. In the `Settings` tab's Format section, select `Color`.

When the plugin runs, it will generate relevant variables and/or text styles and apply each to your specification output. You can then customize those styles and variables to format current and future specifications.

The plugin looks for relevant variables in a variable collection named `EightShapes Specs`. If a color variable does not exist, the plugin adds the variable to the local variable collection. As specifications are subsequently produced, each color is applied to relevant frames and text throughout the output.

![](https://framerusercontent.com/images/7nqjzlmLWIIcH5i993csIzDKAd0.png)

EightShapes Specs variable applied to spec output.

![](https://framerusercontent.com/images/EHtbECT4F7kNlZkwSuhcI2YBOE.png)

Similarly, imagine you would like spec dark mode backgrounds to apply `#1F2328` as the dark mode background color and `#4787DF` as the dark mode spec style and variable pill label color.

![](https://framerusercontent.com/images/JWCwtCmsJdC0VsQwTResgmZYilQ.png)

## FAQs

**Can I associate spec output styling with other text styles and color styles or color variables in the local file or a library?**

At this time, the plugin does not support mapping styling formats to other preexisting styles in your local file or in a separate library. To support adding this feature, upvote Issue [#39:Map user-generated text and color styles to plugin output](https://github.com/EightShapes/specs-plugin/issues/39).

**Color variables and text styles added by the plugin show up as publishable when I publish my library. Can the plugin hide those by default?**

The Figma plugin API does not yet support setting text styles, variables and variable collections to hide from publishing. When the API supports that, the Specs plugin will hide styles and / or variables from publishing by default.

---

The plugin was created by [Nathan Curtis](https://twitter.com/nathanacurtis) with help from [Kevin Powell](https://twitter.com/kevinmpowell). The plugin's origin is described in the Medium articles [The EightShapes Specs Figma Plugin](https://medium.com/eightshapes-llc/the-eightshapes-specs-figma-plugin-2892f21adc96) and [Component Specifications](https://medium.com/eightshapes-llc/component-specifications-1492ca4c94c).

The plugin code is maintained in a [separate, private repository](https://github.com/EightShapes/esds-specs). Please [contact @nathanacurtis](https://x.com/nathanacurtis) for details.

© [Directed Edges, LLC](https://www.directededges.com/) 2024
