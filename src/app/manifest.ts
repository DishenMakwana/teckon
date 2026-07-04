import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shreeji Hydraulics",
    short_name: "Teckon™",
    description:
      "Premium replacement hydraulic parts & spares for JCB, Terex, CAT, and heavy machinery. ISO 9001:2015 certified in Rajkot, Gujarat.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B0F19",
    theme_color: "#FFBE00",
    icons: [
      {
        src: "/icon-48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/teckon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
