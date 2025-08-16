export interface Material {
  materialCode: string;
  materialName: string;
  ratio: string;
  qty: string;
  unit: string;
}

export interface ChemicalOption {
  chemicalCode: string;
  consumption: string;
  materials: Material[];
}

export interface StepOption {
  stepname: string;
  viscosity_en: string;
  viscosity_vn: string;
  spec_en: string;
  spec_vn: string;
  holdTime: string;
}

export interface TableRow extends StepOption {
  chemicalCode: string;
  consumption: string;
  materials: Material[];
}