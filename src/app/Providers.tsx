"use client";

import { NextUIProvider } from "@nextui-org/system";

const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
