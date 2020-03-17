import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { GraphsRepository } from "./graphs.repository";
import { GraphNodesRepository } from "./graphNodes.repository";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "admin",
      database: "db-repro",
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
      synchronize: true
    }),
    TypeOrmModule.forFeature([GraphsRepository, GraphNodesRepository])
  ]
})
export class AppModule {}
