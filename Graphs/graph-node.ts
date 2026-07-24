
class GraphNode {
    val: number;
    neighbors: GraphNode[];

    constructor(val: number) {
        this.val = val;
        this.neighbors = [];
    }

}