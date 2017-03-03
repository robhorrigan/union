const inquirer = require('inquirer');

module.exports = async function askToChoosePackages(packages) {
  return inquirer.prompt([
    {
      name: 'toPublish',
      message: 'Which packages do you want to publish?',
      type: 'checkbox',
      choices: packages
    }
  ]);
}
