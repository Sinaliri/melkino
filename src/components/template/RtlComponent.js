"use client";
import React from "react";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const RtlComponent = ({ children }) => {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>;
};

export default RtlComponent;
