---
title: "Provisioning a serverless intranet app on Azure"
publishedAt: 2025-01-01
description: "How to provision and configure a serverless intranet app on Azure"
slug: "azure-serverless-intranet"
isPublish: false
isDraft: true
---

## Provisioning a serverless intranet app on Azure

In this blog post I'll be sharing how to provision and configure a serverless intranet app on Azure. We'll be using a combination of Azure services such as Azure Functions, Azure App Service, Azure Storage, and Azure Cosmos DB to build our app.

Here's how our app architecture will look like:

// TODO: Add diagram

We'll also be restricting access to these resources to ensure that they are only accessible within the private network.

### Here are the steps we'll be following

- Set up an Azure Virtual Network
- Set up an Azure Storage account
- Set up an Azure Cosmos DB account
- Set up an Azure Functions app
- Set up an Azure App Service
- Configure CORS Settings for the App Service
- Deploy the backend and frontend code
- Restrict access to Azure resources

Let's get started!

### Set up an Azure Virtual Network

The first step in Set up an intranet app is to create an Azure Virtual Network. This will allow you to securely connect your resources and services within a private network.

To create a Virtual Network, follow these steps:

1. Navigate to the Azure portal.
2. Click on "Create a resource" and search for "Virtual Network".
3. Click on "Create" and fill in the required details.

// TODO: Add creation steps screenshot

We'll need to create additional subnets for our app's resources, specifically Azure Functions and Azure App Service. You can do this by navigating to the Virtual Network resource and clicking on "Subnets" (left sidebar).

// TODO: Add subnet creation screenshot

### Set up an Azure Storage account

Next, you'll need to set up an Azure Storage account to store your app's data.

To create a Storage account, follow these steps:

1. Navigate to the Azure portal.
2. Click on "Create a resource" and search for "Storage account".
3. Click on "Create" and fill in the required details.

// TODO: Add creation steps screenshot

### Set up an Azure Cosmos DB account

Azure Cosmos DB is a globally distributed, multi-model database service that enables you to elastically and independently scale throughput and storage across any number of Azure's geographic regions.

To create a Cosmos DB account, follow these steps:

1. Navigate to the Azure portal.
2. Click on "Create a resource" and search for "Azure Cosmos DB".
3. Click on "Create" and fill in the required details.

// TODO: Add creation steps screenshot

### Set up an Azure Functions app

Azure Functions is a serverless compute service that enables you to run event-triggered code without having to manage infrastructure. We'll be using it to host our backend code.

To create a Functions app, follow these steps:

1. Navigate to the Azure portal.
2. Click on "Create a resource" and search for "Function App".
3. Click on "Create" and fill in the required details.

// TODO: Add creation steps screenshot

Once the Function App is created, we'll need to set up environment variables and configure the app settings. To do this, navigate to the Function App resource and click on "Configuration" (left sidebar).

Add the following environment variables:

- `WEBSITE_RUN_FROM_PACKAGE`: Set this to `1` to enable deployment from a zip package.
- `APP_STAGE`: Set this to `production`, `staging`, or `development` depending on the environment.
- `COSMOS_DB_CONNECTION_STRING`: The connection string for your Cosmos DB account.
- `STORAGE_ACCOUNT_CONNECTION_STRING`: The connection string for your Storage account.

// TODO: Add configuration steps screenshot

### Set up an Azure App Service

Azure App Service is a fully managed platform for building, deploying, and scaling web apps. We'll be using it to host our frontend code.

To create an App Service, follow these steps:

1. Navigate to the Azure portal.
2. Click on "Create a resource" and search for "App Services".
3. Click on the plus sign to create a `Web App` and fill in the required details.

// TODO: Add creation steps screenshot

> **Good to know:** the reason we're using a Web App instead of a Static Web App is because of the lack of outbound vnet integration support on Static Web Apps (as of writing this post).

### Restrict access to Azure resources

#### Azure Cosmos DB

To restrict access to your Cosmos DB account, we'll need to create a private endpoint and remove public access.

To create a private endpoint, follow these steps:

1. Navigate to the Cosmos DB account.
2. Click on "Networking" (left sidebar)
3. Once there, switch to the "Private endpoint connections" tab.
4. Click on "Add" and fill in the required details.

// TODO: Add private endpoint creation screenshot

To remove public access, follow these steps:

1. Navigate to the Cosmos DB account.
2. Click on "Networking".
3. Once there, set "Public network access" to "Disabled".

// TODO: Add public access removal screenshot

#### Azure Function App

To restrict access to your Function App, we'll need to create a private endpoint and remove public access in a similar way to the Cosmos DB account.

We'll also need to configure an outbound vnet integration for the Function App to access other Azure resources within the Virtual Network.

To create a private endpoint for the Function App, follow these steps:

1. Navigate to the Function App.
2. Click on "Networking" (left sidebar)
3. Once there, click on "Private endpoint connections".
4. Click on "Add" and fill in the required details.

// TODO: Add private endpoint creation screenshot

To remove public access, follow these steps:

1. Navigate to the Function App.
2. Click on "Networking" (left sidebar).
3. Set "Allow public network access" to "Disabled".

// TODO: Add public access removal screenshot

To configure an outbound vnet integration, follow these steps:

1. Navigate to the Function App.
2. Click on "Networking" (left sidebar).
3. Once there, click on "Configure VNet integration".
4. Click on "Add VNet" and fill in the required details.

// TODO: Add vnet integration configuration screenshot

#### Azure Storage Account

To restrict access to your Storage account, we'll need to create a private endpoint and remove public access in a similar way to the Cosmos DB account.

To create a private endpoint for the Storage account, follow these steps:

1. Navigate to the Storage account.
2. Click on "Networking" (left sidebar).
3. Once there, click on "Private endpoint connections".
4. Click on "Add" and fill in the required details.

// TODO: Add private endpoint creation screenshot

To remove public access, follow these steps:

1. Navigate to the Storage account.
2. Click on "Networking" (left sidebar).
3. Once there, set "Allow public access" to "Disabled".

// TODO: Add public access removal screenshot

#### Azure App Service

To restrict access to your App Service, we'll need to create a private endpoint and remove public access in a similar way to the Cosmos DB account.

To create a private endpoint for the App Service, follow these steps:

1. Navigate to the App Service.
2. Click on "Networking" (left sidebar).
3. Once there, switch to the "Private endpoint connections" tab.
4. Click on "Add" and fill in the required details.

// TODO: Add private endpoint creation screenshot

To remove public access, follow these steps:

1. Navigate to the App Service.
2. Click on "Networking" (left sidebar).
3. Once there, set "Allow public network access" to "Disabled".

// TODO: Add public access removal screenshot
