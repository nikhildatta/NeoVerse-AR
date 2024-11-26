import GlassPaperTrolley from "../assets/models/GlassPaperTrolley.glb";
import GlassPaperTrolleyUsdz from "../assets/models/GlassPaperTrolley.usdz";

const productItems = [
  {
    id: 1,
    name: "Glass Paper Trolley",
    modelSrc: GlassPaperTrolley,
    iOSSrc: GlassPaperTrolleyUsdz,
    category: "Trolley",
    color: "Orange",
    annotations: [
      {
        title: "comfortable-back",
        slot: "hotspot-1",
        position: "0.011597651675006926m 0.5744572599492905m -0.1383899854988515m",
        normal: "0.028332494851243895m 0.2137467602998606m 0.9764781575625839m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      }, {
        title: "comfortable-seat",
        slot: "hotspot-2",
        position: "0.008754174027053235m 0.3513235856998005m 0.1658749505478343m",
        normal: "-0.30988561688489596m 0.9507625837296717m -0.004627507703580716m",
        orbit: "10.89188deg 119.9775deg 0.03543022m",
        target: "-0.1053838m 0.01610652m 0.1076345m"
      },
    ]
  },
  
];
export default productItems;
