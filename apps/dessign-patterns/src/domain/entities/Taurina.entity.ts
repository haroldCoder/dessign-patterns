import { Substance } from "../contracts/Substance";

export class TaurinaEntity implements Substance {
    private name: string = "Taurina";
    private concentration: number = 1000; // mg/ml
    private effects: string[] = ["mejora rendimiento físico", "antioxidante", "regula electrolitos"];

    getName(): string {
        return this.name;
    }

    getConcentration(): number {
        return this.concentration;
    }

    getEffects(): string[] {
        return this.effects;
    }

    isSafeForConsumption(): boolean {
        // La taurina es segura en concentraciones <= 3000mg/ml
        return this.concentration <= 3000;
    }
}
