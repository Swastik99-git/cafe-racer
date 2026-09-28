export const motorcycleImages = {
  hero: "https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1920",
  machineDetail: "https://images.pexels.com/photos/12519451/pexels-photo-12519451.jpeg?auto=compress&cs=tinysrgb&w=1920",
  fullShowcase: "https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1920",
  showcasePortrait: "https://images.pexels.com/photos/11046904/pexels-photo-11046904.jpeg?auto=compress&cs=tinysrgb&w=1080",
  engineDetail: "https://images.pexels.com/photos/1410448/pexels-photo-1410448.jpeg?auto=compress&cs=tinysrgb&w=1920",
  garageDark: "https://images.pexels.com/photos/105018/pexels-photo-105018.jpeg?auto=compress&cs=tinysrgb&w=1920",
  roadCinematic: "https://images.pexels.com/photos/35239834/pexels-photo-35239834.jpeg?auto=compress&cs=tinysrgb&w=1920",
  ridingAction: "https://images.pexels.com/photos/13515766/pexels-photo-13515766.jpeg?auto=compress&cs=tinysrgb&w=1920",
  headlampDetail: "https://images.pexels.com/photos/1658/vehicle-motorbike-motorcycle-headlight.jpg?auto=compress&cs=tinysrgb&w=1920",
  leatherSeat: "https://images.pexels.com/photos/36209786/pexels-photo-36209786.jpeg?auto=compress&cs=tinysrgb&w=1920",
  finalCta: "https://images.pexels.com/photos/9924837/pexels-photo-9924837.jpeg?auto=compress&cs=tinysrgb&w=1920",
  story1: "https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1920",
  story2: "https://images.pexels.com/photos/37780173/pexels-photo-37780173.jpeg?auto=compress&cs=tinysrgb&w=1920",
  story3: "https://images.pexels.com/photos/19870624/pexels-photo-19870624.jpeg?auto=compress&cs=tinysrgb&w=1080",
  interactiveMain: "https://images.pexels.com/photos/10339351/pexels-photo-10339351.jpeg?auto=compress&cs=tinysrgb&w=1920",
};

export interface SpecItem {
  label: string;
  value: string;
  unit?: string;
}

export const performanceStats: SpecItem[] = [
  { label: "HORSEPOWER", value: "95", unit: "HP" },
  { label: "WEIGHT", value: "210", unit: "KG" },
  { label: "0—100 KM/H", value: "2.8", unit: "SEC" },
  { label: "DISPLACEMENT", value: "850", unit: "CC" },
];

export const specifications: SpecItem[] = [
  { label: "Engine", value: "850cc Parallel Twin" },
  { label: "Power", value: "95 HP" },
  { label: "Torque", value: "88 Nm" },
  { label: "Weight", value: "210 kg" },
  { label: "Transmission", value: "6-Speed" },
  { label: "Fuel Capacity", value: "14 L" },
  { label: "Top Speed", value: "210 km/h" },
];

export interface ShowcaseLabel {
  text: string;
  top: string;
  left: string;
  lineDirection: "left" | "right" | "down" | "up";
  lineLength: string;
}

export const showcaseLabels: ShowcaseLabel[] = [
  { text: "LED HEADLAMP", top: "38%", left: "22%", lineDirection: "left", lineLength: "80px" },
  { text: "ALUMINIUM FRAME", top: "52%", left: "72%", lineDirection: "right", lineLength: "90px" },
  { text: "CAFE RACER HANDLEBAR", top: "28%", left: "45%", lineDirection: "up", lineLength: "60px" },
  { text: "PERFORMANCE EXHAUST", top: "68%", left: "80%", lineDirection: "right", lineLength: "70px" },
  { text: "PREMIUM LEATHER SEAT", top: "60%", left: "30%", lineDirection: "left", lineLength: "80px" },
];

export interface StorySlide {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const storySlides: StorySlide[] = [
  {
    number: "01",
    title: "FORM",
    description: "Classic proportions with a contemporary attitude.",
    image: "https://images.pexels.com/photos/819805/pexels-photo-819805.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    number: "02",
    title: "MATERIAL",
    description: "Machined metal, leather and exposed mechanical detail.",
    image: "https://images.pexels.com/photos/37780173/pexels-photo-37780173.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    number: "03",
    title: "CHARACTER",
    description: "A machine designed to feel alive.",
    image: "https://images.pexels.com/photos/19870624/pexels-photo-19870624.jpeg?auto=compress&cs=tinysrgb&w=1080",
  },
];
