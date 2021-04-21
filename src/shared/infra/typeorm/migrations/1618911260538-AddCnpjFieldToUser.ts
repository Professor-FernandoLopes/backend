import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddCnpjFieldToUser1618911260538 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            'users',
            new TableColumn({
              name: 'cnpj',
              type: 'varchar',
              isNullable: true,
            }),
          );
        }
      
        public async down(queryRunner: QueryRunner): Promise<void> {
          await queryRunner.dropColumn('users', 'cnpj');
        }
      }
      


    



   