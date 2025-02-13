import { composers, performers, conductors } from "./people";

export type Composer = typeof composers[keyof typeof composers];
export type Performer = typeof performers[keyof typeof performers];
export type Conductor = typeof conductors[keyof typeof conductors];

export const genres = {
    concerto: "Concerto",
    symphony: "Symphony",
    miniature: "Miniature",
    baroque_concerto: "Baroque Concerto",
    misc: "Misc."
} as const;

export type Genre = typeof genres[keyof typeof genres];

export enum Tier {
    AMAZING = "Amazing",
    PARTIALLY_AMAZING = "Partially Amazing",
    NOTABLE = "Memorable",
    DEFICIENT = "Deficient",
}

type BasePiece = {
    genre: Genre;
    composer: Composer;
    title: string
    tier: Tier;
}

export type BadPiece = BasePiece & {
    tier: Tier.DEFICIENT;
}

export type GoodPiece = BasePiece & {
    tier: Tier.AMAZING | Tier.PARTIALLY_AMAZING | Tier.NOTABLE;
    link: string;
    performer?: Performer;
    conductor?: Conductor;
}

export type Piece = GoodPiece | BadPiece;

export function augment_map({
    genre,
    composer,
    amazing = [],
    partially_amazing = [],
    notable = [],
    deficient = []
}: {
    genre: Genre;
    composer: Composer;
    amazing?: Omit<GoodPiece, "genre" | "composer" | "tier">[];
    partially_amazing?: Omit<GoodPiece, "genre" | "composer" | "tier">[];
    notable?: Omit<GoodPiece, "genre" | "composer" | "tier">[];
    deficient?: Omit<BadPiece, "genre" | "composer" | "tier">[];
}): Piece[] {
    const pieces: (Omit<GoodPiece, "genre" | "composer"> | Omit<BadPiece, 
        "genre" | "composer">)[] = [
        ...amazing.map(p => ({ ...p, tier: Tier.AMAZING } as const)),
        ...partially_amazing.map(p => ({ ...p, tier: Tier.PARTIALLY_AMAZING } as const)),
        ...notable.map(p => ({ ...p, tier: Tier.NOTABLE } as const)),
        ...deficient.map(p => ({ ...p, tier: Tier.DEFICIENT } as const))
    ];
    return pieces.map(p => ({ ...p, genre, composer }));
}

export const styles = {
    concerto: genres.concerto,
    symphony: genres.symphony,
    nocturne: "Nocturne",
    prelude: "Prelude",
    elegy: "Elegy",
    caprice: "Caprice",
} as const

export type Style = typeof styles[keyof typeof styles];

export const instruments = {
    piano: "Piano",
    violin: "Violin",
    cello: "Cello",
    viola: "Viola",
} as const;

export type Instrument = typeof instruments[keyof typeof instruments];

export function make_title(style: Style, number: number, instrument?: Instrument): string {
    let title = "";
    if (style === styles.concerto) {
        title +=`${instrument} Concerto`;
    }
    else {
        title += style;
    }
    if (number !== 0) {
        title += ` No. ${number}`;
    }
    return title;
}


export enum GroupByStatement {
    GENRE = "Genre",
    COMPOSER = "Composer",
    TIER = "Tier"
}

export function statement_to_field(statement: GroupByStatement): keyof Piece {
    switch (statement) {
        case GroupByStatement.GENRE: return "genre";
        case GroupByStatement.COMPOSER: return "composer";
        case GroupByStatement.TIER: return "tier";
    }
}