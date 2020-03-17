import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app.module";
import { GraphsRepository } from "./graphs.repository";
import { GraphNodesRepository } from "./graphNodes.repository";
import { Graph } from "./graph.entity";
import { GraphNode } from "./graphNode.entity";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const graphsRepository: GraphsRepository = app.get(GraphsRepository);
  const graphNodesRepository: GraphNodesRepository = app.get(GraphNodesRepository);

  try {
    const graph: Graph = await graphsRepository.createGraph();
    const graphNode: GraphNode = await graphNodesRepository.createGraphNode(graph.id);
    await graphsRepository.updateStartNodeId(graph.id, graphNode.id);
  } catch (error) {
    throw error;
  }

  await app.listen(3000);
}
bootstrap();
