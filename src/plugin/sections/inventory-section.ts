import { FONT_MEDIUM, FONT_REGULAR } from "../constants";
import type { Inventory } from "../inventory";
import type { Settings, SpecTextRole, Theme } from "../types";

type CreateTextFn = (
  text: string,
  size?: number,
  font?: FontName,
  color?: string,
  role?: SpecTextRole
) => TextNode;

type InventorySectionDeps = {
  createSectionFrame: (title: string, theme: Theme) => FrameNode;
  createText: CreateTextFn;
  createTableRow: (
    columns: Array<{ label: string; width: number }>,
    theme: Theme,
    isHeader: boolean,
    rowIndex?: number
  ) => FrameNode;
  createContentCard: (theme: Theme) => FrameNode;
};

export function createInventorySection(
  inventory: Inventory,
  theme: Theme,
  settings: Settings,
  deps: InventorySectionDeps
) {
  const section = deps.createSectionFrame("Styling Inventory", theme);
  const narrow = settings.multiColumn || (settings.agentReadyData && settings.aiCompactMode);
  const widths = narrow
    ? { name: 132, as: 74, target: 166 }
    : { name: 160, as: 96, target: 180 };

  if (!inventory.hasAny()) {
    section.appendChild(deps.createText("No styles, variables, or tokens detected.", 11, FONT_REGULAR, theme.muted, "muted"));
    return section;
  }

  const categories: Array<[string, string]> = [
    ["variable", "Variables"],
    ["tokens-studio", "Tokens Studio"],
    ["color-style", "Color Styles"],
    ["text-style", "Text Styles"]
  ];

  categories.forEach(([kind, label]) => {
    const items = inventory.list(kind);
    if (items.length === 0) return;

    const card = deps.createContentCard(theme);
    card.appendChild(deps.createText(label, 11, FONT_MEDIUM, theme.text, "label"));

    const header = deps.createTableRow(
      [
        { label: "Name", width: widths.name },
        { label: "Applied as", width: widths.as },
        { label: "Applied to", width: widths.target }
      ],
      theme,
      true
    );
    card.appendChild(header);

    items.forEach((item, index) => {
      const appliedTo = Array.from(item.appliedTo.entries())
        .map(([name, count]) => (count > 1 ? `${name} (${count})` : name))
        .join(", ");
      const row = deps.createTableRow(
        [
          { label: item.name, width: widths.name },
          { label: item.appliedAs, width: widths.as },
          { label: appliedTo, width: widths.target }
        ],
        theme,
        false,
        index
      );
      card.appendChild(row);
    });

    section.appendChild(card);
  });

  return section;
}
