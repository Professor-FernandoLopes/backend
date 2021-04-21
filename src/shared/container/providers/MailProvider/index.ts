// vai fazer um mapeamento entre os providers existentes
// para isso vai importar as duas implementações
import { container } from 'tsyringe';

import mailConfig from '@config/mail';
import IMailProvider from './models/IMailProvider';

import EtherealMailProvider from './implementations/EtherealMailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
};

/* com base no resultado do config determina o mail provider
mailConfig.driver seleciona o driver, que é determinado pelo process.env
*/

// observe o container, cadastro dos providers, isto é um registro
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
