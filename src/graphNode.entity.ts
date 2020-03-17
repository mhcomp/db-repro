import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  PrimaryColumn
} from "typeorm";

import { Graph } from "./graph.entity";

@Entity()
export class GraphNode extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @PrimaryColumn("uuid")
  public graphId: string;

  @ManyToOne(() => Graph, { onDelete: "CASCADE" })
  @JoinColumn({ name: "graphId" })
  public graph: Graph;

  @Column({ nullable: true })
  public successorGraphNodeId?: string;

  @ManyToOne(() => GraphNode)
  @JoinColumn({ name: "successorGraphNodeId" })
  public successorGraphNode?: GraphNode;
}
