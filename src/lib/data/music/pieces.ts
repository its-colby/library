import { type Piece, styles, genres, instruments, augment_map, make_title } from "./types";
import { composers, performers, conductors } from "./people";

export const pieces: Piece[] = []

// ------------------------------------------------
// ----------------- RACHMANINOFF -----------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.rachmaninoff, 
    amazing: [
        {
            title: make_title(styles.concerto, 2, instruments.piano),
            performer: performers.krystian_zimerman,
            link: "https://youtu.be/DZTAXk2NOdc"
        },
        {
            title: make_title(styles.concerto, 3, instruments.piano),
            performer: performers.khatia_buniatishvili,
            link: "https://youtu.be/TLpufG9s0QY"
        }
    ],
    notable: [
        {
            title: make_title(styles.concerto, 1, instruments.piano),
            performer: performers.anna_fedorova,
            link: "https://youtu.be/y6EX3t2Mdnw"
        },
        {
            title: "Rhapsody on a Theme of Paganini",
            performer: performers.anna_fedorova,
            link: "https://youtu.be/ppJ5uITLECE"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.rachmaninoff, 
    partially_amazing: [
        {
            title: make_title(styles.symphony, 1),
            link: "https://youtu.be/Zr-ifrS5Qq4"
        },
    ],
    notable: [
        {
            title: make_title(styles.symphony, 2),
            link: "https://youtu.be/QBy_ACHvEJs"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.rachmaninoff, 
    amazing: [
        {
            title: "Prelude No. 5",
            performer: performers.yuja_wang,
            link: "https://youtu.be/GhBXx-2PadM"
        },
        {
            title: "Elegie Op. 3 No. 1",
            performer: performers.nikolai_lugansky,
            link: "https://youtu.be/nFcuZK_Xu7c"
        },
    ],
    partially_amazing: [
        {
            title: "Vocalise",
            link: "https://youtu.be/DuBexGEe1S4"
        },
    ],
    notable: [
        {
            title: "Prelude Op. 3 No. 2",
            performer: performers.evgeny_kissin,
            link: "https://youtu.be/SCm9O2KNEX4"
        },
        {
            title: "Liebeslied",
            link: "https://youtu.be/U6MjjfIHA1M"
        },
        {
            title: "Italian Polka",
            link: "https://youtu.be/YmSDDslA__M"
        },
    ],
    deficient: [
        { title: "3 Nocturnes: III. Nocturne in C Minor" }
    ]
}));

// ------------------------------------------------
// ----------------- TCHAIKOVSKY ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.tchaikovsky, 
    amazing: [
        {
            title: make_title(styles.concerto, 0, instruments.violin),
            performer: performers.hillary_hahn,
            link: "https://youtu.be/QAsZMcX5Zoc?list=PLCl1gj_1TbZQbmFyeRfvgzs0-ppZNNyXF"
        },
        {
            title: make_title(styles.concerto, 1, instruments.piano),
            performer: performers.daniel_barenboim,
            link: "https://youtu.be/yYOOoba2zvU"
        },
    ],
    deficient: [
        { title: make_title(styles.concerto, 2, instruments.piano) },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.tchaikovsky, 
    amazing: [
        {
            title: make_title(styles.symphony, 5),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/a_B02BZp-5Y"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.tchaikovsky, 
    amazing: [
        {
            title: "Romeo & Juliet Overture",
            link: "https://youtu.be/_Od7gx3Dc-U"
        },
        {
            title: "1812 Overture",
            link: "https://youtu.be/VbxgYlcNxE8"
        },
    ],
    notable: [
        {
            title: "Italian Capriccio",
            link: "https://youtu.be/Ce5qmAj9XX4"
        },
        {
            title: "Serenade for Strings",
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/CSu86-1BruE"
        },
        {
            title: "Sentimental Waltz",
            link: "https://youtu.be/rUuusqy50yk"
        },
    ]
}));

// ------------------------------------------------
// ------------------- BRAHMS ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.brahms, 
    amazing: [
        {
            title: make_title(styles.concerto, 0, instruments.violin),
            performer: performers.bomsori_kim,
            link: "https://youtu.be/EQiYR-ZCzAI"
        },
        {
            title: make_title(styles.concerto, 2, instruments.piano),
            performer: performers.krystian_zimerman,
            link: "https://youtu.be/y4YqWXmF9Dg"
        },
    ],
    partially_amazing: [
        {
            title: make_title(styles.concerto, 1, instruments.piano),
            performer: performers.krystian_zimerman,
            link: "https://youtu.be/arKoBwtmuX0"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.brahms, 
    amazing: [
        {
            title: make_title(styles.symphony, 3),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/u68ETRjNQME"
        },
    ],
    partially_amazing: [
        {
            title: make_title(styles.symphony, 4),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/o69YVL_XKJo"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.brahms, 
    notable: [
        {
            title: "Hungarian Dance No. 1",
            conductor: conductors.gustavo_dudamel,
            link: "https://youtu.be/3X1P6yxlwmc"
        },
        {
            title: "Hungarian Dance No. 5",
            conductor: conductors.gustavo_dudamel,
            link: "https://youtu.be/ynCEvFaJCZg"
        },
    ]
}));

// ------------------------------------------------
// ------------------ SIBELIUS --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.sibelius, 
    amazing: [
        {
            title: make_title(styles.concerto, 0, instruments.violin),
            performer: performers.ray_chen,
            link: "https://youtu.be/3u-unvYedx8"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.sibelius, 
    partially_amazing: [
        {
            title: make_title(styles.symphony, 2),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/iXU8EXL7a_4"
        },
    ],
    deficient: [
        { title: make_title(styles.symphony, 5) }
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.sibelius, 
    partially_amazing: [
        {
            title: "13 Pieces No. 2",
            performer: performers.yuja_wang,
            link: "https://youtu.be/t222LmoZx-s"
        },
        {
            title: "The Spruce",
            link: "https://youtu.be/mnRXyuFTGqw"
        },
    ]
}));

// ------------------------------------------------
// ------------------ BEETHOVEN -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.beethoven, 
    partially_amazing: [
        {
            title: make_title(styles.concerto, 0, instruments.violin),
            performer: performers.itzhak_perlman,
            link: "https://youtu.be/cokCgWPRZPg"
        },
        {
            title: make_title(styles.concerto, 5, instruments.piano),
            performer: performers.krystian_zimerman,
            link: "https://youtu.be/uj8w0Sm7l-M"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.beethoven, 
    amazing: [
        {
            title: make_title(styles.symphony, 5),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/fuPrcnpIRx8"
        },
        {
            title: make_title(styles.symphony, 7),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/fWGCB81TFPQ"
        },
    ],
    partially_amazing: [
        {
            title: make_title(styles.symphony, 9),
            link: "https://youtu.be/QkQapdgAa7o"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.beethoven, 
    notable: [
        {
            title: "Bagatelle No. 25",
            performer: performers.lang_lang,
            link: "https://youtu.be/s71I_EWJk7I"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.beethoven, 
    notable: [
        {
            title: "Egmont Overture",
            link: "https://youtu.be/pkxXFLRmqvw",
        },
        {
            title: "Piano Sonata No. 14",
            performer: performers.daniel_barenboim,
            link: "https://youtu.be/rlJHNufol8Q",
        },
    ]
}));

// ------------------------------------------------
// ------------------ WIENIAWSKI -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.wieniawski, 
    partially_amazing: [
        {
            title: make_title(styles.concerto, 1, instruments.violin),
            performer: performers.ray_chen,
            link: "https://youtu.be/Bt-QwrR-Pjw"
        },
    ],
    notable: [
        {
            title: make_title(styles.concerto, 2, instruments.violin),
            performer: performers.bomsori_kim,
            link: "https://youtu.be/T7KNd6W5OXo"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.wieniawski, 
    partially_amazing: [
        {
            title: "Polonaise de concert",
            performer: performers.bomsori_kim,
            link: "https://youtu.be/0UPrGttumdw"
        },
    ],
    notable: [
        {
            title: "Scherzo tarantelle",
            performer: performers.itzhak_perlman,
            link: "https://youtu.be/7K_DrXcHhLc"
        },
    ]
}));

// ------------------------------------------------
// ------------------- DVORAK ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.dvorak, 
    partially_amazing: [
        {
            title: make_title(styles.concerto, 0, instruments.violin),
            performer: performers.hillary_hahn,
            link: "https://youtu.be/E9Asw9Og0qg"
        },
    ],
    notable: [
        {
            title: make_title(styles.concerto, 0, instruments.cello),
            performer: performers.anastasia_kobekina,
            link: "https://youtu.be/wBFeeOt_SGY"
        },
    ],
    deficient: [
        { title: make_title(styles.concerto, 0, instruments.piano) }
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.dvorak, 
    amazing: [
        {
            title: make_title(styles.symphony, 9),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/jOofzffyDSA"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.dvorak, 
    notable: [
        {
            title: "Humoresque No. 7",
            performer: performers.itzhak_perlman,
            link: "https://youtu.be/JZnzjzjYkK0"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.dvorak, 
    partially_amazing: [
        {
            title: "Serenade for Strings",
            link: "https://youtu.be/CRcbDMg56yg"
        },
    ]
}));

// ------------------------------------------------
// ----------------- MENDELSSOHN ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.mendelssohn, 
    partially_amazing: [
        {
            title: make_title(styles.concerto, 0, instruments.violin),
            performer: performers.ray_chen,
            link: "https://youtu.be/I03Hs6dwj7E"
        },
    ],
    notable: [
        {
            title: make_title(styles.concerto, 1, instruments.piano),
            performer: performers.yuja_wang,
            link: "https://youtu.be/2GGx8TRWFVA"
        },
        {
            title: make_title(styles.concerto, 2, instruments.piano),
            link: "https://youtu.be/m_E2lyd07u8"
        },
    ],
    deficient: [
        { title: "Violin Concerto in D Minor" }
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.mendelssohn, 
    notable: [
        {
            title: make_title(styles.symphony, 4),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/ovPdGKXxmO4"
        },
    ]
}));

// ------------------------------------------------
// -------------------- BRUCH ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.bruch, 
    partially_amazing: [
        {
            title: make_title(styles.concerto, 1, instruments.violin),
            performer: performers.hillary_hahn,
            link: "https://youtu.be/KDJ6Wbzgy3E"
        },
    ],
    notable: [
        {
            title: make_title(styles.concerto, 2, instruments.violin),
            link: "https://youtu.be/kAm0mwcWTxE"
        },
        {
            title: make_title(styles.concerto, 3, instruments.violin),
            link: "https://youtu.be/hqPn2zJgc4c"
        },
    ]
}));

// ------------------------------------------------
// --------------------- GANG ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.gang, 
    partially_amazing: [
        {
            title: "Butterfly Lovers Violin Concerto",
            performer: performers.chloe_chua,
            link: "https://open.spotify.com/track/0pTfnpgeucANq8tIn7BCP5?si=cef6b2efb2eb44ba"
        },
    ]
}));

// ------------------------------------------------
// -------------------- CHOPIN --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.chopin, 
    notable: [
        {
            title: make_title(styles.concerto, 1, instruments.piano),
            link: "https://youtu.be/2bFo65szAP0"
        },
        {
            title: make_title(styles.concerto, 2, instruments.piano),
            performer: performers.arthur_rubinstein,
            link: "https://youtu.be/B3r4EgwLqMM"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.chopin, 
    amazing: [
        {
            title: "Nocturne No. 15",
            link: "https://youtu.be/E3qHO9aOQYM"
        },
        {
            title: "Nocturne No. 19",
            link: "https://youtu.be/Wx0jkZdQwN8"
        },
    ],
    partially_amazing: [
        {
            title: "Nocturne No. 2",
            performer: performers.valentina_lisitsa,
            link: "https://youtu.be/tV5U8kVYS88"
        },
    ],
    deficient: [
        { title: "Nocturne No. 10" }
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.chopin, 
    amazing: [
        {
            title: "Ballade No. 1",
            performer: performers.krystian_zimerman,
            link: "https://youtu.be/BSFNl4roGlI"
        },
    ],
    partially_amazing: [
        {
            title: "Fantaisie-Impromptu",
            link: "https://youtu.be/75x6DncZDgI"
        },
    ]
}));

// ------------------------------------------------
// --------------------- ELGAR --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.elgar, 
    notable: [
        {
            title: make_title(styles.concerto, 0, instruments.cello),
            link: "https://youtu.be/YFcZYGFskP8"
        },
    ],
    deficient: [
        { title: "Violin Concerto in B Minor" }
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.elgar, 
    notable: [
        {
            title: "Salut d'amour",
            link: "https://youtu.be/ecM7_3rs5gU"
        },
    ]
}));

// ------------------------------------------------
// -------------------- PAGANINI ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.paganini, 
    notable: [
        {
            title: make_title(styles.concerto, 1, instruments.violin),
            performer: performers.chloe_chua,
            link: "https://open.spotify.com/track/4EBjGh5QZzNfZD4Q9rktSh?si=5dce3ac255f64253"
        },
        {
            title: make_title(styles.concerto, 2, instruments.violin),
            link: "https://youtu.be/tLOciQwraZg"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.paganini, 
    partially_amazing: [
        {
            title: make_title(styles.caprice, 24),
            link: "https://youtu.be/UcL0IsklM3M"
        },
    ]
}));

// ------------------------------------------------
// --------------------- MAHLER -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.mahler, 
    partially_amazing: [
        {
            title: make_title(styles.symphony, 2),
            conductor: conductors.leonard_bernstein,
            link: "https://youtu.be/Oi6ZjkXFlcU"
        },
    ],
    notable: [
        {
            title: make_title(styles.symphony, 6),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/25tSq_dYL3c"
        },
    ],
    deficient: [
        { title: make_title(styles.symphony, 1) },
    ],
}));

// ------------------------------------------------
// --------------------- MOZART -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.mozart, 
    notable: [
        {
            title: make_title(styles.concerto, 20, instruments.piano),
            performer: performers.martha_argerich,
            link: "https://youtu.be/UGldgW6mDnY"
        },
    ],
    deficient: [
        { title: make_title(styles.concerto, 1, instruments.violin) },
        { title: make_title(styles.concerto, 2, instruments.violin) },
        { title: make_title(styles.concerto, 3, instruments.violin) },
        { title: make_title(styles.concerto, 4, instruments.violin) },
        { title: make_title(styles.concerto, 5, instruments.violin) },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.mozart, 
    notable: [
        {
            title: make_title(styles.symphony, 40),
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/QyQ-POuTNn8"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.mozart, 
    partially_amazing: [
        {
            title: "Eine kleine Nachtmusik",
            link: "https://youtu.be/r_oK8dKIBYc",
        },
        {
            title: "Requiem",
            link: "https://youtu.be/Dp2SJN4UiE4",
        },
    ],
    notable: [
        {
            title: "The Marriage of Figaro Overture",
            link: "https://youtu.be/ikQNFqVkNNc",
        },
    ]
}));

// ------------------------------------------------
// --------------------- SCHUBERT -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.schubert, 
    partially_amazing: [
        {
            title: make_title(styles.symphony, 8),
            link: "https://youtu.be/uWnKMzAedK4"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.schubert, 
    notable: [
        {
            title: "Serenade",
            link: "https://youtu.be/xpd5-KGcVmY",
        },
    ]
}));

// ------------------------------------------------
// -------------------- KORSAKOV ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.rimsky_korsakov, 
    notable: [
        {
            title: "Scheherazade",
            link: "https://youtu.be/zY4w4_W30aQ"
        },
    ]
}));

// ------------------------------------------------
// -------------------- SCHUMANN ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.schumann, 
    notable: [
        {
            title: make_title(styles.concerto, 0, instruments.piano),
            performer: performers.khatia_buniatishvili,
            link: "https://youtu.be/3jbHbDena_U"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.schumann, 
    deficient: [
        { title: "Romances for Oboe and Piano No. 2" }
    ]
}));

// ------------------------------------------------
// --------------------- GRIEG --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.grieg, 
    notable: [
        {
            title: make_title(styles.concerto, 0, instruments.piano),
            performer: performers.arthur_rubinstein,
            link: "https://youtu.be/I1Yoyz6_Los"
        },
    ]
}));

// ------------------------------------------------
// --------------------- HAYDN --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.haydn, 
    notable: [
        {
            title: make_title(styles.concerto, 0, instruments.cello),
            link: "https://youtu.be/JGBZIfaxfrM"
        },
    ]
}));


// ------------------------------------------------
// -------------------- KREISLER ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.kreisler, 
    amazing: [
        {
            title: "Praeludium & Allegro",
            link: "https://youtu.be/nyCjUPoAFX4",
        },
    ]
}));

// ------------------------------------------------
// -------------------- DEBUSSY -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.debussy, 
    partially_amazing: [
        {
            title: "Clair de Lune",
            link: "https://youtu.be/JGJPVl7iQUM",
        },
        {
            title: "Arabesque No. 1",
            link: "https://youtu.be/Yh36PaE-Pf0",
        },
    ],
    notable: [
        {
            title: "Reverie",
            link: "https://youtu.be/QRjllL-MP0U",
        },
    ],
    deficient: [
        { title: "Arabesque No. 2" }
    ]
}));

// ------------------------------------------------
// -------------------- LISZT ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.liszt, 
    partially_amazing: [
        {
            title: "Liebestraum No. 3",
            performer: performers.khatia_buniatishvili,
            link: "https://youtu.be/FZ651tNXp0Y",
        },
        {
            title: "Hungarian Rhapsody No. 2",
            performer: performers.valentina_lisitsa,
            link: "https://youtu.be/LdH1hSWGFGU",
        },
    ]
}));

// ------------------------------------------------
// ------------------ SAINT-SAENS -----------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.saint_saens, 
    deficient: [
        { title: make_title(styles.concerto, 1, instruments.violin) },
        { title: make_title(styles.concerto, 2, instruments.violin) },
        { title: make_title(styles.concerto, 3, instruments.violin) },
    ]
}));

pieces.push(...augment_map({
    genre: genres.symphony, 
    composer: composers.saint_saens, 
    deficient: [
        { title: make_title(styles.symphony, 3) },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.saint_saens, 
    notable: [
        {
            title: "The Swan",
            link: "https://youtu.be/3qrKjywjo7Q",
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.saint_saens, 
    partially_amazing: [
        {
            title: "Danse Macabre",
            link: "https://youtu.be/71fZhMXlGT4",
        },
        {
            title: "Rondo Capriccioso",
            performer: performers.ray_chen,
            link: "https://youtu.be/8UTq1eZrDkI",
        },
        {
            title: "Danse Bacchanale",
            link: "https://youtu.be/RcAGFgPCigw",
        },
    ]
}));

// ------------------------------------------------
// -------------------- SATIE ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.satie, 
    notable: [
        {
            title: "Gnossienne No. 1",
            link: "https://youtu.be/PLFVGwGQcB0",
        },
        {
            title: "Gymnopédie No. 1",
            link: "https://youtu.be/S-Xm7s9eGxU",
        },

    ],
    deficient: [
        { title: "Gnossienne No. 2" }
    ]
}));

// ------------------------------------------------
// ------------------- VIVALDI --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.baroque_concerto, 
    composer: composers.vivaldi, 
    amazing: [
        {
            title: "Concerto for Two Violins in A Minor, RV 522",
            performer: performers.sulic_and_hauser,
            link: "https://youtu.be/LSFzw4qc8M8",
        },
        {
            title: "Concerto for Four Violins and Cello in B Minor, RV 580",
            link: "https://youtu.be/075vhm-Om8Q",
        },
        {
            title: "Violin Concerto in A Minor, RV 356",
            link: "https://youtu.be/eTPiZup0QmM",
        },
    ],
    notable: [
        {
            title: "Concerto for 2 Cellos in Gm RV 531",
            link: "https://youtu.be/7BbpNukE8yY",
        },
        {
            title: "La Follia",
            link: "https://youtu.be/7v8zxoEoA_Q",
        },
        {
            title: "Winter",
            link: "https://youtu.be/ZPdk5GaIDjo",
        },
        {
            title: "Spring",
            link: "https://youtu.be/3LiztfE1X7E",
        },
        {
            title: "Summer",
            link: "https://youtu.be/RvDt_KtOzbc",
        },
            
    ],
    deficient: [
        { title: "Concerto for Violin, Cello in BfM RV 547" },
        { title: "Cello Concerto in Em RV 409" },
    ]
}));

// ------------------------------------------------
// -------------------- BACH ----------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.baroque_concerto, 
    composer: composers.bach, 
    notable: [
        {
            title: "Concerto for 2 Violins in Dm",
            performer: performers.sulic_and_hauser,
            link: "https://youtu.be/eNQt3hL1Kis",
        },
    ],
    deficient: [
        { title: "Violin Concerto in Am BWV 1041" },
    ]
}));

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.bach, 
    partially_amazing: [
        {
            title: "Cello Suite No. 1 in G Major, Prélude ",
            link: "https://youtu.be/1prweT95Mo0"
        },
        {
            title: "Prelude in C Major",
            performer: performers.lang_lang,
            link: "https://youtu.be/gVah1cr3pU0"
        },
    ]
}));

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.bach, 
    partially_amazing: [
        {
            title: "Air on the G String",
            performer: performers.stjepan_hauser,
            link: "https://youtu.be/CvglW3KNSsQ",
        },
    ],
    notable: [
        {
            title: "Toccata and Fugue in D Minor",
            link: "https://youtu.be/ho9rZjlsyYY",
        },
        {
            title: "Chaconne, Partita No. 2",
            performer: performers.hillary_hahn,
            link: "https://youtu.be/ngjEVKxQCWs",
        },
        {
            title: "Chaconne in D Minor, Busoni Arrangement",
            link: "https://youtu.be/Fu-9frVpssg",
        },
    ],
}));

// ------------------------------------------------
// ------------------- SARASATE -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.sarasate, 
    amazing: [
        {
            title: "Zigeunerweisen",
            performer: performers.sohyun_ko,
            link: "https://youtu.be/kmV2hj-I7Xo",
        },
        {
            title: "Carmen Fantasy",
            link: "https://youtu.be/sTSM71YUkVs",
        },
    ],
    notable: [
        {
            title: "Navarra",
            link: "https://youtu.be/m3BI7idvxgA",
        },
    ]
}));

// ------------------------------------------------
// ------------------- BARBER ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.barber, 
    amazing: [
        {
            title: "Adagio for Strings",
            performer: performers.stjepan_hauser,
            link: "https://youtu.be/Hc8gYoXkLZ4",
        },
    ]
}));

// ------------------------------------------------
// ------------------- VITALI ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.vitali, 
    amazing: [
        {
            title: "Chaconne in G Minor",
            performer: performers.ray_chen,
            link: "https://youtu.be/HvMYJmO5lrE",
        },
    ]
}));

// ------------------------------------------------
// ------------------- ALBINONI ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.albinoni, 
    partially_amazing: [
        {
            title: "Adagio",
            performer: performers.stjepan_hauser,
            link: "https://youtu.be/kn1gcjuhlhg",
        },
    ],
    notable: [
        {
            title: "Concerto Saint Marc",
            link: "https://youtu.be/btlK4cdBMZw",
        },
    ]
}));

// ------------------------------------------------
// ------------------ Casella ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.casella, 
    partially_amazing: [
        {
            title: "Paganiniana",
            performer: performers.hillary_hahn,
            link: "https://youtu.be/94EtgwmjJZ8",
        },
    ]
}));

// ------------------------------------------------
// ------------------- GERSHWIN ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.gershwin, 
    notable: [
        {
            title: "Rhapsody in Blue",
            performer: performers.leonard_bernstein,
            link: "https://youtu.be/cH2PH0auTUU",
        },
    ]
}));

// ------------------------------------------------
// ------------------- ROSSINI --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.rossini, 
    notable: [
        {
            title: "William Tell Overture",
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/awFoZIO0g1Q",
        },
    ]
}));

// ------------------------------------------------
// ------------------- TARTINI --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.tartini, 
    notable: [
        {
            title: "Devil's Trill Sonata",
            performer: performers.ray_chen,
            link: "https://youtu.be/ZkX8YyA4Wp4",
        },
    ]
}));

// ------------------------------------------------
// -------------------- VERDI ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.verdi, 
    notable: [
        {
            title: "Requiem",
            performer: performers.frankfurt_orchestra,
            link: "https://youtu.be/Nlq9lJRElBk",
        },
    ]
}));

// ------------------------------------------------
// ---------------- SHOSTAKOVICH ------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.concerto, 
    composer: composers.shostakovich, 
    deficient: [
        { title: make_title(styles.concerto, 1, instruments.violin) },
    ]
}));

// ------------------------------------------------
// ------------------- KORNGOLD -------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.korngold, 
    deficient: [
        { title: make_title(styles.concerto, 0, instruments.violin) },
    ]
}));

// ------------------------------------------------
// ------------------- WALDTEUFEL -----------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.waldteufel, 
    notable: [
        { 
            title: "Dolores Waltz", 
            link: "https://youtu.be/XFC5LFvErt8" 
        },
        { 
            title: "Skaters Waltz", 
            link: "https://youtu.be/wWuccFOyayU" 
        },
    ]
}));

// ------------------------------------------------
// ------------------- Marquez --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.marquez, 
    notable: [
        { 
            title: "Danzón No. 2", 
            conductor: conductors.gustavo_dudamel,
            link: "https://youtu.be/_1ynC1RB3kY" 
        },
    ]
}));

// ------------------------------------------------
// ------------------- Piazzolla --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.piazzolla, 
    notable: [
        { 
            title: "Libertango", 
            link: "https://youtu.be/H_-cfWEMDrU" 
        },
    ]
}));

// ------------------------------------------------
// ------------------- Abreu --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.abreu, 
    notable: [
        { 
            title: "Tico-Tico no Fubá", 
            link: "https://youtu.be/v_ZnJCMQqwo" 
        },
    ]
}));

// ------------------------------------------------
// -------------------- Holst ---------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.holst, 
    notable: [
        { 
            title: "Jupiter", 
            link: "https://youtu.be/Gu77Vtja30c" 
        },
    ],
    deficient: [
        { title: "Mars" },
    ]
}));

// ------------------------------------------------
// ------------------- Shatrov --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.shatrov, 
    notable: [
        { 
            title: "On the Hills of Manchuria", 
            link: "https://youtu.be/E-JHVnehtWw" 
        },
    ],
}));

// ------------------------------------------------
// ------------------- Torelli --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.torelli, 
    deficient: [
        { title: "Concerto in G minor" },
    ],
}));

// ------------------------------------------------
// ------------------- Monti --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.monti, 
    partially_amazing: [
        { 
            title: "Csardas",
            link: "https://youtu.be/JY4YiZB0mmk" 
        },
    ],
}));

// ------------------------------------------------
// ------------------- Massenet --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.massenet, 
    notable: [
        { 
            title: "Meditation from Thais",
            link: "https://youtu.be/7QtGOWemQhY" 
        },
    ],
}));

// ------------------------------------------------
// ------------------- Faure --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.faure, 
    notable: [
        { 
            title: "Elegie",
            link: "https://youtu.be/5kpPq0ITOs0" 
        },
    ],
}));

// ------------------------------------------------
// ------------------- Halvorsen --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.misc, 
    composer: composers.halvorsen, 
    partially_amazing: [
        { 
            title: "Passacaglia",
            performer: performers.itzhak_perlman,
            link: "https://youtu.be/JSghX91xdPc" 
        },
    ],
}));

// ------------------------------------------------
// ------------------- Chan --------------------
// ------------------------------------------------

pieces.push(...augment_map({
    genre: genres.miniature, 
    composer: composers.chan, 
    amazing: [
        { 
            title: "Secret Garden",
            link: "https://youtu.be/M_FZWAzcumw" 
        },
    ],
}));