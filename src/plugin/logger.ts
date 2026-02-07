const DEBUG = true;

export const log = (...args: any[]) => {
  if (DEBUG) {
    console.log("[SpecsPlugin]", ...args);
  }
};

export const logError = (...args: any[]) => {
  console.error("[SpecsPlugin]", ...args);
};
