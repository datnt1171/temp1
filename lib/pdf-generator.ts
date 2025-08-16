import { TableRow } from '../types/production';

export const generatePDF = (tableData: TableRow[]) => {
  let htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>
        @page {
          size: A4 landscape;
          margin: 0mm;
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

        th, td {
          border: 1px solid #000;
          padding: 2px;
          text-align: left;
          vertical-align: top;
          word-wrap: break-word;
          font-size: 8px;
          break-inside: avoid;
        }
        
        th {
          font-weight: bold;
          text-align: center;
          background-color: #ffffffff;
        }
        
        tr {
          break-inside: avoid;
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
        <tr>
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
        </tr>
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