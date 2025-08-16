import React from 'react';

export const TableHeader: React.FC = () => (
  <thead className="bg-gray-100">
    <tr>
      <th className="border border-gray-300 px-2 py-1">Step</th>
      <th className="border border-gray-300 px-2 py-1">Step Name</th>
      <th className="border border-gray-300 px-2 py-1">Viscosity EN</th>
      <th className="border border-gray-300 px-2 py-1">Viscosity VN</th>
      <th className="border border-gray-300 px-2 py-1">Spec EN</th>
      <th className="border border-gray-300 px-2 py-1">Spec VN</th>
      <th className="border border-gray-300 px-2 py-1">Hold Time</th>
      <th className="border border-gray-300 px-2 py-1">Chemical Code</th>
      <th className="border border-gray-300 px-2 py-1">Consumption</th>
      <th className="border border-gray-300 px-2 py-1">Material Code</th>
      <th className="border border-gray-300 px-2 py-1">Material Name</th>
      <th className="border border-gray-300 px-2 py-1">Ratio</th>
      <th className="border border-gray-300 px-2 py-1">Qty</th>
      <th className="border border-gray-300 px-2 py-1">Unit</th>
      <th className="border border-gray-300 px-2 py-1">Actions</th>
    </tr>
  </thead>
);