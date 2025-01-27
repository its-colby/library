export enum Tier {
    AMAZING = "Amazing (A)",
    PARTIALLY_AMAZING = "Partially Amazing (B)",
    NOTABLE = "Notable (C)",
    DEFICIENT = "Deficient (D)",
}

export const composers = {
    sibelius: "Sibelius",
    bach: "Bach",
    beethoven: "Beethoven",
    mozart: "Mozart",
    haydn: "Haydn",
    vivaldi: "Vivaldi",
    rachmaninoff: "Rachmaninoff",
    tchaikovsky: "Tchaikovsky",
    brahms: "Brahms",
    wieniawski: "Wieniawski",
    dvorak: "Dvorak",
    mendelssohn: "Mendelssohn",
    bruch: "Bruch",
    gang: "Gang",
    chopin: "Chopin",
    elgar: "Elgar",
    paganini: "Paganini",
    mahler: "Mahler",
    schumann: "Schumann",
    grieg: "Grieg",
    schubert: "Schubert",
    rimsky_korsakov: "Rimsky-Korsakov",
    kreisler: "Kreisler",
    liszt: "Liszt",
    debussy: "Debussy",
    saint_saens: "Saint-Saëns",
    satie: "Satie",
    vitali: "Vitali",
    sarasate: "Sarasate",
    barber: "Barber",
    casella: "Casella",
    albinoni: "Albinoni",
    rossini: "Rossini",
    verdi: "Verdi",
    tartini: "Tartini",
} as const;

export type Composer = typeof composers[keyof typeof composers];

export const genres = {
    concertos: "Concertos",
    symphonies: "Symphonies",
    miniatures: "Miniatures"
} as const;

export type Genre = typeof genres[keyof typeof genres];

export const instrumentations = {
    violin: "Violin",
    piano: "Piano",
    cello: "Cello",
    concertante: "Concertante",
    orchestra: "Orchestra",
    vocal: "Vocal"
} as const;

export type Instrumentation = typeof instrumentations[keyof typeof instrumentations];

export interface Piece {
    genre: Genre;
    instrumentation: Instrumentation;
    composer: Composer;
    title: string;
    tier: Tier;
    performance_link: string;
}

export enum GroupByStatement {
    GENRE = "Genre",
    INSTRUMENTATION = "Instrumentation",
    COMPOSER = "Composer",
    TIER = "Tier"
}

export function statement_to_field(statement: GroupByStatement): keyof Piece {
    switch (statement) {
        case GroupByStatement.GENRE: return "genre";
        case GroupByStatement.INSTRUMENTATION: return "instrumentation";
        case GroupByStatement.COMPOSER: return "composer";
        case GroupByStatement.TIER: return "tier";
    }
}

function map_symphony(pieces: Omit<Piece, "composer" | "genre" | "instrumentation">[]): Omit<Piece, "composer">[] {
    return pieces.map(piece => ({
        ...piece,
        genre: genres.symphonies,
        instrumentation: instrumentations.orchestra
    }));
}

function map_concerto(pieces: Omit<Piece, "composer" | "genre" | "instrumentation">[]): Omit<Piece, "composer">[] {
    return pieces.map(piece => ({
        ...piece,
        genre: genres.concertos,
        instrumentation: instrumentations.concertante
    }));
}

function add_composer(pieces: Omit<Piece, "composer">[], composer: Composer): Piece[] {
    return pieces.map(piece => ({
        ...piece,
        composer
    }));
}

function map_miniature(pieces: Omit<Piece, "composer" | "genre">[]): Omit<Piece, "composer">[] {
    return pieces.map(piece => ({
        ...piece,
        genre: genres.miniatures,
    }));
}

enum No { ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, TEN, TWENTY = 20, FORTY = 40 }

function concerto_title(instrumentation: Instrumentation, no: No) {
    return `${instrumentation} Concerto${no === No.ZERO ? "" : ` No. ${no}`}`;
}

function symphony_title(no: No) {
    return `Symphony No. ${no}`;
}

// ------------------------------------------------
// --------------------- ALL ----------------------
// ------------------------------------------------

export const pieces: Piece[] = []

// ------------------------------------------------
// ----------------- RACHMANINOFF -----------------
// ------------------------------------------------

const rachmaninoff_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.piano, No.ONE),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.TWO),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.THREE),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Rhapsody on a Theme of Paganini",
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const rachmaninoff_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.ONE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.THREE),
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const rachmaninoff_miniatures: Omit<Piece, "composer">[] = map_miniature([
    {
        title: "Prelude No. 5",
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        instrumentation: instrumentations.piano
    },
    {
        title: "Elegie Op. 3 No. 1",
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        instrumentation: instrumentations.piano
    },
    {
        title: "Prelude Op. 3 No. 2",
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        instrumentation: instrumentations.piano
    },
    {
        title: "Vocalise",
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        instrumentation: instrumentations.vocal
    },
    {
        title: "3 Nocturnes: III. Nocturne in C Minor",
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        instrumentation: instrumentations.piano
    },
]);

pieces.push(...add_composer(
    [...rachmaninoff_concertos, ...rachmaninoff_symphonies, ...rachmaninoff_miniatures],
    composers.rachmaninoff
));

// ------------------------------------------------
// ----------------- TCHAIKOVSKY ------------------
// ------------------------------------------------

const tchaikovsky_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ZERO),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.ONE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.TWO),
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const tchaikovsky_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.FIVE),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(
    [...tchaikovsky_concertos, ...tchaikovsky_symphonies],
    composers.tchaikovsky
));

// ------------------------------------------------
// ------------------- BRAHMS ---------------------
// ------------------------------------------------

const brahms_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ZERO),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.ONE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.TWO),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const brahms_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.THREE),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.FOUR),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(
    [...brahms_concertos, ...brahms_symphonies],
    composers.brahms
));

// ------------------------------------------------
// ------------------ SIBELIUS --------------------
// ------------------------------------------------

const sibelius_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ZERO),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const sibelius_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.TWO),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.FIVE),
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(
    [...sibelius_concertos, ...sibelius_symphonies],
    composers.sibelius
));

// ------------------------------------------------
// ------------------ BEETHOVEN -------------------
// ------------------------------------------------

const beethoven_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ZERO),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.FIVE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const beethoven_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.FIVE),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.SEVEN),
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.NINE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(
    [...beethoven_concertos, ...beethoven_symphonies],
    composers.beethoven
));

// ------------------------------------------------
// ------------------ WIENIAWSKI -------------------
// ------------------------------------------------

const wieniawski_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ONE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.violin, No.TWO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    
]);

pieces.push(...add_composer(wieniawski_concertos, composers.wieniawski));

// ------------------------------------------------
// ------------------- DVORAK ---------------------
// ------------------------------------------------

const dvorak_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ZERO),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.cello, No.ZERO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Piano Concerto",
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const dvorak_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: "Symphony No. 9",
        tier: Tier.AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(
    [...dvorak_concertos, ...dvorak_symphonies],
    composers.dvorak
));

// ------------------------------------------------
// ----------------- MENDELSSOHN ------------------
// ------------------------------------------------

const mendelssohn_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: "Violin Concerto in E Minor",
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.ONE),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.TWO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Violin Concerto in D Minor",
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const mendelssohn_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.FOUR),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(
    [...mendelssohn_concertos, ...mendelssohn_symphonies],
    composers.mendelssohn
));

// ------------------------------------------------
// -------------------- BRUCH ---------------------
// ------------------------------------------------

const bruch_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ONE),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.violin, No.TWO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.violin, No.THREE),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(bruch_concertos, composers.bruch));

// ------------------------------------------------
// --------------------- GANG ---------------------
// ------------------------------------------------

const gang_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: "Butterfly Lovers Violin Concerto",
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(gang_concertos, composers.gang));

// ------------------------------------------------
// -------------------- CHOPIN --------------------
// ------------------------------------------------

const chopin_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.piano, No.ONE),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: concerto_title(instrumentations.piano, No.TWO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(chopin_concertos, composers.chopin));

// ------------------------------------------------
// --------------------- ELGAR --------------------
// ------------------------------------------------

const elgar_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.cello, No.ZERO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: "Violin Concerto in B Minor",
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(elgar_concertos, composers.elgar));

// ------------------------------------------------
// -------------------- PAGANINI ------------------
// ------------------------------------------------

const paganini_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.violin, No.ONE),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(paganini_concertos, composers.paganini));

// ------------------------------------------------
// --------------------- MAHLER -------------------
// ------------------------------------------------

const mahler_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.ONE),
        tier: Tier.DEFICIENT,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.TWO),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: symphony_title(No.SIX),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(mahler_symphonies, composers.mahler));


// ------------------------------------------------
// --------------------- MOZART -------------------
// ------------------------------------------------

const mozart_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.piano, No.TWENTY),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

const mozart_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.FORTY),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer([...mozart_concertos, ...mozart_symphonies], composers.mozart));

// ------------------------------------------------
// --------------------- SCHUBERT -------------------
// ------------------------------------------------

const schubert_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: symphony_title(No.EIGHT),
        tier: Tier.PARTIALLY_AMAZING,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(schubert_symphonies, composers.schubert));

// ------------------------------------------------
// -------------------- KORSAKOV ------------------
// ------------------------------------------------

const korsakov_symphonies: Omit<Piece, "composer">[] = map_symphony([
    {
        title: "Scheherazade",
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(korsakov_symphonies, composers.rimsky_korsakov));

// ------------------------------------------------
// -------------------- SCHUMANN ------------------
// ------------------------------------------------

const schumann_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.piano, No.ZERO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(schumann_concertos, composers.schumann));

// ------------------------------------------------
// --------------------- GRIEG --------------------
// ------------------------------------------------

const grieg_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.piano, No.ZERO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(grieg_concertos, composers.grieg));

// ------------------------------------------------
// --------------------- HAYDN --------------------
// ------------------------------------------------

const haydn_concertos: Omit<Piece, "composer">[] = map_concerto([
    {
        title: concerto_title(instrumentations.cello, No.ZERO),
        tier: Tier.NOTABLE,
        performance_link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
]);

pieces.push(...add_composer(haydn_concertos, composers.haydn));