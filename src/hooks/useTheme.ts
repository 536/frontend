import { ref, watchEffect } from "vue"
import { getActiveThemeName, setActiveThemeName } from "@/utils/cache/local-storage"

const DEFAULT_THEME_NAME = "light"
type DefaultThemeName = typeof DEFAULT_THEME_NAME

/** 注册的主题名称, 其中 DefaultThemeName 是必填的 */
export type ThemeName = DefaultThemeName | "dark"

interface ThemeList {
  title: string
  name: ThemeName
}

/** 主题列表 */
const themeList: ThemeList[] = [
  {
    title: "明亮",
    name: DEFAULT_THEME_NAME
  },
  {
    title: "黑暗",
    name: "dark"
  }
]

/** 正在应用的主题名称 */
const activeThemeName = ref<ThemeName>(getActiveThemeName() || DEFAULT_THEME_NAME)

/** 设置主题 */
const setTheme = (value: ThemeName) => {
  activeThemeName.value = value
}

const isDefaultTheme = () => {
  return activeThemeName.value === DEFAULT_THEME_NAME
}

/** 在 html 根元素上挂载 class */
const setHtmlRootClassName = (value: ThemeName) => {
  document.documentElement.className = value
}

/** 初始化 */
const initTheme = () => {
  // watchEffect 来收集副作用
  watchEffect(() => {
    const value = activeThemeName.value
    setHtmlRootClassName(value)
    setActiveThemeName(value)
  })
}

/** 主题 hook */
export function useTheme() {
  return { DEFAULT_THEME_NAME, themeList, activeThemeName, initTheme, setTheme, isDefaultTheme }
}