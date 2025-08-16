import React, { useState } from 'react';

// Types
interface Material {
  materialCode: string;
  materialName: string;
  ratio: string;
  qty: string;
  unit: string;
}

interface TableRow {
  stepname: string;
  viscosity_en: string;
  viscosity_vn: string;
  spec_en: string;
  spec_vn: string;
  holdTime: string;
  chemicalCode: string;
  consumption: string;
  materials: Material[];
}

// Sample data
const initialTableData: TableRow[] = [
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
];

interface ProductionTableProps {
  tableData?: TableRow[];
  onTableDataChange?: (data: TableRow[]) => void;
  stepOptions?: { stepname: string; viscosity_en: string; viscosity_vn: string; spec_en: string; spec_vn: string; holdTime: string; }[];
  chemicalOptions?: { chemicalCode: string; consumption: string; materials: Material[]; }[];
  onExportPDF?: () => void;
  onExportExcel?: () => void;
  editable?: boolean;
}

const ProductionTable1: React.FC<ProductionTableProps> = ({ 
  tableData: propTableData,
  onTableDataChange,
  stepOptions = [],
  chemicalOptions = [],
  onExportPDF,
  onExportExcel,
  editable = true
}) => {
  const [internalTableData, setInternalTableData] = useState<TableRow[]>(propTableData || initialTableData);
  
  // Use internal state if no external state management
  const tableData = propTableData || internalTableData;
  const setTableData = onTableDataChange || setInternalTableData;

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

  const updateField = (stepIndex: number, field: keyof TableRow, value: string) => {
    const newData = [...tableData];
    (newData[stepIndex] as any)[field] = value;
    setTableData(newData);
  };

  const updateMaterialField = (stepIndex: number, materialIndex: number, field: keyof Material, value: string) => {
    const newData = [...tableData];
    (newData[stepIndex].materials[materialIndex] as any)[field] = value;
    setTableData(newData);
  };

  const addMaterial = (stepIndex: number) => {
    const newData = [...tableData];
    newData[stepIndex].materials.push({
      materialCode: "",
      materialName: "",
      ratio: "",
      qty: "",
      unit: ""
    });
    setTableData(newData);
  };

  const deleteMaterial = (stepIndex: number, materialIndex: number) => {
    const newData = [...tableData];
    if (newData[stepIndex].materials.length > 1) {
      newData[stepIndex].materials = newData[stepIndex].materials.filter((_, i) => i !== materialIndex);
      setTableData(newData);
    }
  };

  const handleExportPDF = () => {
    if (onExportPDF) {
      onExportPDF();
    }
  };

  const handleExportExcel = () => {
    if (onExportExcel) {
      onExportExcel();
    }
  };

  const EditableCell = ({ value, onChange, type = "text" }: {
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "textarea";
  }) => {
    if (!editable) {
      return <span style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>{value}</span>;
    }

    if (type === "textarea") {
      return (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{ 
            width: '100%', 
            border: 'none', 
            background: 'transparent', 
            fontSize: 'inherit',
            resize: 'none',
            minHeight: '20px'
          }}
          rows={2}
        />
      );
    }

    return (
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ 
          width: '100%', 
          border: 'none', 
          background: 'transparent', 
          fontSize: 'inherit',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      />
    );
  };

  const StepNameSelect = ({ value, stepIndex }: { value: string; stepIndex: number }) => {
    if (!editable) {
      return <span>{value}</span>;
    }

    return (
      <select 
        value={value} 
        onChange={(e) => updateStepName(stepIndex, e.target.value)}
        style={{ width: '100%', border: 'none', background: 'transparent', fontSize: 'inherit' }}
      >
        <option value="">Select...</option>
        {stepOptions.map((option, index) => (
          <option key={index} value={option.stepname}>{option.stepname}</option>
        ))}
      </select>
    );
  };

  const ChemicalCodeSelect = ({ value, stepIndex }: { value: string; stepIndex: number }) => {
    if (!editable) {
      return <span>{value}</span>;
    }

    return (
      <select 
        value={value} 
        onChange={(e) => updateChemicalCode(stepIndex, e.target.value)}
        style={{ width: '100%', border: 'none', background: 'transparent', fontSize: 'inherit' }}
      >
        <option value="">Select...</option>
        {chemicalOptions.map((option, index) => (
          <option key={index} value={option.chemicalCode}>{option.chemicalCode}</option>
        ))}
      </select>
    );
  };

  const tableStyle = {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
  };

  return (
    <div style={tableStyle}>
      <style>
        {`
          .production-table {
            width: 100%;
            border-collapse: collapse;
          }

          .production-table th,
          .production-table td {
            border: 1px solid #000;
            padding: 2px;
            text-align: left;
            vertical-align: top;
            word-wrap: break-word;
            font-size: 8px;
            break-inside: avoid;
          }
          
          .production-table th {
            font-size: 18px;
            font-weight: bold;
            text-align: center;
          }
          
          .col-step { width: 2.39%; }
          .col-stepname { width: 4.14%; }
          .col-viscosity { width: 7.37%; }
          .col-spec { width: 7.37%; }
          .col-hold { width: 3.02%; }
          .col-chemical { width: 5.61%; }
          .col-consumption { width: 5.61%; }
          .col-material-code { width: 6.74%; }
          .col-material-name { width: 7.51%; }
          .col-ratio { width: 3.51%; }
          .col-qty { width: 3.51%; }
          .col-unit { width: 3.51%; }
          .col-check { width: 8%; }
          .col-action { width: 8%; }
          .col-signature { width: 4.49%; }

          .checkbox {
            display: inline-block;
            width: 12px;
            height: 12px;
            border: 1px solid #000;
            margin: 0 2px;
          }

          .merged-cell {
            vertical-align: middle;
            text-align: center;
          }

          .action-buttons {
            margin: 10px 0;
            display: flex;
            gap: 10px;
          }

          .action-button {
            padding: 8px 16px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
          }

          .action-button:hover {
            background: #0056b3;
          }

          .delete-button {
            background: #dc3545;
            padding: 2px 6px;
            font-size: 10px;
            margin-left: 4px;
          }

          .delete-button:hover {
            background: #c82333;
          }

          .add-material-button {
            background: #28a745;
            padding: 2px 6px;
            font-size: 10px;
            margin-left: 4px;
          }

          .add-material-button:hover {
            background: #218838;
          }
        `}
      </style>
      
      {editable && (
        <div className="action-buttons">
          <button className="action-button" onClick={addRow}>
            Add Row
          </button>
          {onExportPDF && (
            <button className="action-button" onClick={handleExportPDF}>
              Export PDF
            </button>
          )}
          {onExportExcel && (
            <button className="action-button" onClick={handleExportExcel}>
              Export Excel
            </button>
          )}
        </div>
      )}
      
      <table className="production-table">
        <thead>
          {/* Header Row 1: Product Title */}
          <tr>
            <th colSpan={18}>
              RH-OAK-51-1 ( BARON )
            </th>
          </tr>
          
          {/* Header Row 3: Content */}
          <tr>
            <td colSpan={3}>
              Name: RH-BARON BROWN FINISHED ON EU OAK 0.6mm<br />
              Sheen: 0+5-0<br />
              DFT:<br />
              Chemical: PU/NC<br />
              Substrate: OAK VENEER , OAK WOOD<br />
              Grain Filling: OPEN GRAIN<br />
              Developed/Duplicated by: MR LƯU
            </td>
            <td colSpan={1}>
              Chemical waste: 0%<br />
              <br />
              Conveyor speed: 1.5 METER PER 1 MINUTE
            </td>
            <td colSpan={3}>
              1. Wood substrate before finishing process should be below 10% MC<br />
              2. Last sanding on white wood should be grit #240<br />
              3. White wood surface must be free from grease, oil or other contamination. Please reject white wood with any defects.
            </td>
            <td colSpan={2}>
              With panel test: <span className="checkbox"></span><br />
              (Có mẫu test chuyền)<br />
              No panel test: <span className="checkbox"></span><br />
              (Không có mẫu test chuyền)<br />
              Testing: <span className="checkbox"></span><br />
              Chemical Yellowing: <span className="checkbox"></span>
            </td>
            <td colSpan={5}>
              4. Always ask TE-1 for advice in case of changing process mixing ratio, application amount, drying time, application method, must get approval form... If there is any changing.<br />
              5. Strictly follow the process, always refer to the PCP<br />
              6. Viscosity reading using NK2 cup standard.
            </td>
            <td colSpan={4} style={{ textAlign: 'center', verticalAlign: 'middle' }}>
              <strong>DAILY CHECK LIST</strong><br />
              (Kiểm tra hằng ngày)<br />
              Date: _______________
            </td>
          </tr>
          
          {/* Column Headers */}
          <tr style={{ fontWeight: 'bold' }}>
            <td className="col-step">Step</td>
            <td className="col-stepname">Step Name</td>
            <td className="col-viscosity">Viscosity & Wet Mill Thickness (EN)</td>
            <td className="col-viscosity">Viscosity & Wet Mill Thickness (VN)</td>
            <td className="col-spec">SPEC EN</td>
            <td className="col-spec">SPEC VN</td>
            <td className="col-hold">Hold Time (min)</td>
            <td className="col-chemical">Chemical Mixing Code</td>
            <td className="col-consumption">Consumption (per m2)</td>
            <td className="col-material-code">Material Code</td>
            <td className="col-material-name">Material Name</td>
            <td className="col-ratio">Ratio</td>
            <td className="col-qty">Qty (per m2)</td>
            <td className="col-unit">Unit</td>
            <td className="col-check">Check Result</td>
            <td className="col-action">Correct Action</td>
            <td className="col-signature">TE-1's Name & Signature</td>
            <td className="col-signature">Customer Signature</td>
          </tr>
        </thead>
        
        {/* Data Rows */}
        <tbody>
          {tableData.map((stepData, stepIndex) => {
            const materials = stepData.materials;
            const materialCount = materials.length;
            
            return materials.map((material, materialIndex) => {
              const isFirstMaterial = materialIndex === 0;
              
              return (
                <tr key={`${stepIndex}-${materialIndex}`}>
                  {isFirstMaterial && (
                    <>
                      <td className="merged-cell col-step" rowSpan={materialCount}>
                        {stepIndex + 1}
                        {editable && (
                          <button 
                            className="action-button delete-button" 
                            onClick={() => deleteRow(stepIndex)}
                            title="Delete Row"
                          >
                            ×
                          </button>
                        )}
                      </td>
                      <td className="merged-cell col-stepname" rowSpan={materialCount}>
                        <StepNameSelect value={stepData.stepname} stepIndex={stepIndex} />
                      </td>
                      <td className="merged-cell col-viscosity" rowSpan={materialCount}>
                        <EditableCell
                          value={stepData.viscosity_en}
                          onChange={(value) => updateField(stepIndex, 'viscosity_en', value)}
                        />
                      </td>
                      <td className="merged-cell col-viscosity" rowSpan={materialCount}>
                        <EditableCell
                          value={stepData.viscosity_vn}
                          onChange={(value) => updateField(stepIndex, 'viscosity_vn', value)}
                        />
                      </td>
                      <td className="merged-cell col-spec" rowSpan={materialCount}>
                        <EditableCell
                          value={stepData.spec_en}
                          onChange={(value) => updateField(stepIndex, 'spec_en', value)}
                        />
                      </td>
                      <td className="merged-cell col-spec" rowSpan={materialCount}>
                        <EditableCell
                          value={stepData.spec_vn}
                          onChange={(value) => updateField(stepIndex, 'spec_vn', value)}
                        />
                      </td>
                      <td className="merged-cell col-hold" rowSpan={materialCount}>
                        <EditableCell
                          value={stepData.holdTime}
                          onChange={(value) => updateField(stepIndex, 'holdTime', value)}
                        />
                      </td>
                      <td className="merged-cell col-chemical" rowSpan={materialCount}>
                        <ChemicalCodeSelect value={stepData.chemicalCode} stepIndex={stepIndex} />
                      </td>
                      <td className="merged-cell col-consumption" rowSpan={materialCount}>
                        <EditableCell
                          value={stepData.consumption}
                          onChange={(value) => updateField(stepIndex, 'consumption', value)}
                        />
                        {editable && (
                          <button 
                            className="action-button add-material-button" 
                            onClick={() => addMaterial(stepIndex)}
                            title="Add Material"
                          >
                            +
                          </button>
                        )}
                      </td>
                    </>
                  )}
                  <td className="col-material-code">
                    <EditableCell
                      value={material.materialCode}
                      onChange={(value) => updateMaterialField(stepIndex, materialIndex, 'materialCode', value)}
                    />
                    {editable && materials.length > 1 && (
                      <button 
                        className="action-button delete-button" 
                        onClick={() => deleteMaterial(stepIndex, materialIndex)}
                        title="Delete Material"
                      >
                        ×
                      </button>
                    )}
                  </td>
                  <td className="col-material-name">
                    <EditableCell
                      value={material.materialName}
                      onChange={(value) => updateMaterialField(stepIndex, materialIndex, 'materialName', value)}
                    />
                  </td>
                  <td className="col-ratio">
                    <EditableCell
                      value={material.ratio}
                      onChange={(value) => updateMaterialField(stepIndex, materialIndex, 'ratio', value)}
                    />
                  </td>
                  <td className="col-qty">
                    <EditableCell
                      value={material.qty}
                      onChange={(value) => updateMaterialField(stepIndex, materialIndex, 'qty', value)}
                    />
                  </td>
                  <td className="col-unit">
                    <EditableCell
                      value={material.unit}
                      onChange={(value) => updateMaterialField(stepIndex, materialIndex, 'unit', value)}
                    />
                  </td>
                  <td className="col-check">
                    <EditableCell
                      value=""
                      onChange={() => {}}
                    />
                  </td>
                  <td className="col-action">
                    <EditableCell
                      value=""
                      onChange={() => {}}
                    />
                  </td>
                  <td className="col-signature">
                    <EditableCell
                      value=""
                      onChange={() => {}}
                    />
                  </td>
                  <td className="col-signature">
                    <EditableCell
                      value=""
                      onChange={() => {}}
                    />
                  </td>
                </tr>
              );
            });
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductionTable1;