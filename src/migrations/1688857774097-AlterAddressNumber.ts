import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAddressNumber1688857774097 implements MigrationInterface {
    name = 'AlterAddressNumber1688857774097'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ALTER COLUMN "number" SET NOT NULL`);
    }

}
