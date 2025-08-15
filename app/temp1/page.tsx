'use client'
import React from 'react';

// Sample data structure
const sampleData = [
  {
    step: "01",
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
    step: "02",
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
    step: "03",
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
      }
    ]
  },
  {
    step: "04",
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
      }
    ]
  },
  {
    step: "03",
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
      }
    ]
  },
  {
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
    stepname: "EQ stain (EQ màu)",
    viscosity_en: "",
    viscosity_vn: "",
    spec_en: "Sap stain overall surface then let dry for at least 15 minutes prior to next steps Sap stain overall surface then let dry for at least 15 minutes prior to next steps",
    spec_vn: "Tem màu toàn bộ bề mặt để khô 15 phút trước khi làm bước kế tiếp Sap stain overall surface then let dry for at least 15 minutes prior to next steps",
    holdTime: "15",
    chemicalCode: "OAK:51.EQ",
    consumption: "100",
    materials: [
      {
        materialCode: "040-01-00312",
        materialName: "Sap stain overall surface then let dry for at least 15 minutes prior to next steps",
        ratio: "0.02",
        qty: "0.011101",
        unit: "g"
      },
      {
        materialCode: "040-01-00310",
        materialName: "Sap stain overall surface then let dry for at least 15 minutes prior to next stepsSap stain overall surface then let dry for at least 15 minutes prior to next steps",
        ratio: "0.14",
        qty: "0.077709",
        unit: "g"
      },
      {
        materialCode: "040-08-00433",
        materialName: "Sap stain overall surface then let dry for at least 15 minutes prior to next stepsSap stain overall surface then let dry for at least 15 minutes prior to next steps",
        ratio: "180",
        qty: "99.91119",
        unit: "g"
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },{
    step: "03",
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
      }
    ]
  },
];

const PDFExportComponent = () => {
  const generatePDF = () => {
    // Create HTML content for PDF
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

    sampleData.forEach((stepData, stepIndex) => {
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

    // Create and download PDF
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
    <div className="p-6 max-w-2xl mx-auto">
      <div className="space-y-4">
        <button
          onClick={generatePDF}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Print/Save as PDF
        </button>
      </div>
    </div>
  );
};

export default PDFExportComponent;