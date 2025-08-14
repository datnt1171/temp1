'use client'
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Combobox } from './ui/combobox';
import { Download, FileDown } from 'lucide-react';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

// Extend jsPDF type to include autoTable
declare module 'jspdf' {
  interface jsPDF {
    autoTable: typeof autoTable;
  }
}

// Sample data structure
const sampleData = [
  {
    step: "01",
    stepname: "Dry sanding carefully (Chà nhám cẩn thận)",
    viscosity_en: "",
    viscosity_vn: "",
    spec_en: "spec detail en",
    spec_vn: "spec detail vn",
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
    step: "02",
    stepname: "Sap stain (Tem màu)",
    viscosity_en: "",
    viscosity_vn: "",
    spec_en: "spec detail en1",
    spec_vn: "spec detail vn1",
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
  },
  {
    step: "03",
    stepname: "EQ stain (EQ màu)",
    viscosity_en: "abc",
    viscosity_vn: "abc",
    spec_en: "spec detail en2",
    spec_vn: "spec detail vn2",
    holdTime: "15",
    chemicalCode: "OAK:51.EQ",
    consumption: "100",
    materials: [
      {
        materialCode: "040-01-00312",
        materialName: "Blue crystal ST AIL 30TE - 18.00K",
        ratio: "0.02",
        qty: "0.011101",
        unit: "g"
      },
      {
        materialCode: "040-01-00310",
        materialName: "Yellow crystal ST AIY 30TE - 18.00K",
        ratio: "0.14",
        qty: "0.077709",
        unit: "g"
      },
      {
        materialCode: "040-08-00433",
        materialName: "Paint DM CONC 1021- 180.00K",
        ratio: "180",
        qty: "99.91119",
        unit: "g"
      }
    ]
  }
];



const ProductionTable = () => {
  const [data, setData] = useState(sampleData);
  
  // Options for dropdowns
  const stepOptions = data.map(item => ({
    value: item.step,
    label: item.stepname
  }));

  const chemicalOptions = [...new Set(data.map(item => item.chemicalCode))].map(code => ({
    value: code,
    label: code
  }));

  // Handle step selection change
interface Material {
    materialCode: string;
    materialName: string;
    ratio: string;
    qty: string;
    unit: string;
}

interface StepData {
    step: string;
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

interface Option {
    value: string;
    label: string;
}

const handleStepChange = (stepValue: string, rowIndex: number) => {
    const selectedStep = data.find((item: StepData) => item.step === stepValue);
    if (selectedStep) {
        const newData = [...data];
        newData[rowIndex] = {
            ...newData[rowIndex],
            ...selectedStep
        };
        setData(newData);
    }
};

  // Handle chemical code change
interface HandleChemicalChange {
    (chemicalValue: string, rowIndex: number): void;
}

const handleChemicalChange: HandleChemicalChange = (chemicalValue, rowIndex) => {
    const selectedStep = data.find((item: StepData) => item.chemicalCode === chemicalValue);
    if (selectedStep) {
        const newData = [...data];
        newData[rowIndex] = {
            ...newData[rowIndex],
            chemicalCode: selectedStep.chemicalCode,
            consumption: selectedStep.consumption,
            materials: selectedStep.materials
        };
        setData(newData);
    }
};

  // Export to Excel
  const exportToExcel = () => {
    const exportData = [];
    
    // Add title row
    exportData.push(['RH-OAK-51-1 ( BARON )', '', '', '', '', '', '', '', '', '', '', '']);
    
    // Add header rows
    exportData.push(['Header 1', '', '', 'Header 2', '', 'Header 3', 'Header 4', '', 'Header 5', 'Header 6', '', '']);
    exportData.push(['step', 'stepname', 'Viscosity & Wet Mill Thickness (EN)', 'Viscosity & Wet Mill Thickness (VN)', 'SPEC EN', 'SPEC VN', 'Hold Time (min)', 'Chemical Mixing Code', 'Consumption (per m2)', 'Material Code', 'Material Name', 'Ratio', 'Qty (per m2)', 'Unit']);

    // Add data rows
    data.forEach(step => {
      step.materials.forEach((material, materialIndex) => {
        if (materialIndex === 0) {
          // First material row with merged step data
          exportData.push([
            step.step,
            step.stepname,
            step.viscosity_en,
            step.viscosity_vn,
            step.spec_en,
            step.spec_vn,
            step.holdTime,
            step.chemicalCode,
            step.consumption,
            material.materialCode,
            material.materialName,
            material.ratio,
            material.qty,
            material.unit
          ]);
        } else {
          // Additional material rows
          exportData.push([
            '', '', '', '', '', '', '', '', '',
            material.materialCode,
            material.materialName,
            material.ratio,
            material.qty,
            material.unit
          ]);
        }
      });
    });

    // Add footer
    exportData.push(['PREPARED BY: FINISHING SPECIALIST SOBANG KENNETH JOHN FLORES', '', '', '', 'APPROVED BY: PAINT SUPPLIER TE-1', '', '', '', 'APPROVED BY: FINISHING MANAGER HÀ THỊ TRÂM ANH', '', '', '']);

    const ws = XLSX.utils.aoa_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Production Data');
    XLSX.writeFile(wb, 'production_data.xlsx');
  };

  // Export to PDF with page break control
  const exportToPDF = () => {
    const pdf = new jsPDF('l', 'mm', 'a4'); // Landscape mode
    
    // Title
    pdf.setFontSize(16);
    pdf.text('RH-OAK-51-1 ( BARON )', 20, 20);
    
    let yPosition = 35;
    
    data.forEach((step, stepIndex) => {
      // Check if we need a new page (critical page break logic)
      const stepHeight = 20 + (step.materials.length * 8); // Estimate height needed
      if (yPosition + stepHeight > pdf.internal.pageSize.height - 30) {
        pdf.addPage();
        yPosition = 20;
      }
      
      // Step header
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'bold');
      pdf.text(`Step ${step.step}: ${step.stepname}`, 20, yPosition);
      yPosition += 10;
      
      // Step details
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10);
      pdf.text(`Chemical Code: ${step.chemicalCode} | Consumption: ${step.consumption} | Hold Time: ${step.holdTime}min`, 20, yPosition);
      yPosition += 8;
      
      // Materials table for this step
      const materialData = step.materials.map(material => [
        material.materialCode,
        material.materialName,
        material.ratio,
        material.qty,
        material.unit
      ]);
      
      autoTable(pdf, {
        head: [['Material Code', 'Material Name', 'Ratio', 'Qty (per m2)', 'Unit']],
        body: materialData,
        startY: yPosition,
        margin: { left: 20 },
        pageBreak: 'avoid', // Critical: avoid breaking within material table
        styles: { fontSize: 9 },
        headStyles: { fillColor: [240, 240, 240] }
      });
      
      // Use pdf.lastAutoTable.finalY to get the Y position after the table
      yPosition = (pdf as any).lastAutoTable.finalY + 15;
    });
    
    // Footer on last page
    pdf.setFontSize(10);
    pdf.text('PREPARED BY: FINISHING SPECIALIST', 20, yPosition + 10);
    pdf.text('SOBANG KENNETH JOHN FLORES', 20, yPosition + 18);
    
    pdf.text('APPROVED BY: PAINT SUPPLIER', 120, yPosition + 10);
    pdf.text('TE-1', 120, yPosition + 18);
    
    pdf.text('APPROVED BY: FINISHING MANAGER', 220, yPosition + 10);
    pdf.text('HÀ THỊ TRÂM ANH', 220, yPosition + 18);
    
    pdf.save('production_data.pdf');
  };

  return (
    <div className="w-full p-6 space-y-4">
      {/* Export buttons */}
      <div className="flex gap-2 mb-4">
        <Button onClick={exportToExcel} className="flex items-center gap-2">
          <FileDown className="w-4 h-4" />
          Export Excel
        </Button>
        <Button onClick={exportToPDF} className="flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export PDF
        </Button>
      </div>

      {/* Table */}
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          {/* Fixed Header */}
          <thead>
            <tr>
              <td colSpan={18} className="bg-blue-100 p-4 text-center font-bold border">
                RH-OAK-51-1 ( BARON )
              </td>
            </tr>
            <tr>
              <td colSpan={3} className="bg-gray-100 p-2 text-center border font-semibold">Header 1</td>
              <td colSpan={1} className="bg-gray-100 p-2 text-center border font-semibold">Header 2</td>
              <td colSpan={3} className="bg-gray-100 p-2 text-center border font-semibold">Header 3</td>
              <td colSpan={2} className="bg-gray-100 p-2 text-center border font-semibold">Header 4</td>
              <td colSpan={5} className="bg-gray-100 p-2 text-center border font-semibold">Header 5</td>
              <td colSpan={4} className="bg-gray-100 p-2 text-center border font-semibold">Header 6</td>
            </tr>
            <tr className="bg-gray-50">
              <th className="border p-2 text-sm">Step</th>
              <th className="border p-2 text-sm">Step Name</th>
              <th className="border p-2 text-sm">Viscosity EN</th>
              <th className="border p-2 text-sm">Viscosity VN</th>
              <th className="border p-2 text-sm">SPEC EN</th>
              <th className="border p-2 text-sm">SPEC VN</th>
              <th className="border p-2 text-sm">Hold Time</th>
              <th className="border p-2 text-sm">Chemical Code</th>
              <th className="border p-2 text-sm">Consumption</th>
              <th className="border p-2 text-sm">Material Code</th>
              <th className="border p-2 text-sm">Material Name</th>
              <th className="border p-2 text-sm">Ratio</th>
              <th className="border p-2 text-sm">Qty</th>
              <th className="border p-2 text-sm">Unit</th>
              <th className="border p-2 text-sm">Check Result</th>
              <th className="border p-2 text-sm">Correct Action</th>
              <th className="border p-2 text-sm">Te-1's Signature</th>
              <th className="border p-2 text-sm">Customer's Signature</th>
            </tr>
          </thead>

          {/* Dynamic Body */}
          <tbody>
            {data.map((step, stepIndex) => (
              <React.Fragment key={step.step}>
                {step.materials.map((material, materialIndex) => (
                  <tr key={`${step.step}-${materialIndex}`} className="hover:bg-gray-50">
                    {/* Merged cells only on first material row */}
                    {materialIndex === 0 && (
                      <>
                        <td rowSpan={step.materials.length} className="border p-2 text-center align-top">
                          <Combobox
                            options={stepOptions}
                            value={step.step}
                            onValueChange={(value) => handleStepChange(value, stepIndex)}
                            placeholder="Select step"
                          />
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 align-top">
                          {step.stepname}
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 align-top">
                          <Input
                            value={step.viscosity_en}
                            onChange={(e) => {
                              const newData = [...data];
                              newData[stepIndex].viscosity_en = e.target.value;
                              setData(newData);
                            }}
                            className="w-full"
                          />
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 align-top">
                          <Input
                            value={step.viscosity_vn}
                            onChange={(e) => {
                              const newData = [...data];
                              newData[stepIndex].viscosity_vn = e.target.value;
                              setData(newData);
                            }}
                            className="w-full"
                          />
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 align-top">
                          <Input
                            value={step.spec_en}
                            onChange={(e) => {
                              const newData = [...data];
                              newData[stepIndex].spec_en = e.target.value;
                              setData(newData);
                            }}
                            className="w-full"
                          />
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 align-top">
                          <Input
                            value={step.spec_vn}
                            onChange={(e) => {
                              const newData = [...data];
                              newData[stepIndex].spec_vn = e.target.value;
                              setData(newData);
                            }}
                            className="w-full"
                          />
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 text-center align-top">
                          {step.holdTime}
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 align-top">
                          <Combobox
                            options={chemicalOptions}
                            value={step.chemicalCode}
                            onValueChange={(value) => handleChemicalChange(value, stepIndex)}
                            placeholder="Select chemical"
                          />
                        </td>
                        <td rowSpan={step.materials.length} className="border p-2 text-center align-top">
                          {step.consumption}
                        </td>
                      </>
                    )}
                    
                    {/* Material data - no merge */}
                    <td className="border p-2">{material.materialCode}</td>
                    <td className="border p-2">{material.materialName}</td>
                    <td className="border p-2 text-center">{material.ratio}</td>
                    <td className="border p-2 text-center">{material.qty}</td>
                    <td className="border p-2 text-center">{material.unit}</td>
                    <td className="border p-2 text-center"></td>
                    <td className="border p-2 text-center"></td>
                    <td className="border p-2 text-center"></td>
                    <td className="border p-2 text-center"></td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>

          {/* Fixed Footer */}
          <tfoot>
            <tr>
              <td colSpan={4} className="border p-4 text-sm bg-gray-50">
                <strong>PREPARED BY: FINISHING SPECIALIST</strong><br />
                SOBANG KENNETH JOHN FLORES
              </td>
              <td colSpan={10} className="border p-4 text-sm bg-gray-50">
                <strong>APPROVED BY: PAINT SUPPLIER</strong><br />
                TE-1
              </td>
              <td colSpan={4} className="border p-4 text-sm bg-gray-50">
                <strong>APPROVED BY: FINISHING MANAGER</strong><br />
                HÀ THỊ TRÂM ANH
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* CSS for PDF page breaks */}
      <style jsx>{`
        @media print {
          .step-group {
            page-break-inside: avoid;
          }
          
          tfoot {
            page-break-inside: avoid;
          }
          
          thead {
            display: table-header-group;
          }
          
          tfoot {
            display: table-footer-group;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductionTable;