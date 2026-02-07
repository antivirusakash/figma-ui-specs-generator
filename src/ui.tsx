const rootElement = document.getElementById('app');
const root = rootElement as HTMLElement | null;

const showFatal = (message: string) => {
  if (root) {
    root.textContent = message;
  }
};

const markLoaded = () => {
  (window as any).__specsUiMounted = true;
};

window.addEventListener('error', (event) => {
  showFatal(`UI error: ${event.message || 'Unknown error'}`);
});

window.addEventListener('unhandledrejection', (event) => {
  const reason = event.reason instanceof Error ? event.reason.message : String(event.reason || 'Unknown error');
  showFatal(`UI error: ${reason}`);
});

const boot = async () => {
  if (!root) {
    showFatal('UI error: root element not found.');
    return;
  }
  const module = await import('./ui-app');
  module.mount(root);
  markLoaded();
};

boot().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  showFatal(`UI error: ${message}`);
});

setTimeout(() => {
  if (!(window as any).__specsUiMounted) {
    showFatal('UI failed to load. Please reload the plugin.');
  }
}, 7000);
