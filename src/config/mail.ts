
// para o typescript entender as opções de driver,
// garante que apenas duas opções serão passadas para o driver
interface IMailConfig {
  driver: 'ethereal' | 'ses';

  // para o typescript entender que tem uma opção default
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  // fixa o email default que deve ser igual ao da aws
  defaults: {
    from: {
      email: 'datacurrency@datacurrency.uk',
      name: 'Criptam',
    },
  },
} as IMailConfig;
