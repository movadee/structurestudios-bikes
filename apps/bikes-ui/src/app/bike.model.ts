export interface Bike {
  articleCompleteInfo: ArticleCompleteInfo;
  engineAndTransmission: EngineAndTransmission;
  chassisSuspensionBrakesAndWheels?: ChassisSuspensionBrakesAndWheels;
  physicalMeasuresAndCapacities: PhysicalMeasuresAndCapacities;
  otherSpecifications: OtherSpecifications;
}
export interface ArticleCompleteInfo {
  articleID: number;
  makeName: string;
  modelName: string;
  categoryName: string;
  yearName: number;
  price?: string;
  image?: string;
  [key: string]: any;
}
export interface EngineAndTransmission {
  displacementName?: string;
  engineTypeName?: string;
  engineDetailsName?: string;
  powerName?: string;
  torqueName?: string;
  compressionName?: string;
  boreXStrokeName?: string;
  valvesPerCylinderName?: string;
  fuelSystemName?: string;
  lubricationSystemName?: string;
  coolingSystemName?: string;
  gearboxName?: string;
  transmissionTypeFinalDriveName?: string;
  clutchName?: string;
  drivelineName?: string;
  exhaustSystemName?: string;
  ignitionName?: string | null;
  [key: string]: any;
}
export interface ChassisSuspensionBrakesAndWheels {
  frameTypeName?: string;
  frontBrakesName?: string;
  frontBrakesDiameterName?: string;
  frontSuspensionName?: string;
  frontTyreName?: string;
  frontWheelTravelName?: string | null;
  rakeName?: string;
  rearBrakesName?: string;
  rearBrakesDiameterName?: string;
  rearSuspensionName?: string;
  rearTyreName?: string;
  rearWheelTravelName?: string | null;
  trailName?: string;
  wheelsName?: string | null;
  [key: string]: any;
}
export interface PhysicalMeasuresAndCapacities {
  dryWeightName?: string | null;
  fuelCapacityName?: string;
  overallHeightName?: string | null;
  overallLengthName?: string;
  overallWidthName?: string | null;
  powerWeightRatioName?: string | null;
  reserveFuelCapacityName?: string;
  seatHeightName?: string;
  [key: string]: any;
}
export interface OtherSpecifications {
  colorOptionsName?: string;
  commentsName?: string | null;
  factoryWarrantyName?: string | null;
  starterName?: string;
  [key: string]: any;
}

export interface BikeModel {
  id: number;
  name: string;
}
