// import { useEffect } from "react";
// import { uniqBy } from "lodash";
import { IChain as Chain } from "../models/chain";
import React from "react";
import { useTranslation } from "react-i18next";

// const mergeChainSets = (c1: Chain[], c2: Chain[]) => uniqBy(c1.concat(c2), "name");

export default function () {
  const { t } = useTranslation();
  const [chains, setChains] = React.useState<Chain[]>([
    {
      name: "Moonriver",
      network: t("mainnet"),
      rpc: ["https://rpc.moonriver.moonbeam.network"],
    },
    {
      name: "Moonbase Alpha",
      network: t("testnet"),
      rpc: ["https://rpc.testnet.moonbeam.network"],
    },
    {
      name: "Moonbeam Dev Node",
      network: t("testnet"),
      rpc: ["http://localhost:9933"],
    },
  ]);

  // uncomment once we add 'chain list provider' concept. This list blows.

  // useEffect(() => {
  //   if (chains === undefined) {
  //     fetch("https://chainid.network/chains.json")
  //       .then((r) => r.json())
  //       .then((chainIdNetwork) => {
  //         const filteredChains = chainIdNetwork.filter((c: Chain) => {
  //           if (c.rpc.length === 0) {
  //             return false;
  //           }
  //           return true;
  //         });
  //         if (chains) {
  //           setChains(mergeChainSets(chains, filteredChains));
  //         } else {
  //           setChains(filteredChains);
  //         };
  //       });
  //   }
  // }, [chains]);

  return [chains, setChains];
}
