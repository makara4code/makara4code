import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/makara4code/",
  transformHead({ assets }) {
    // @ts-ignore
    const myFontFile = assets.find((file) => /Siemreap-Regular\.\w+\.ttf/);
    if (myFontFile) {
      return [
        [
          "link",
          {
            rel: "preload",
            href: myFontFile,
            as: "font",
            type: "font/woff2",
            crossorigin: "",
          },
        ],
      ];
    }
  },
  locales: {
    root: {
      label: "ខ្មែរ",
      lang: "kh",
      title: "នល់ មករា",
      description: "My Personal Portfolio",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "ផ្ទាំងខាងមុខ", link: "/index" },
          { text: "ប្រវត្តរូបសង្ខេប", link: "/about-me" },
        ],

        sidebar: [
          {
            items: [{ text: "អំពីខ្ញុំ", link: "/about-me" }],
          },
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/makara4code" },
          { icon: "twitter", link: "https://twitter.com/nuol_makara" },
          { icon: "linkedin", link: "https://www.linkedin.com/in/makaranuol" },
          { icon: "youtube", link: "https://www.youtube.com/@makaranuol" },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en",
      title: "Makara Nuol",
      description: "My Personal Portfolio",
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: "Home", link: "/en/index" },
          { text: "More About Me", link: "/en/about-me" },
        ],

        sidebar: [
          {
            items: [{ text: "About Me", link: "/en/about-me" }],
          },
        ],

        socialLinks: [
          { icon: "github", link: "https://github.com/makara4code" },
          { icon: "twitter", link: "https://twitter.com/nuol_makara" },
          { icon: "linkedin", link: "https://www.linkedin.com/in/makaranuol" },
          { icon: "youtube", link: "https://www.youtube.com/@makaranuol" },
        ],
      },
    },
  },
});
