
Weku Website

## Installation

#### Clone the repository and make a tmp folder
```bash
git clone https://github.com/wekuio/weku_portal.git
cd weku_portal
yarn install
```

#### Install following software with recommended versions
node: 8.11.1
yarn: 1.6.0
npm: 5.6.0
mysql: 5.7.16

#### Database migrations

This is a required step in order for the database to be 'ready' for website's use.
Create a new empty database in mysql.

Edit the file `src/db/config/config.json` using your favorite command line text editor being sure that the username, password, host, and database name are set correctly and match your newly configured mysql setup.

Run `sequelize db:migrate` in `src/db` directory, like this:

```bash
cd src/db
yarn exec sequelize db:migrate
```

#### Configuration

update values in config/default.json file

#### Run

To run condenser in development mode, run:

```bash
npm run build
sudo npm run start
```

## Issues

To report a non-critical issue, please file an issue on this GitHub project.

If you find a security issue please report details to: admin@weku.io

We will evaluate the risk and make a patch available before filing the issue.