Based on https://stackoverflow.com/questions/60726873/queryfailederror-insert-or-update-on-table-graph-violates-foreign-key-constra

## Configuration

[The default port is 3000](https://github.com/mhcomp/db-repro/blob/master/src/main.ts#L22)

[Default database configuration](https://github.com/mhcomp/db-repro/blob/master/src/app.module.ts#L9)

## Running the app

```bash
$ npm install
$ npm run start:dev
```

---

## Possible fix:

**Graph entity**

Create a reference to the PK via `referencedColumnName: "id"`

```ts
@ManyToOne(() => GraphNode)
@JoinColumn({ name: "startNodeId", referencedColumnName: "id" })
public startNode?: GraphNode;
```

**Graph node entity**

Do the same for the successor graph node

```ts
@ManyToOne(() => GraphNode)
@JoinColumn({ name: "successorGraphNodeId", referencedColumnName: "id" })
public successorGraphNode?: GraphNode;
```

Also add the `Unique` decorator to the entity and mark the `id` field as unique

```ts
@Unique(["id"])
```
