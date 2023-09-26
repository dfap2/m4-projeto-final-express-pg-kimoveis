import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedColumn1688682384785 implements MigrationInterface {
    name = 'AddedColumn1688682384785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "password"`);
    }

}
