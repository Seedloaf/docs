const getNitro = () => {
  return window["nitroAds" as any] as any;
};

const addMenuAd = (id: string) => {
  getNitro().createAd(id, {
    refreshTime: 30,
    demo: process.env.NODE_ENV !== "production",
    sizes: [
      ["300", "250"],
      ["336", "280"],
      ["320", "480"],
      ["300", "600"],
      ["320", "100"],
      ["320", "50"],
    ],
    mediaQuery: "(min-width: 350px)",
    report: {
      enabled: true,
      icon: true,
      wording: "Report Ad",
      position: "top-right",
    },
  });
};
