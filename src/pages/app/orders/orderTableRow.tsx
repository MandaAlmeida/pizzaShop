import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";

import { ArrowRight, X } from "lucide-react";
import { OrderDetails } from "./orderDetails";

// interface OrderTableRowProps{

// }

export function OrderTableRow() {
  return (
    <TableRow>
      <TableCell>
        <OrderDetails />
      </TableCell>
      <TableCell className="font-mono text-xs font-medium"></TableCell>
      <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
      <TableCell>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-slate-400" />
          <span>Pendente</span>
        </div>
      </TableCell>
      <TableCell className="font-medium">Amanda Almeida</TableCell>
      <TableCell className="font-medium">R$10,00</TableCell>
      <TableCell>
        <Button variant="outline" size="sm">
          <ArrowRight className="mr-2 h-3 w-3" />
          Aprovar
        </Button>
      </TableCell>
      <TableCell>
        <Button variant="ghost" size="sm">
          <X className="mr-2 h-3 w-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  );
}
