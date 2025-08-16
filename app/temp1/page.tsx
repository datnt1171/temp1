'use client'

import React, { useState } from 'react';
import { TableRow } from '@/types/production';
import { stepOptions, chemicalOptions, initialTableData } from '@/data/production-data';
import { usePDFGenerator } from '@/hooks/usePDFGenerator';
import { ActionButtons } from '@/components/ActionButtons';
import { ProductionTable } from '@/components/ProductionTable';

const ProductionPage: React.FC = () => {
  const [tableData, setTableData] = useState<TableRow[]>(initialTableData);
  const { generatePDF } = usePDFGenerator();

  const addRow = () => {
    const newRow: TableRow = {
      stepname: "",
      viscosity_en: "",
      viscosity_vn: "",
      spec_en: "",
      spec_vn: "",
      holdTime: "",
      chemicalCode: "",
      consumption: "",
      materials: [
        {
          materialCode: "",
          materialName: "",
          ratio: "",
          qty: "",
          unit: ""
        }
      ]
    };
    setTableData([...tableData, newRow]);
  };

  const deleteRow = (index: number) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  const updateStepName = (index: number, stepname: string) => {
    const selectedStep = stepOptions.find((step) => step.stepname === stepname);
    if (selectedStep) {
      const newData = [...tableData];
      newData[index] = {
        ...newData[index],
        stepname: selectedStep.stepname,
        viscosity_en: selectedStep.viscosity_en,
        viscosity_vn: selectedStep.viscosity_vn,
        spec_en: selectedStep.spec_en,
        spec_vn: selectedStep.spec_vn,
        holdTime: selectedStep.holdTime
      };
      setTableData(newData);
    }
  };

  const updateChemicalCode = (index: number, chemicalCode: string) => {
    const selectedChemical = chemicalOptions.find((chem) => chem.chemicalCode === chemicalCode);
    if (selectedChemical) {
      const newData = [...tableData];
      newData[index] = {
        ...newData[index],
        chemicalCode: selectedChemical.chemicalCode,
        consumption: selectedChemical.consumption,
        materials: selectedChemical.materials
      };
      setTableData(newData);
    }
  };

  const handleExportPDF = () => {
    generatePDF(tableData);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Production Management</h1>
      
      <ActionButtons 
        onAddRow={addRow} 
        onExportPDF={handleExportPDF} 
      />

      <ProductionTable
        tableData={tableData}
        onUpdateStepName={updateStepName}
        onUpdateChemicalCode={updateChemicalCode}
        onDeleteRow={deleteRow}
      />
    </div>
  );
};

export default ProductionPage;