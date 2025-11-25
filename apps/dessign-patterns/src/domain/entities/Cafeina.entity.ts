import { Substance } from "../contracts/Substance";

export class CafeinaEntity implements Substance {
    private name: string = "Cafeína";
    private concentration: number = 200; // mg/ml
    private effects: string[] = ["estimulante", "mejora concentración", "aumenta energía"];

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
        // La cafeína es segura en concentraciones <= 400mg/ml
        return this.concentration <= 400;
    }
}
