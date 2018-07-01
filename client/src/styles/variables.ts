import { font } from './mixins';

export const heading1FontSize = 36;
export const heading2FontSize = 24;
export const heading3FontSize = 20;
export const heading4FontSize = 18;
export const heading5FontSize = 16;
export const heading6FontSize = 14;
export const textFontSize = 14;
export const captionFontSize = 12;
export const tableFontSize = 12;
export const buttonFontSize = 14;
export const badgeFontSize = 10;

export const heading1LineHeight = 49;
export const heading2LineHeight = 33;
export const heading3LineHeight = 27;
export const heading4LineHeight = 25;
export const heading5LineHeight = 22;
export const heading6LineHeight = 19;
export const textLineHeight = 19;
export const captionLineHeight = 16;
export const tableLineHeight = 16;
export const buttonLineHeight = 19;
export const badgeLineHeight = 14;

export const heading1fontWeight = 500;
export const heading2fontWeight = 500;
export const heading3fontWeight = 500;
export const heading4fontWeight = 500;
export const heading5fontWeight = 500;
export const heading6fontWeight = 500;
export const textFontWeight = 400;
export const captionFontWeight = 400;
export const tableFontWeight = 500;
export const buttonFontWeight = 900;
export const badgeFontWeight = 900;

export const fontFamily = '\'Muli\', sans-serif';

export const fontHeading1 = font({
  family: fontFamily,
  lineHeight: heading1LineHeight,
  size: heading1FontSize,
  weight: heading1fontWeight,
});
export const fontHeading2 = font({
  family: fontFamily,
  lineHeight: heading2LineHeight,
  size: heading2FontSize,
  weight: heading2fontWeight,
});
export const fontHeading3 = font({
  family: fontFamily,
  lineHeight: heading3LineHeight,
  size: heading3FontSize,
  weight: heading3fontWeight,
});
export const fontHeading4 = font({
  family: fontFamily,
  lineHeight: heading4LineHeight,
  size: heading4FontSize,
  weight: heading4fontWeight,
});
export const fontHeading5 = font({
  family: fontFamily,
  lineHeight: heading5LineHeight,
  size: heading5FontSize,
  weight: heading5fontWeight,
});
export const fontHeading6 = font({
  family: fontFamily,
  lineHeight: heading6LineHeight,
  size: heading6FontSize,
  weight: heading6fontWeight,
});
export const fontText = font({
  family: fontFamily,
  lineHeight: textLineHeight,
  size: textFontSize,
  weight: textFontWeight,
});
export const fontCaption = font({
  family: fontFamily,
  lineHeight: captionLineHeight,
  size: captionFontSize,
  weight: captionFontWeight,
});
export const fontTable = font({
  family: fontFamily,
  lineHeight: tableLineHeight,
  size: tableFontSize,
  weight: tableFontWeight,
});
export const fontButton = font({
  family: fontFamily,
  lineHeight: buttonLineHeight,
  size: buttonFontSize,
  weight: buttonFontWeight,
});
export const fontBadge = font({
  family: fontFamily,
  lineHeight: badgeLineHeight,
  size: badgeFontSize,
  weight: badgeFontWeight,
});

export const baseColor = '#333333';
export const dangerColor = '#c80039';
export const grayColor = '#999999';
export const lightGrayColor = '#f1f1f1';
export const primaryColor = '#ed6a5a';
export const secondaryColor = '#36c9c6';
export const successColor = '#34935b';
export const textColor = '#777777';
export const whiteColor = '#ffffff';

export const unorderedDiskSize = 5;
