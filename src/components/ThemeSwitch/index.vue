<script lang="ts" setup>
import { useTheme } from "@/hooks/useTheme"
import { Moon, Sunny } from "@element-plus/icons-vue"

const { themeList, activeThemeName, setTheme, isDefaultTheme } = useTheme()

const handleThemeSwitchClick = () => {
  for (let index = 0; index < themeList.length; index++) {
    const theme = themeList[index]
    if (theme.name != activeThemeName.value) {
      setTheme(theme.name)
      break
    }
  }
}
</script>

<template>
  <el-link :underline="false" @click="handleThemeSwitchClick">
    <el-icon :size="20">
      <Sunny v-if="isDefaultTheme()" />
      <Moon v-else />
    </el-icon>
  </el-link>
</template>
