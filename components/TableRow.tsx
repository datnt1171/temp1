import React from 'react';
import { Trash2 } from 'lucide-react';
import { TableRow as TableRowType } from '../types/production';
import { stepOptions, chemicalOptions } from '../data/production-data';

interface TableRowProps {
  row: TableRowType;
  rowIndex: number;
  onUpdateStepName: (index: number, stepname: string) => void;
  onUpdateChemicalCode: (index: number, chemicalCode: string) => void;
  onDeleteRow: (index: number) => void;
}

export const TableRow: React.FC<TableRowProps> = ({
  row,
  rowIndex,
  onUpdateStepName,
  onUpdateChemicalCode,
  onDeleteRow
}) => (
  <>
    {row.materials.map((material, materialIndex) => (
      <tr key={`${rowIndex}-${materialIndex}`} className="hover:bg-gray-50">
        {materialIndex === 0 && (
          <>
            <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
              {rowIndex + 1}
            </td>
            <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
              <select
                value={row.stepname}
                onChange={(e) => onUpdateStepName(rowIndex, e.target.value)}
                className="w-full p-1 border rounded text-xs"
              >
                <option value="">Select step...</option>
                {stepOptions.map((step, idx) => (
                  <option key={idx} value={step.stepname}>
                    {step.stepname}
                  </option>
                ))}
              </select>
            </td>
            <td className="border border-gray-300 px-2 py-1 text-xs" rowSpan={row.materials.length}>
              {row.viscosity_en}
            </td>
            <td className="border border-gray-300 px-2 py-1 text-xs" rowSpan={row.materials.length}>
              {row.viscosity_vn}
            </td>
            <td className="border border-gray-300 px-2 py-1 text-xs max-w-xs" rowSpan={row.materials.length}>
              <div className="truncate" title={row.spec_en}>
                {row.spec_en}
              </div>
            </td>
            <td className="border border-gray-300 px-2 py-1 text-xs max-w-xs" rowSpan={row.materials.length}>
              <div className="truncate" title={row.spec_vn}>
                {row.spec_vn}
              </div>
            </td>
            <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
              {row.holdTime}
            </td>
            <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
              <select
                value={row.chemicalCode}
                onChange={(e) => onUpdateChemicalCode(rowIndex, e.target.value)}
                className="w-full p-1 border rounded text-xs"
              >
                <option value="">Select chemical...</option>
                {chemicalOptions.map((chem, idx) => (
                  <option key={idx} value={chem.chemicalCode}>
                    {chem.chemicalCode}
                  </option>
                ))}
              </select>
            </td>
            <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
              {row.consumption}
            </td>
          </>
        )}
        <td className="border border-gray-300 px-2 py-1 text-xs">
          {material.materialCode}
        </td>
        <td className="border border-gray-300 px-2 py-1 text-xs">
          {material.materialName}
        </td>
        <td className="border border-gray-300 px-2 py-1">
          {material.ratio}
        </td>
        <td className="border border-gray-300 px-2 py-1">
          {material.qty}
        </td>
        <td className="border border-gray-300 px-2 py-1">
          {material.unit}
        </td>
        {materialIndex === 0 && (
          <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
            <button
              onClick={() => onDeleteRow(rowIndex)}
              className="text-red-600 hover:text-red-800 p-1"
              title="Delete row"
            >
              <Trash2 size={16} />
            </button>
          </td>
        )}
      </tr>
    ))}
  </>
);