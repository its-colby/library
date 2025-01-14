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

export interface Pallette {
    transparent: typeof COLORS.transparent;
    congruent: typeof COLORS.white | typeof COLORS.black;
    opposite: typeof COLORS.white | typeof COLORS.black;

    neutral1: WithHover<string>;
    neutral2: WithHover<string>;
    neutral3: WithHover<string>;

    surface1: WithHover<string>;
    surface2: WithHover<string>;
    surface3: WithHover<string>;
    surface4: string;
    surface5: string;

    accent1: WithHover<string>;
    accent2: WithHover<string>;
    accent3: WithHover<string>;

    success: WithHover<string>;
    warning: WithHover<string>;
    critical: WithHover<string>;
}

export namespace Pallettes {

    export const UNI_LIGHT: Pallette = {
        transparent: COLORS.transparent,
        congruent: COLORS.white,
        opposite: COLORS.black,
      
        neutral1: default_and_hovered(COLORS.gray_49, COLORS.gray_13),
        neutral2: default_and_hovered(COLORS.gray_49, COLORS.gray_42),
        neutral3: default_and_hovered(COLORS.gray_75, COLORS.gray_68),
        
        surface1: default_and_hovered(COLORS.white, COLORS.gray_98),
        surface2: default_and_hovered(COLORS.gray_98, COLORS.gray_96),
        surface3: default_and_hovered(COLORS.gray_13_a5, COLORS.gray_13_a9),
        surface4: COLORS.white_a64,
        surface5: COLORS.black_a4,
        
        accent1: default_and_hovered(COLORS.vibrant_magenta, COLORS.magenta),
        accent2: default_and_hovered(COLORS.pastel_pink, COLORS.pastel_purple),
        accent3: default_and_hovered(COLORS.gray_13, COLORS.black),
      
        success: default_and_hovered(COLORS.grass_green, COLORS.pine_green),
        warning: default_and_hovered(COLORS.mustard, COLORS.light_brown),
        critical: default_and_hovered(COLORS.watermelon_pink, COLORS.strawberry_red),
    }

    export const UNI_DARK: Pallette = {
        transparent: COLORS.transparent,
        congruent: COLORS.black,
        opposite: COLORS.white,

        neutral1: default_and_hovered(COLORS.gray_61, COLORS.white),
        neutral2: default_and_hovered(COLORS.gray_61, COLORS.gray_68),
        neutral3: default_and_hovered(COLORS.gray_37, COLORS.gray_42),
        
        surface1: default_and_hovered(COLORS.gray_7, COLORS.gray_9),
        surface2: default_and_hovered(COLORS.gray_9, COLORS.gray_14),
        surface3: default_and_hovered(COLORS.white_a12, COLORS.white_a16),
        surface4: COLORS.white_a20,
        surface5: COLORS.black_a4,
    
        accent1: UNI_LIGHT.accent1,
        accent2: default_and_hovered(COLORS.violet_purple, COLORS.plum_purple),
        accent3: default_and_hovered(COLORS.white, COLORS.gray_96),
    
        success: UNI_LIGHT.success,
        warning: UNI_LIGHT.warning,
        critical: UNI_LIGHT.critical,
    }
}