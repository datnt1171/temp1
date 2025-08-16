import { StepOption, ChemicalOption } from '../types/production';

export const stepOptions: StepOption[] = [
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

export const chemicalOptions: ChemicalOption[] = [
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

export const initialTableData = [
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