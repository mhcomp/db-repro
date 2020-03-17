import { EntityRepository, Repository, UpdateResult } from "typeorm";

import { Graph } from "./graph.entity";

@EntityRepository(Graph)
export class GraphsRepository extends Repository<Graph> {
  public createGraph(startNodeId?: string): Promise<Graph> {
    const graph: Graph = new Graph();
    graph.startNodeId = startNodeId;
    return graph.save();
  }

  public updateStartNodeId(graphId: string, startNodeId: string): Promise<UpdateResult> {
    return this.update(graphId, {
      startNodeId
    });
  }
}
