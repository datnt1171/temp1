"use client";

import { useCallback } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

pdfMake.vfs = pdfFonts.vfs;

type Material = {
  materialCode: string;
  materialName: string;
  ratio: string;
  qty: string;
  unit: string;
};

type StepData = {
  stepname: string;
  viscosity_en: string;
  viscosity_vn: string;
  spec_en: string;
  spec_vn: string;
  holdTime: string;
  chemicalCode: string;
  consumption: string;
  materials: Material[];
};

const sampleData: StepData[] = [
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
  },
  {
    stepname: "EQ stain (EQ màu)",
    viscosity_en: "",
    viscosity_vn: "",
    spec_en: "Sap stain overall surface then let dry for at least 15 minutes prior to next steps",
    spec_vn: "Tem màu toàn bộ bề mặt để khô 15 phút trước khi làm bước kế tiếp",
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
      },
      {
        materialCode: "040-08-00433",
        materialName: "Paint DM CONC 1021- 180.00K",
        ratio: "180",
        qty: "99.91119",
        unit: "g"
      }
    ]
  },
  {
    stepname: "Spray PU sealer wash coat 2 PASS (Phun PU sealer wash coat 2 PASS)",
    viscosity_en: "Viscosity @ 32-35 oC : 9.5 Sec. NK2 cup (direct) ; Wet film thickness : 50  m-1st coat, Let it dry for at least 60 minutes before sanding sponge & scotch brite",
    viscosity_vn: "Viscosity @ 32-35 oC : 9.5 Sec. NK2 cup (direct) ; Wet film thickness : 50  m-1st coat, Để khô 60 phút trước khi chà nhám & đẩy bùi nhùi",
    spec_en: "Dry sanding sponge grit #320 & soctch brite 3M P400, after dry sanding make sure to clean all dust properly from surface prior to next steps",
    spec_vn: "Chà nhám xốp #320 & đẩy bùi nhùi 3M P400, sau khi chà nhám & đẩy bùi nhùi vệ sinh bề  mặt trước khi làm bước kế tiếp",
    holdTime: "60",
    chemicalCode: "CVPU.3600.G",
    consumption: "200",
    materials: [
      {
        materialCode: "080-01-01422",
        materialName: "Sanding paper AP368 P320",
        ratio: "0.0125",
        qty: "0.001563",
        unit: "Pc"
      },
      {
        materialCode: "040-08-00433",
        materialName: "Paint DM CONC 1021- 180.00K",
        ratio: "180",
        qty: "99.91119",
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

const buildTableBody = (data: StepData[]) => {
  const body: any[] = [
  ];

  data.forEach((step) => {
    const rowCount = step.materials.length;

    step.materials.forEach((mat, i) => {
      const row: any[] = [];

      if (i === 0) {
        row.push({ rowSpan: rowCount });
        row.push({ text: step.stepname, rowSpan: rowCount });
        row.push({ text: step.viscosity_en, rowSpan: rowCount });
        row.push({ text: step.viscosity_vn, rowSpan: rowCount });
        row.push({ text: step.spec_en, rowSpan: rowCount });
        row.push({ text: step.spec_vn, rowSpan: rowCount });
        row.push({ text: step.holdTime, rowSpan: rowCount });
        row.push({ text: step.chemicalCode, rowSpan: rowCount });
        row.push({ text: step.consumption, rowSpan: rowCount });
      } else {
        for (let j = 0; j < 9; j++) row.push({});
      }

      row.push({ text: mat.materialCode });
      row.push({ text: mat.materialName });
      row.push({ text: mat.ratio });
      row.push({ text: mat.qty });
      row.push({ text: mat.unit });
      row.push({ text: mat.unit });

      body.push(row);
      
    });
    
  });
  console.log('body:' ,body)
  return body;
};

export default function PdfTestPage() {
  const handleExportPDF = useCallback(() => {
    const docDefinition: any = {
      pageSize: "A4",
      pageOrientation: "landscape",
      font: 'Roboto',
      fontSize: 6,
      content: [
        {
          table: {
            headerRows: 1,
            dontBreakRows: true, // keep each step together
            body: buildTableBody(sampleData)
          },
          layout: "lightHorizontalLines"
        }
      ]
    };
    
    pdfMake.createPdf(docDefinition).download("finishing_sheet.pdf");
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>PDF Export Test</h1>
      <button
        onClick={handleExportPDF}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
      >
        Export PDF
      </button>
    </div>
  );
}
