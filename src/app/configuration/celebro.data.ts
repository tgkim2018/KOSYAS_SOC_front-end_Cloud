/* Elasticsearch like Celebro */
export interface CelebroOverview_Data {
    node: number;
    indices: number;
    shards: number;
    docs: string;
    disk: string;
}

export interface CelebroOverview {
    error: string;
    data: CelebroOverview_Data;
}