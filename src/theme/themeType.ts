type ColorPalette = {
  surface: {
    lighter: string;
    light: string;
    medium: string;
    inverse: string;
    disabled: string;
  };
  border: {
    lighter: string;
    light: string;
    medium: string;
    disabled: string;
  };
  onSurface: {
    light: string;
    medium: string;
    dark: string;
    inverse: string;
    disabled: string;
  };
  overlay: {
    light: string;
    medium: string;
    dark: string;
  };
};

type BrandColorPalette = {
  surface: {
    lighter: string;
    light: string;
    medium: string;
    dark: string;
    darker: string;
  };
  border: {
    lighter: string;
    medium: string;
    dark: string;
  };
  onSurface: {
    light: string;
    medium: string;
  };
};

type OtherColorPalette = {
  surface: {
    lighter: string;
    light: string;
    medium: string;
    dark?: string;
  };
  border: {
    lighter: string;
    medium: string;
    dark: string;
  };
  onSurface: {
    light: string;
    medium: string;
  };
};

type gradientPalette = {
    start:string;
    end:string;
}

type ThemeColors = {
  neutral: ColorPalette;
  brand: BrandColorPalette;
  info: OtherColorPalette;
  positive: OtherColorPalette;
  negative: OtherColorPalette;
  warning: OtherColorPalette;
  gradient:gradientPalette;
};

type BorderRadius = {
  b0: string;
  b50: string;
  b100: string;
  b150: string;
  b200: string;
  b250: string;
  b300: string;
  b400: string;
  b500: string;
  b700: string;
  b800: string;
  b900: string;
  b1200: string;
  b2500: string;
};

type Spacing = {
  s0: string;
  s100: string;
  s150: string;
  s200: string;
  s250: string;
  s300: string;
  s400: string;
  s500: string;
  s600: string;
  s800: string;
  s1000: string;
  s1200: string;
  s1600: string;
  s2000: string;
};

type Elevation = {
  s: string;
  m: string;
  l: string;
};

type Easing = {
  li: string;
  eIn: string;
  eOut: string;
  einout: string;
  bo: string;
};

type Duration = {
  d1: number;
  d2: number;
  d3: number;
  d4: number;
  d5: number;
  d6: number;
};

export type Theme = {
  color: ThemeColors;
  borderRadius: BorderRadius;
  spacing: Spacing;
  elevation: Elevation;
  easing: Easing;
  duration: Duration;
};