export const composers = {
    albinoni: "Albinoni",
    bach: "Bach",
    barber: "Barber",
    beethoven: "Beethoven",
    brahms: "Brahms",
    bruch: "Bruch",
    casella: "Casella",
    chopin: "Chopin",
    debussy: "Debussy",
    dvorak: "Dvorak",
    elgar: "Elgar",
    gang: "Gang",
    gershwin: "Gershwin",
    grieg: "Grieg",
    haydn: "Haydn",
    kreisler: "Kreisler",
    liszt: "Liszt",
    mahler: "Mahler",
    mendelssohn: "Mendelssohn",
    mozart: "Mozart",
    paganini: "Paganini",
    rachmaninoff: "Rachmaninoff",
    rimsky_korsakov: "Rimsky-Korsakov",
    rossini: "Rossini",
    saint_saens: "Saint-Saëns",
    sarasate: "Sarasate",
    satie: "Satie",
    schubert: "Schubert",
    schumann: "Schumann",
    sibelius: "Sibelius",
    tartini: "Tartini",
    tchaikovsky: "Tchaikovsky",
    verdi: "Verdi",
    vitali: "Vitali",
    vivaldi: "Vivaldi",
    wieniawski: "Wieniawski",
    shostakovich: "Shostakovich",
    korngold: "Korngold",
    waldteufel: "Waldteufel",
    marquez: "Márquez",
    piazzolla: "Piazzolla",
    prokofiev: "Prokofiev",
    abreu: "Abreu",
    holst: "Holst",
    shatrov: "Shatrov",
    torelli: "Torelli",
    monti: "Monti",
    massenet: "Massenet",
    faure: "Faure",
    halvorsen: "Halvorsen",
    chan: "Chan",
} as const;

export const conductors = {
    daniel_barenboim: "Daniel Barenboim",
    leonard_bernstein: "Leonard Bernstein",
    gustavo_dudamel: "Gustavo Dudamel",
    unknown: "Unknown"
} as const;

export const performers = {
    // ----------------- PIANISTS -----------------
    yuja_wang: "Yuja Wang",
    leonard_bernstein: conductors.leonard_bernstein,
    daniel_barenboim: conductors.daniel_barenboim,
    martha_argerich: "Martha Argerich",
    evgeny_kissin: "Evgeny Kissin",
    arthur_rubinstein: "Arthur Rubinstein",
    vladimir_horowitz: "Vladimir Horowitz",
    lang_lang: "Lang Lang",
    krystian_zimerman: "Krystian Zimerman",
    khatia_buniatishvili: "Khatia Buniatishvili",
    anna_fedorova: "Anna Fedorova",
    nikolai_lugansky: "Nikolai Lugansky",
    vladimir_ashkenazy: "Vladimir Ashkenazy",
    valentina_lisitsa: "Valentina Lisitsa",
    // ----------------- VIOLINISTS ----------------
    hillary_hahn: "Hillary Hahn",
    ray_chen: "Ray Chen",
    sohyun_ko: "SoHyun Ko",
    chloe_chua: "Chloe Chua",
    itzhak_perlman: "Itzhak Perlman",
    joshua_bell: "Joshua Bell",
    maxim_vengerov: "Maxim Vengerov",
    bomsori_kim: "Bomsori Kim",
    // ----------------- CELLISTS ----------------
    anastasia_kobekina: "Anastasia Kobekina",
    sulic_and_hauser: "Sulic and Hauser",
    stjepan_hauser: "Stjepan Hauser",
    // ----------------- ORCHESTRAS -----------------
    frankfurt_orchestra: "Frankfurt Radio Symphony",
    // ----------------- OTHER -----------------
    unknown: conductors.unknown
} as const;