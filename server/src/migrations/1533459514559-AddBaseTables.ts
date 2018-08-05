import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddBaseTables1533459514559 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "calories" integer NOT NULL, "carbohydrates" integer NOT NULL, "fats" integer NOT NULL, "name" character varying NOT NULL, "proteins" integer NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "dish_ingredient" ("id" SERIAL NOT NULL, "weight" integer NOT NULL, "dishId" integer, "ingredientId" integer, CONSTRAINT "PK_45fe3741605e7eae03adea9e81d" PRIMARY KEY ("id"))`);
    await queryRunner.query(`CREATE TABLE "dish" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "recipe" character varying NOT NULL, CONSTRAINT "PK_59ac7b35af39b231276bfc4c00c" PRIMARY KEY ("id"))`);
    await queryRunner.query(`ALTER TABLE "dish_ingredient" ADD CONSTRAINT "FK_2ca1208d028996079de8da19075" FOREIGN KEY ("dishId") REFERENCES "dish"("id")`);
    await queryRunner.query(`ALTER TABLE "dish_ingredient" ADD CONSTRAINT "FK_5021612db7b923959ac8bbd3a3e" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id")`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "dish_ingredient" DROP CONSTRAINT "FK_5021612db7b923959ac8bbd3a3e"`);
    await queryRunner.query(`ALTER TABLE "dish_ingredient" DROP CONSTRAINT "FK_2ca1208d028996079de8da19075"`);
    await queryRunner.query(`DROP TABLE "dish"`);
    await queryRunner.query(`DROP TABLE "dish_ingredient"`);
    await queryRunner.query(`DROP TABLE "ingredient"`);
  }
}
