import inquirer from 'inquirer';

export default async function askToChoosePackages(packages) {
  const { packagesToPublish } = await inquirer.prompt([
    {
      name: 'packagesToPublish',
      message: 'Which packages do you want to publish?',
      type: 'checkbox',
      choices: packages,
      validate(value) {
        if (value.length === 0) {
          return 'You must chose at least one package';
        }

        return true;
      }
    }
  ]);

  return packagesToPublish;
};
