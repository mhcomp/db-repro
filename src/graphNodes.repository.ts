import { EntityRepository, Repository } from "typeorm";

import { GraphNode } from "./graphNode.entity";

@EntityRepository(GraphNode)
export class GraphNodesRepository extends Repository<GraphNode> {
  public createGraphNode(
    graphId: string,
    successorGraphNodeId?: string
  ): Promise<GraphNode> {
    const graphNode: GraphNode = new GraphNode();
    graphNode.graphId = graphId;
    graphNode.successorGraphNodeId = successorGraphNodeId;

    return graphNode.save();
  }
}
