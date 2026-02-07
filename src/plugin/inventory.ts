export class Inventory {
  private items = new Map<
    string,
    {
      kind: string;
      name: string;
      appliedAs: string;
      appliedTo: Map<string, number>;
    }
  >();
  private variableIds = new Set<string>();

  add(kind: string, name: string, appliedAs: string, appliedTo: string) {
    const key = `${kind}::${name}::${appliedAs}`;
    const entry = this.items.get(key) ?? {
      kind,
      name,
      appliedAs,
      appliedTo: new Map<string, number>()
    };
    entry.appliedTo.set(appliedTo, (entry.appliedTo.get(appliedTo) ?? 0) + 1);
    this.items.set(key, entry);
  }

  trackVariable(variableId: string) {
    this.variableIds.add(variableId);
  }

  getVariableIds() {
    return Array.from(this.variableIds);
  }

  list(kind: string) {
    return Array.from(this.items.values()).filter((item) => item.kind === kind);
  }

  hasAny() {
    return this.items.size > 0;
  }
}
