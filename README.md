# JavaScript for Data Scientist

This repository provides material for a workshop given by Frie P. and Jan D. The material provides examples for the concept explained in the presentation. Download, clone or fork this repository to experiment, learn and play.

## Backend

### Install

#### Install Node JS

Download Node JS from the [official website](https://nodejs.org/en/download/). If you are using MacOS or a Linux Distribution we recommend to use the package manager. The required commands can be found [here](https://nodejs.org/en/download/package-manager/). The installation ships with the **node binaries** and the **node package manager** (npm).

#### Download Dependencies

Before you can start the server you have to install the required dependencies. You can imagine the dependencies as packages in Python or R. The packages can be installed using npm. npm is similar to Python's package manager pip. Open the command line or terminal and navigate to the backend folder. Use the following command to install the dependencies. 

:warning: **You have to enter the backend folder first to execute the command.** 

```
npm install
```

The command accesses the `package.json` file and installs all packages that are listed under `dependencies` and `devDependencies`. The packages are downloaded and saved in the `node_modules` folder.

#### Environments

The server ships with two environments - development and production. The development environment allows to automatically restart the server every time a file of the application is changed. The production environment starts a simple node server. Following commands start the respective environments. Use `CTRL + C` to stop the environments. 

Development environment: 
```
npm run dev
```

Production environment: 
```
npm run prod
```

## Frontend