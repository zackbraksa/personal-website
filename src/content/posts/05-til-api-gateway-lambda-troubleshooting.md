---
title: "TIL: Troubleshooting API Gateway and Lambda issues"
publishedAt: 2024-12-17
description: "How to troubleshoot API Gateway and Lambda issues"
slug: "til-api-gateway-lambda-troubleshooting"
isPublish: true
---

Say you deployed a serverless app (AWS Lambda + API Gateway) and you're getting a 401 Unauthorized error when calling a specific endpoint.

The first you're probably thinking, is this lambda issue or API Gateway issue?

Well let's find out.

The first thing you should do is check the API Gateway logs. By default though, API Gateway logs are disabled.

But it's pretty straightforward to enable them.  

First, like almost everything in AWS, you need an IAM role.

Let's head to IAM and create a new role. Select "API Gateway" as the service and "API Gateway" as the use case.

Give it a name, and click on "Create role".

Take note of the arn, you'll need it in the next step.

Next, head to the API Gateway console, settings, in the logging section, click on "Edit" and enter the arn you created in the previous step.

Now head back to the API Gateway console, and click on the API you want to enable logging for.

Click on stages, in the right sidebar, find Logs and tracing, and click on "Edit".

Flip the CloudWatch logs switch to "Errors" or "Errors and info logs" depending on your needs.

You might also wanna enable "Data tracing", but be careful as it will log sensitive data.

Once you're done, click on "Save".

Make another request to the endpoint.

Now head to CloudWatch, click on Log groups, you should something like `API-Gateway-Execution-Logs_xyz/stage`

Click the latest log stream, and you should see logs like this:

```text
API Key  authorized because method 'POST [/api/v1/auth/login]' does not require API Key. Request will not contribute to throttle or quota limits
```

```text
Method request body before transformations: [...redacted...]
```

```text
Endpoint request body after transformations: [...redacted...]
```

```text
Method response body after transformations: [...redacted...]
```

That should tell you if it's a lambda issue or an API Gateway issue.

If it's a lambda issue, you probably wanna go back to log groups, find the lambda function, and check the log streams there.
