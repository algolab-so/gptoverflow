export interface SearchEngine {
  inputQuery: string[]
  bodyQuery: string[]
  sidebarContainerQuery: string[]
  appendContainerQuery: string[]
  watchRouteChange?: (callback: () => void) => void
}

export const config: Record<string, SearchEngine> = {
  gptoverflow: {
    inputQuery: [],
    bodyQuery: ['.s-prose.js-post-body'],
    sidebarContainerQuery: ['#sidebar'],
    appendContainerQuery: [],
  },
}
