import { Theme } from "./themeType";

export const themeLight: Theme = {
  color: {
    neutral: {
      surface: {
        lighter: "#ffffff",
        light: "#f5f5f5",
        medium: "#e0e0e0",
        inverse: "#151515",
        disabled: "#f5f5f5",
      },
      border: {
        lighter: "#e0e0e0",
        light: "#e0e0e0",
        medium: "#8d8d8d",
        disabled: "#e0e0e0",
      },
      onSurface: {
        light: "#262626",
        medium: "#3a3a3a",
        dark: "#6f6f6f",
        inverse: "#ffffff",
        disabled: "#8d8d8d",
      },
      overlay: {
        light: "rgba(0,0,0,0.15)",
        medium: "rgba(0,0,0,0.30)",
        dark: "rgba(0,0,0,0.50)",
      },
    },
    brand: {
      surface: {
        lighter: "#eff4ff",
        light: "#0f3cc9",
        medium: "#0f3cc9",
        dark: "#005493",
        darker: "#003c6b",
      },
      border: {
        lighter: "#d2e1fe",
        medium: "#008FF5",
        dark: "#00274a",
      },
      onSurface: {
        light: "#0072c4",
        medium: "#f5f5f5",
      },
    },
    info: {
      surface: {
        lighter: "#f7f3ff",
        light: "#d4bbff",
        medium: "#9e29fe",
        dark: "#7a00cb",
      },
      border: {
        lighter: "#e7dbff",
        medium: "#ae69ff",
        dark: "#3c0068",
      },
      onSurface: {
        light: "#9E29FE",
        medium: "#AE69FF",
      },
    },
    positive: {
      surface: {
        lighter: "#eef7ee",
        light: "#9ed49e",
        medium: "#008117",
        dark: "#006000",
      },
      border: {
        lighter: "#cbe8ca",
        medium: "#36a040",
        dark: "#002e00",
      },
      onSurface: {
        light: "#008117",
        medium: "#f5f5f5",
      },
    },
    negative: {
      surface: {
        lighter: "#fef2f2",
        light: "#feb2b5",
        medium: "#E00028",
        dark: "#a9001c",
      },
      border: {
        lighter: "#fed8d9",
        medium: "#fe4856",
        dark: "#550009",
      },
      onSurface: {
        light: "#e00028",
        medium: "#f5f5f5",
      },
    },
    warning: {
      surface: {
        lighter: "#fef2ef",
        light: "#feb69a",
        medium: "#B15600",
        dark: "#843f00",
      },
      border: {
        lighter: "#fef2ef",
        medium: "#dd6d00",
        dark: "#421b00",
      },
      onSurface: {
        light: "#b15600",
        medium: "#f5f5f5",
      },
    },
    gradient:{
      start:'#3063C0',
      end:'#20A0DE'
    },
  },
  borderRadius: {
    b0: "0px",
    b50: "2px",
    b100: "4px",
    b150: "6px",
    b200: "8px",
    b250: "10px",
    b300: "12px",
    b400: "16px",
    b500: "20px",
    b700: "28px",
    b800: "32px",
    b900: "36px",
    b1200: "48px",
    b2500: "100px",
  },
  spacing: {
    s0: "0px",
    s100: "4px",
    s150: "6px",
    s200: "8px",
    s250: "10px",
    s300: "12px",
    s400: "16px",
    s500: "20px",
    s600: "24px",
    s800: "32px",
    s1000: "40px",
    s1200: "48px",
    s1600: "62px",
    s2000: "80px",
  },
  elevation: {
    s: "0px 0px 6px 0px rgba(0, 0, 0, 0.25)",
    m: "0px 0px 6px 2px rgba(0, 0, 0, 0.25)",
    l: "0px 0px 8px 4px rgba(0, 0, 0, 0.25)",
  },
  easing: {
    li: "(0, 0, 1, 1)",
    eIn: "(0.1, 0, 0.3, 1)",
    eOut: "(0.3, 0, 0.7, 1)",
    einout: "(0.4, 0, 0.6, 1)",
    bo: "(0.4, -0.3, 0.6, 1)",
  },
  duration: {
    d1: 0,
    d2: 0.05,
    d3: 0.15,
    d4: 0.3,
    d5: 0.5,
    d6: 1,
  },
};
