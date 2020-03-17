import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn
} from "typeorm";

import { GraphNode } from "./graphNode.entity";

@Entity()
export class Graph extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  public id: string;

  @Column({ nullable: true })
  public startNodeId?: string;

  @ManyToOne(() => GraphNode)
  @JoinColumn({ name: "startNodeId" })
  public startNode: GraphNode;
}
