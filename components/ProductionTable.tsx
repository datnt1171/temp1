import React from 'react';
import { TableRow as TableRowType } from '../types/production';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

interface ProductionTableProps {
  tableData: TableRowType[];
  onUpdateStepName: (index: number, stepname: string) => void;
  onUpdateChemicalCode: (index: number, chemicalCode: string) => void;
  onDeleteRow: (index: number) => void;
}

export const ProductionTable: React.FC<ProductionTableProps> = ({
  tableData,
  onUpdateStepName,
  onUpdateChemicalCode,
  onDeleteRow
}) => (
  <div className="overflow-x-auto">
    <table className="min-w-full border-collapse border border-gray-300 text-sm">
      <TableHeader />
      <tbody>
        {tableData.map((row, rowIndex) => (
          <TableRow
            key={rowIndex}
            row={row}
            rowIndex={rowIndex}
            onUpdateStepName={onUpdateStepName}
            onUpdateChemicalCode={onUpdateChemicalCode}
            onDeleteRow={onDeleteRow}
          />
        ))}
      </tbody>
    </table>
  </div>
);