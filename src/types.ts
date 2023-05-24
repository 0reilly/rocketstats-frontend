export interface PrettyVisitorStats {
    visitor_count: number;
    pageviews: PrettyPageview[];
    locations: PrettyLocation[];
    sources: PrettySource[];
}

export interface PrettyPageview {
    url: string;
    count: number;
}

export interface PrettyLocation {
    location: string;
    region: string;
    count: number;
}

export interface PrettySource {
    referrer: string;
    count: number;
}
