export interface Substance {
  getName(): string;
  getConcentration(): number;
  getEffects(): string[];
  isSafeForConsumption(): boolean;
}
