import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useMemo } from "react";

const Configuration: React.FC<ConfigurationProps> = ({ config }) => {
  const items = useMemo(
    () =>
      Object.entries(config).reduce<KeyValuePair<string>[]>(
        (previous, [key, value]) => [...previous, { key, value }],
        []
      ),
    [config]
  );

  return (
    <div>
      <h2 className="text-2xl font-semibold" id="configurations">
        Configuration
      </h2>
      <Table aria-labelledby="configurations" isStriped>
        <TableHeader>
          <TableColumn>Key</TableColumn>
          <TableColumn>Value</TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.key}>
              <TableCell>{item.key}</TableCell>
              <TableCell>{item.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Configuration;
