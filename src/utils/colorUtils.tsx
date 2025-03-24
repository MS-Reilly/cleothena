export function lightenColor(hex: string, percent: number): string {
    // Ensure hex is valid
    if (!/^#([0-9A-F]{3}){1,2}$/i.test(hex)) {
      console.warn(`Invalid HEX color: ${hex}`);
      return hex;
    }
  
    // Convert 3-digit hex to 6-digit
    if (hex.length === 4) {
      hex = "#" + [...hex.slice(1)].map(c => c + c).join("");
    }
  
    const num = parseInt(hex.slice(1), 16);
  
    const r = (num >> 16) & 0xff;
    const g = (num >> 8) & 0xff;
    const b = num & 0xff;
  
    const lighten = (c: number) =>
      Math.round(c + (255 - c) * percent);
  
    const newColor =
      "#" +
      [lighten(r), lighten(g), lighten(b)]
        .map((c) => c.toString(16).padStart(2, "0"))
        .join("");
  
    return newColor;
  }
  