import React from 'react';
import { Plus, Download } from 'lucide-react';

interface ActionButtonsProps {
  onAddRow: () => void;
  onExportPDF: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onAddRow, onExportPDF }) => (
  <div className="mb-4 flex gap-2">
    <button
      onClick={onAddRow}
      className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
    >
      <Plus size={16} />
      Add Row
    </button>
    <button
      onClick={onExportPDF}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
    >
      <Download size={16} />
      Export PDF
    </button>
  </div>
);