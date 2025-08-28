import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";

const StageDefinition: React.FC<StageDefinitionProps> = ({
  stageDefinition,
}) => {
  const items = Object.entries(stageDefinition).reduce<
    KeyValuePair<string[]>[]
  >((previous, [key, value]) => [...previous, { key, value }], []);

  return (
    <div>
      <h2 className="text-2xl font-semibold" id="stage-definitions">
        Stage Definitions
      </h2>
      <Table aria-labelledby="stage-definitions" isStriped>
        <TableHeader>
          <TableColumn>Key</TableColumn>
          <TableColumn>Value</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.key}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.value.join(", ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StageDefinition;
