import { Product } from "../../domain/contracts/Product";
import { Substance } from "../../domain/contracts/Substance";

export class AdapterSustanciaToBebida implements Product {
    constructor(private sustancia: Substance) {}

    make(): void {
        console.log(`\n🧪 Creando bebida energética a partir de ${this.sustancia.getName()}`);
        console.log(`   Concentración: ${this.sustancia.getConcentration()}mg/ml`);
        console.log(`   Efectos: ${this.sustancia.getEffects().join(", ")}`);
        
        if (this.sustancia.isSafeForConsumption()) {
            console.log(`   ✓ Bebida energética de ${this.sustancia.getName()} creada exitosamente!`);
        } else {
            console.log(`   ⚠️ ADVERTENCIA: Concentración fuera de rango seguro para consumo`);
        }
    }
}
