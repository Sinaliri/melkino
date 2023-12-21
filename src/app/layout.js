import NextAuthProvider from "@/providers/NextAuthProvider";
import Layout from "@/layout/Layout";
import { yekan } from "@/utils/fonts";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/constants/muiTheme";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import RtlComponent from "@/template/RtlComponent";
export const metadata = {
  title: "املاک | پروژه بوتواستارت",
  description: "سایت خرید و فروش املاک",
  icons: { icon: "./favicon.ico" },
};
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <RtlComponent>
        <ThemeProvider theme={theme}>
          <body className={yekan.className}>
            <NextAuthProvider>
              <Layout>{children}</Layout>
            </NextAuthProvider>
          </body>
        </ThemeProvider>
      </RtlComponent>
    </html>
  );
}
