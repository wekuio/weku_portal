
WeKu Website

## Installation

#### Clone the repository and make a tmp folder
```bash
git clone https://github.com/wekuio/weku_portal.git
cd weku_portal
yarn install
```

To run website in production mode, run:

need sudo to open port 80

```bash
sudo npm run production
```

To run condenser in development mode, run:

```bash
sudo npm run start
```

#### Configuration
configuration files are in config folder

#### Install mysql server

Recommended version 5.7.16

Once set up, you can set the mysql server configuration option, editing config in `config/production.json`. You will use the format `mysql://user:pass@hostname/databasename`.

#### Database migrations

This is a required step in order for the database to be 'ready' for website's use.


Edit the file `src/db/config/config.json` using your favorite command line text editor being sure that the username, password, host, and database name are set correctly and match your newly configured mysql setup.

Run `sequelize db:migrate` in `src/db` directory, like this:

```bash
cd src/db
yarn exec sequelize db:migrate
```

## Issues

To report a non-critical issue, please file an issue on this GitHub project.

If you find a security issue please report details to: security@weku.io

We will evaluate the risk and make a patch available before filing the issue.