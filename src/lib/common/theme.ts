abstract class Color {
    abstract to_css_string(): string;
}

interface HSLState {
    hue: number;
    saturation: number;
    lightness: number;
}

class HSL extends Color {
    constructor(private state: HSLState) { super(); }

    to_css_string(): string {
        return `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`;
    }

    static gray({ lightness }: { lightness: number }) {
        return new HSL({ hue: 0, saturation: 0, lightness });
    }
}

interface HoverableState {
    unhovered: Color;
    hovered: Color;
}

class Hoverable {
    constructor(private state: HoverableState) {}

    to_css_string({hovered}: {hovered: boolean}): string {
        return hovered ? this.state.hovered.to_css_string() : this.state.unhovered.to_css_string();
    }
}

interface VariantsState<T extends Color | Hoverable> {
    light: T;
    dark: T;
}

class Variants<T extends Color | Hoverable> {
    constructor(private state: VariantsState<T>) {}

    public get light() { return this.state.light; }
    public get dark() { return this.state.dark; }
}

enum Mode {
    LIGHT = 'light',
    DARK = 'dark',
}

interface ThemeState {
    mode: Mode;

    css_properties: {
        header_background: Variants<Color>;
        main_background: Variants<Color>;

        card_a_background: Variants<Hoverable>;
        card_contrast_background: Variants<Hoverable>;

        text_neutral: Variants<Hoverable>;
        text_brand: Variants<Hoverable>;
        text_contrast: Variants<Hoverable>;
        text_anti_contrast: Variants<Hoverable>;

        success: Variants<Hoverable>;
        warning: Variants<Hoverable>;
        critical: Variants<Hoverable>;
    }
}

class Theme {
    constructor(private state: ThemeState) {}

    public get is_light() { return this.state.mode === Mode.LIGHT; }
    public get is_dark() { return this.state.mode === Mode.DARK; }

    public toggle_and_apply(root: HTMLElement) {
        this.toggle();
        this.apply(root);
    }

    public toggle() {
        this.state.mode = this.state.mode === Mode.LIGHT ? Mode.DARK : Mode.LIGHT;
    }

    public apply(root: HTMLElement) {
        Object.entries(this.state.css_properties).forEach(([key, values]) => {

            const css_variable_name = key.replace(/_/g, '-');

            const value = this.state.mode === Mode.LIGHT ? values.light : values.dark;
            
            if (value instanceof Hoverable) {
                root.style.setProperty(`--${css_variable_name}`, value.to_css_string({hovered: false}));
                root.style.setProperty(`--${css_variable_name}-hovered`, value.to_css_string({hovered: true}));
            } else {
                root.style.setProperty(`--${css_variable_name}`, value.to_css_string());
            }
        });
    }
}

const COLORS = {
    white: HSL.gray({ lightness: 100 }),
    black: HSL.gray({ lightness: 0 }),

    grass_green: new HSL({ hue: 142, saturation: 72, lightness: 46 }),
    pine_green: new HSL({ hue: 141, saturation: 73, lightness: 30 }),

    watermelon_pink: new HSL({ hue: 5, saturation: 100, lightness: 66 }),
    strawberry_red: new HSL({ hue: 2, saturation: 100, lightness: 60 }),

    mustard: new HSL({ hue: 43, saturation: 99, lightness: 30 }),
    light_brown: new HSL({ hue: 43, saturation: 98, lightness: 24 }),

    vibrant_magenta: new HSL({ hue: 299, saturation: 100, lightness: 72 }),
    magenta: new HSL({ hue: 300, saturation: 99, lightness: 62 }),
};

const SHARED_HOVERABLES = {
    success: new Hoverable({
        unhovered: COLORS.grass_green,
        hovered: COLORS.pine_green,
    }),
    warning: new Hoverable({
        unhovered: COLORS.mustard,
        hovered: COLORS.light_brown,
    }),
    critical: new Hoverable({
        unhovered: COLORS.strawberry_red,
        hovered: COLORS.watermelon_pink,
    }),
    brand: new Hoverable({
        unhovered: COLORS.vibrant_magenta,
        hovered: COLORS.magenta,
    }),
    light_contrast: new Hoverable({
        unhovered: COLORS.black,
        hovered: HSL.gray({ lightness: 8 }),
    }),
    dark_contrast: new Hoverable({
        unhovered: COLORS.white,
        hovered: HSL.gray({ lightness: 90 }),
    }),
};

const DEFAULT_MODE = Mode.DARK;

export const theme = new Theme({
    mode: DEFAULT_MODE,

    css_properties: {
        header_background: new Variants({
            light: COLORS.white,
            dark: HSL.gray({ lightness: 7 }),
        }),

        main_background: new Variants({
            light: HSL.gray({ lightness: 98 }),
            dark: HSL.gray({ lightness: 8 }),
        }),

        card_a_background: new Variants({
            light: new Hoverable({
                unhovered: COLORS.white,
                hovered: HSL.gray({ lightness: 95 }),
            }),
            dark: new Hoverable({
                unhovered: HSL.gray({ lightness: 14 }),
                hovered: HSL.gray({ lightness: 19 }),
            }),
        }),

        card_contrast_background: new Variants({
            light: new Hoverable({
                unhovered: COLORS.black,
                hovered: HSL.gray({ lightness: 14 }),
            }),
            dark: new Hoverable({
                unhovered: COLORS.white,
                hovered: HSL.gray({ lightness: 90 }),
            }),
        }),

        text_neutral: new Variants({
            light: new Hoverable({
                unhovered: HSL.gray({ lightness: 49 }),
                hovered: HSL.gray({ lightness: 13 }),
            }),
            dark: new Hoverable({
                unhovered: HSL.gray({ lightness: 61 }),
                hovered: COLORS.white,
            }),
        }),

        text_brand: new Variants({
            light: SHARED_HOVERABLES.brand,
            dark: SHARED_HOVERABLES.brand,
        }),

        text_contrast: new Variants({
            light: SHARED_HOVERABLES.light_contrast,
            dark: SHARED_HOVERABLES.dark_contrast,
        }),

        text_anti_contrast: new Variants({
            light: SHARED_HOVERABLES.dark_contrast,
            dark: SHARED_HOVERABLES.light_contrast,
        }),

        success: new Variants({
            light: SHARED_HOVERABLES.success,
            dark: SHARED_HOVERABLES.success,
        }),

        warning: new Variants({
            light: SHARED_HOVERABLES.warning,
            dark: SHARED_HOVERABLES.warning,
        }), 

        critical: new Variants({
            light: SHARED_HOVERABLES.critical,
            dark: SHARED_HOVERABLES.critical,
        }),
    },
});
  