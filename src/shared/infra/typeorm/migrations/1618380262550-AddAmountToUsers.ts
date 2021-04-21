import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddAmountToUsers1618380262550 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> { 
        await queryRunner.query(`ALTER TABLE users ADD COLUMN quantidade real`); 
     }
     public async down(queryRunner: QueryRunner): Promise<any> { } 
  }