import { createConfig, http } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";
import { Attribution } from "ox/erc8021";

const BUILDER_CODE = process.env.NEXT_PUBLIC_BUILDER_CODE ?? "";

const DATA_SUFFIX = BUILDER_CODE
  ? Attribution.toDataSuffix({ codes: [BUILDER_CODE] })
  : undefined;

export const config = createConfig({
  chains: [base],
  connectors: [
    coinbaseWallet({
      appName:
        process.env.NEXT_PUBLIC_PROJECT_NAME ?? "First_test_app",
      preference: "all",
    }),
  ],
  transports: {
    [base.id]: http(),
  },
  ...(DATA_SUFFIX ? { dataSuffix: DATA_SUFFIX } : {}),
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
