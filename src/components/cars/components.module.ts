import { Module } from "@nestjs/common";
import { CarsModule } from "src/cars/cars.module";

@Module({
  imports: [CarsModule]
})
export class ComponentModule {

}