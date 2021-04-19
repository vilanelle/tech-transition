interface Resource {
    title: string;
    description: string;
    url: string;
 }

export interface Resources {
    books: Resource[];
    courses: Resource[];
    platforms: Resource[];
    tools: Resource[];
    communities: Resource[];
    portalsAndPodcasts: Resource[];
    games: Resource[];
    varia: Resource[];
}
