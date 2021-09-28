import { query } from "express";
import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDatabase1632845580132 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      queryRunner.createDatabase("coche", true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      queryRunner.dropDatabase('coche', true);
    }

}
