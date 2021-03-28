export interface Book {
    title: string;
    author?: string;
    link?: string;
}

export interface Course {
    link: string;
    description: string;
}

export interface Tool {
    link: string;
    description: string;
}

export interface Community {
    name: string;
    language?: string;
    link: string;
}

export interface PortalOrPodcast {
    type: 'portal' | 'podcast' | 'blog';
    description?: string;
    language?: string;
    link: string;
}

export interface Resources {
    books?: Book[];
    courses?: Course[];
    platforms?: string[];
    tools?: Tool[];
    communities?: Community[];
    portalsAndPodcasts?: PortalOrPodcast[];
    games?: string[];
    varia?: string[];
}
