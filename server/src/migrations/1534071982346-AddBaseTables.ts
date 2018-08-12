import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBaseTables1534071982346 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "calories" integer NOT NULL, "carbohydrates" integer NOT NULL, "fats" integer NOT NULL, "name" character varying NOT NULL, "proteins" integer NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "weight" integer NOT NULL, "dishId" integer, "productId" integer, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "dish" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "recipe" character varying NOT NULL, CONSTRAINT "PK_59ac7b35af39b231276bfc4c00c" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "ingredient" ADD CONSTRAINT "FK_7c9b1a5446b05b56654617af02c" FOREIGN KEY ("dishId") REFERENCES "dish"("id")`);
    await queryRunner.query(`ALTER TABLE "ingredient" ADD CONSTRAINT "FK_24141d4be521fcd1c23aa6e295f" FOREIGN KEY ("productId") REFERENCES "product"("id")`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "ingredient" DROP CONSTRAINT "FK_24141d4be521fcd1c23aa6e295f"`);
    await queryRunner.query(`ALTER TABLE "ingredient" DROP CONSTRAINT "FK_7c9b1a5446b05b56654617af02c"`);
    await queryRunner.query(`DROP TABLE "dish"`);
    await queryRunner.query(`DROP TABLE "ingredient"`);
    await queryRunner.query(`DROP TABLE "product"`);
  }
}
