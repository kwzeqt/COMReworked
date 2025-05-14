// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import type { Theme } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import './style.css';
import Analytics from '@vercel/analytics';

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      default: () => h(Analytics),
    });
  },
  enhanceApp({ app, router, siteData }) {},
} satisfies Theme;
