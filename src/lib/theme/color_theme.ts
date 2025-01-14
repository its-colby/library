import { COLORS } from "./colors";

export type WithHover<T extends string> = {
    default: T;
    hovered: T;
};

function default_and_hovered<T extends string>(def: T, hover: T): WithHover<T> {
    return {
        default: def,
        hovered: hover,
    };
}


export interface ColorTheme {
    header_background_color: string;
    content_background_color: string;
    card1_background_color: string;
    card2_background_color: string;

    text_neutral_color: WithHover<string>;
    text_brand_color1: WithHover<string>;
    text_contrast_color: string;

    success: WithHover<string>;
    warning: WithHover<string>;
    critical: WithHover<string>;
}

export const UNI_LIGHT: ColorTheme = {
    header_background_color: COLORS.white,
    content_background_color: COLORS.gray_98,
    card1_background_color: COLORS.white,
    card2_background_color: COLORS.gray_98,

    text_neutral_color: default_and_hovered(COLORS.gray_49, COLORS.gray_13),
    text_brand_color1: default_and_hovered(COLORS.vibrant_magenta, COLORS.magenta),
    text_contrast_color: COLORS.black,

    success: default_and_hovered(COLORS.grass_green, COLORS.pine_green),
    warning: default_and_hovered(COLORS.mustard, COLORS.light_brown),
    critical: default_and_hovered(COLORS.vibrant_magenta, COLORS.magenta),
}

export const UNI_DARK: ColorTheme = {
    header_background_color: COLORS.gray_7,
    content_background_color: 'hsl(0, 0%, 8%)',
    card1_background_color: COLORS.gray_14,
    card2_background_color: COLORS.gray_14,

    text_neutral_color: default_and_hovered(COLORS.gray_61, COLORS.white),
    text_brand_color1: UNI_LIGHT.text_brand_color1,
    text_contrast_color: COLORS.white,

    success: UNI_LIGHT.success,
    warning: UNI_LIGHT.warning,
    critical: UNI_LIGHT.critical,
}


export type ColorThemes = {
    light: ColorTheme;
    dark: ColorTheme;
}

export const UNI_THEMES: ColorThemes = {
    light: UNI_LIGHT,
    dark: UNI_DARK,
}


export function apply_color_theme(root: HTMLElement, new_theme: ColorTheme) {  
    Object.entries(new_theme).forEach(([key, value]) => {
        const hyphened_key = key.replace(/_/g, '-');
        
        if (typeof value === 'object' && 'default' in value && 'hovered' in value) {
            root.style.setProperty(`--${hyphened_key}`, value.default);
            root.style.setProperty(`--${hyphened_key}-hovered`, value.hovered);
        } else {
            root.style.setProperty(`--${hyphened_key}`, value as string);
        }
    });
}
  