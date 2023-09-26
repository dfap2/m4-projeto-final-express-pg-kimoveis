import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedDecimalPrecisionScale1688681260691 implements MigrationInterface {
    name = 'AddedDecimalPrecisionScale1688681260691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric(12,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "real_estate" ALTER COLUMN "value" TYPE numeric`);
    }

}
