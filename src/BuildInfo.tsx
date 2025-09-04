import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useMemo } from "react";

const BuildInfo: React.FC<BuildInfoProps> = ({ buildVersion }) => {
  const items = useMemo(
    () => [
      {
        name: "Build Version",
        value: buildVersion,
      },
    ],
    [buildVersion]
  );

  return (
    <Table aria-label="Build Information">
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Value</TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BuildInfo;
