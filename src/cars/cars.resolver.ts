import { InternalServerErrorException } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CarsService } from "./cars.service";
import { NewCarInput } from "./data-to-objects/new-car-input";
import { Car } from "./entities/car";

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {

  }

  @Query(returns => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars()
      .catch(err => {
        throw err
      })
  }

  @Mutation(returns => Car)
  public async addNewCar(@Args("newCarData") newCarData: NewCarInput): Promise<Car> {
    return await this.carsService.addCar(newCarData)
      .catch(err => {
        throw err;
      });
  }

  @Mutation(returns => Boolean)
  public async deleteCar(@Args("id") id: string): Promise<Boolean> {
    return await this.carsService.deleteCar(id)
      .catch(err => {
        throw err;
      });
  }
 }