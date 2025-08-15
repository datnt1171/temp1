'use client'
import React, { useState } from 'react';
import { Trash2, Plus, Download } from 'lucide-react';

const ProductionTable = () => {
  // Sample data for dropdowns
  const stepOptions = [
    {
      stepname: "Dry sanding carefully (Chà nhám cẩn thận)",
      viscosity_en: "",
      viscosity_vn: "",
      spec_en: "Dry sanding carefully 320-Grit overall surface . White wood should always be freshly sanded before start finishing, and must be free from grease, oil or other contaminatic, please reject white wood with any defects",
      spec_vn: "Chà nhám cẩn thận 320 toàn bộ bề mặt, vệ sinh bề mặt sạch sẽ trước khi làm bước kế tiếp",
      holdTime: "15"
    },
    {
      stepname: "Sap stain (Tem màu)",
      viscosity_en: "",
      viscosity_vn: "",
      spec_en: "EQ stain overall surface then let dry for at least 15 minutes prior to next steps",
      spec_vn: "EQ stain overall surface then let dry for at least 15 minutes prior to next steps",
      holdTime: "15"
    },
    {
      stepname: "Base coat (Lót)",
      viscosity_en: "18-22 sec",
      viscosity_vn: "18-22 giây",
      spec_en: "Apply base coat evenly",
      spec_vn: "Phủ lót đều",
      holdTime: "30"
    }
  ];

  const chemicalOptions = [
    {
      chemicalCode: "320-Grit",
      consumption: "0.125",
      materials: [
        {
          materialCode: "080-01-01422",
          materialName: "Sanding paper AP368 P320",
          ratio: "0.0125",
          qty: "0.001563",
          unit: "Pc"
        }
      ]
    },
    {
      chemicalCode: "OAK:51.ST",
      consumption: "100",
      materials: [
        {
          materialCode: "040-01-00311",
          materialName: "Orange crystal ST AIO 30TE - 18.00K",
          ratio: "0.14",
          qty: "0.0777",
          unit: "g"
        },
        {
          materialCode: "040-01-00308",
          materialName: "ST AIB 30TE black crystal - 18.00K",
          ratio: "0.04",
          qty: "0.0222",
          unit: "g"
        },
        {
          materialCode: "040-08-00433",
          materialName: "Paint DM CONC 1021- 180.00K",
          ratio: "180",
          qty: "99.9001",
          unit: "g"
        }
      ]
    },
    {
      chemicalCode: "BASE:22.BC",
      consumption: "120",
      materials: [
        {
          materialCode: "040-02-00156",
          materialName: "Base coat BC 22 - 20.00K",
          ratio: "100",
          qty: "120",
          unit: "g"
        }
      ]
    }
  ];

  const [tableData, setTableData] = useState([
    {
      stepname: "Dry sanding carefully (Chà nhám cẩn thận)",
      viscosity_en: "",
      viscosity_vn: "",
      spec_en: "Dry sanding carefully 320-Grit overall surface . White wood should always be freshly sanded before start finishing, and must be free from grease, oil or other contaminatic, please reject white wood with any defects",
      spec_vn: "Chà nhám cẩn thận 320 toàn bộ bề mặt, vệ sinh bề mặt sạch sẽ trước khi làm bước kế tiếp",
      holdTime: "15",
      chemicalCode: "320-Grit",
      consumption: "0.125",
      materials: [
        {
          materialCode: "080-01-01422",
          materialName: "Sanding paper AP368 P320",
          ratio: "0.0125",
          qty: "0.001563",
          unit: "Pc"
        }
      ]
    },
    {
      stepname: "Sap stain (Tem màu)",
      viscosity_en: "",
      viscosity_vn: "",
      spec_en: "EQ stain overall surface then let dry for at least 15 minutes prior to next steps",
      spec_vn: "EQ stain overall surface then let dry for at least 15 minutes prior to next steps",
      holdTime: "15",
      chemicalCode: "OAK:51.ST",
      consumption: "100",
      materials: [
        {
          materialCode: "040-01-00311",
          materialName: "Orange crystal ST AIO 30TE - 18.00K",
          ratio: "0.14",
          qty: "0.0777",
          unit: "g"
        },
        {
          materialCode: "040-01-00308",
          materialName: "ST AIB 30TE black crystal - 18.00K",
          ratio: "0.04",
          qty: "0.0222",
          unit: "g"
        },
        {
          materialCode: "040-08-00433",
          materialName: "Paint DM CONC 1021- 180.00K",
          ratio: "180",
          qty: "99.9001",
          unit: "g"
        }
      ]
    }
  ]);

  const addRow = () => {
    const newRow = {
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

  interface Material {
    materialCode: string;
    materialName: string;
    ratio: string;
    qty: string;
    unit: string;
  }

  interface ChemicalOption {
    chemicalCode: string;
    consumption: string;
    materials: Material[];
  }

  interface StepOption {
    stepname: string;
    viscosity_en: string;
    viscosity_vn: string;
    spec_en: string;
    spec_vn: string;
    holdTime: string;
  }

  interface TableRow extends StepOption {
    chemicalCode: string;
    consumption: string;
    materials: Material[];
  }

  const deleteRow = (index: number) => {
    const newData = tableData.filter((_, i) => i !== index);
    setTableData(newData);
  };

  interface UpdateStepNameFn {
    (index: number, stepname: string): void;
  }

  const updateStepName: UpdateStepNameFn = (index, stepname) => {
    const selectedStep = stepOptions.find((step: StepOption) => step.stepname === stepname);
    if (selectedStep) {
      const newData: TableRow[] = [...tableData];
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

  interface UpdateChemicalCodeFn {
    (index: number, chemicalCode: string): void;
  }

  const updateChemicalCode: UpdateChemicalCodeFn = (index, chemicalCode) => {
    const selectedChemical = chemicalOptions.find((chem: ChemicalOption) => chem.chemicalCode === chemicalCode);
    if (selectedChemical) {
      const newData: TableRow[] = [...tableData];
      newData[index] = {
        ...newData[index],
        chemicalCode: selectedChemical.chemicalCode,
        consumption: selectedChemical.consumption,
        materials: selectedChemical.materials
      };
      setTableData(newData);
    }
  };

  const generatePDF = () => {
    let htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          @page {
            size: A4 landscape;
            margin: 10mm;
          }
          
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          thead {
            display: table-header-group;
          }
          
          tbody {
            display: table-row-group;
          }
          
          th, td {
            border: 1px solid #000;
            padding: 2px;
            text-align: left;
            vertical-align: top;
            word-wrap: break-word;
            font-size: 8px;
            page-break-inside: avoid;
          }
          
          th {
            font-weight: bold;
            text-align: center;
            background-color: #f0f0f0;
          }
          
          tr {
            page-break-inside: avoid;
          }
          
          .col-step { width: 2.6%; }
          .col-stepname { width: 4.25%; }
          .col-viscosity { width: 8%; }
          .col-spec { width: 8%; }
          .col-hold { width: 3%; }
          .col-chemical { width: 6%; }
          .col-consumption { width: 5.4%; }
          .col-material-code { width: 6%; }
          .col-material-name { width: 7%; }
          .col-ratio { width: 3%; }
          .col-qty { width: 3%; }
          .col-unit { width: 3%; }
          .col-check { width: 7.4%; }
          .col-action { width: 7.4%; }
          .col-signature { width: 5%; }
        </style>
      </head>
      <body>
        <table>
          <thead>
            <tr>
              <th class="col-step">Step</th>
              <th class="col-stepname">Step Name</th>
              <th class="col-viscosity">Viscosity & Wet Mill Thickness (EN)</th>
              <th class="col-viscosity">Viscosity & Wet Mill Thickness (VN)</th>
              <th class="col-spec">SPEC EN</th>
              <th class="col-spec">SPEC VN</th>
              <th class="col-hold">Hold Time (min)</th>
              <th class="col-chemical">Chemical Mixing Code</th>
              <th class="col-consumption">Consumption (per m2)</th>
              <th class="col-material-code">Material Code</th>
              <th class="col-material-name">Material Name</th>
              <th class="col-ratio">Ratio</th>
              <th class="col-qty">Qty (per m2)</th>
              <th class="col-unit">Unit</th>
              <th class="col-check">Check Result</th>
              <th class="col-action">Correct Action</th>
              <th class="col-signature">TE-1's Name & Signature</th>
              <th class="col-signature">Customer Signature</th>
            </tr>
          </thead>
          <tbody>
    `;

    tableData.forEach((stepData, stepIndex) => {
      const materials = stepData.materials;
      const materialCount = materials.length;
      
      materials.forEach((material, materialIndex) => {
        const isFirstMaterial = materialIndex === 0;
        
        htmlContent += `
          <tr>
            ${isFirstMaterial ? `
              <td class="merged-cell col-step" rowspan="${materialCount}">${stepIndex + 1}</td>
              <td class="merged-cell col-stepname" rowspan="${materialCount}">${stepData.stepname}</td>
              <td class="merged-cell col-viscosity" rowspan="${materialCount}">${stepData.viscosity_en}</td>
              <td class="merged-cell col-viscosity" rowspan="${materialCount}">${stepData.viscosity_vn}</td>
              <td class="merged-cell col-spec" rowspan="${materialCount}">${stepData.spec_en}</td>
              <td class="merged-cell col-spec" rowspan="${materialCount}">${stepData.spec_vn}</td>
              <td class="merged-cell col-hold" rowspan="${materialCount}">${stepData.holdTime}</td>
              <td class="merged-cell col-chemical" rowspan="${materialCount}">${stepData.chemicalCode}</td>
              <td class="merged-cell col-consumption" rowspan="${materialCount}">${stepData.consumption}</td>
            ` : ''}
            <td class="col-material-code">${material.materialCode}</td>
            <td class="col-material-name">${material.materialName}</td>
            <td class="col-ratio">${material.ratio}</td>
            <td class="col-qty">${material.qty}</td>
            <td class="col-unit">${material.unit}</td>
            <td class="col-check"></td>
            <td class="col-action"></td>
            <td class="col-signature"></td>
            <td class="col-signature"></td>
          </tr>
        `;
      });
    });

    htmlContent += `
          </tbody>
        </table>
      </body>
      </html>
    `;

    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
        setTimeout(() => {
          printWindow.close();
        }, 1000);
      };
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        <button
          onClick={addRow}
          className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
        >
          <Plus size={16} />
          Add Row
        </button>
        <button
          onClick={generatePDF}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Download size={16} />
          Export PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-sm">
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
          <tbody>
            {tableData.map((row, rowIndex) => (
              row.materials.map((material, materialIndex) => (
                <tr key={`${rowIndex}-${materialIndex}`} className="hover:bg-gray-50">
                  {materialIndex === 0 && (
                    <>
                      <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
                        {rowIndex + 1}
                      </td>
                      <td className="border border-gray-300 px-2 py-1" rowSpan={row.materials.length}>
                        <select
                          value={row.stepname}
                          onChange={(e) => updateStepName(rowIndex, e.target.value)}
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
                          onChange={(e) => updateChemicalCode(rowIndex, e.target.value)}
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
                        onClick={() => deleteRow(rowIndex)}
                        className="text-red-600 hover:text-red-800 p-1"
                        title="Delete row"
                      >
                        <Trash2 size={16} />
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionTable;