export enum Grade {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F"
}

export enum Composer {
    SIBELIUS = "Sibelius",
    BACH = "Bach",
    BEETHOVEN = "Beethoven",
    MOZART = "Mozart",
    HAYDN = "Haydn",
    VIVALDI = "Vivaldi",
    RACHMANINOFF = "Rachmaninoff",
    TCHAIKOVSKY = "Tchaikovsky",
}

export interface Recommendation {
    composer: string;
    title: string;
    grade: Grade;
    link: string;
}

export interface Genre {
    title: string;
    recommendations: Recommendation[];
}

const concertos: Genre = {
    title: "Concertos",
    recommendations: [
        {
            composer: Composer.SIBELIUS,
        title: "Violin Concerto",
        grade: Grade.A,
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        composer: Composer.TCHAIKOVSKY,
        title: "Violin Concerto",
        grade: Grade.A,
        link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ]
}

const symphonies: Genre = {
    title: "Symphonies",
    recommendations: [
        {
            composer: Composer.TCHAIKOVSKY,
            title: "Symphony No. 5",
            grade: Grade.A,
            link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        }
    ]
}

export const recommendations: Genre[] = [
    concertos,
    symphonies
]