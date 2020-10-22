# Postman for Veeam Service Provider Console (SPC)

[Postman](https://www.getpostman.com/) is a tool that’s build by developers for developers. It provides a complete API development environment with stream-lined collaboration to help any number of use cases including testing, development, & product development. They do have both [free and paid versions](https://www.getpostman.com/pricing) so if you are looking at getting started, they make it easy and you can work your way up.

Importing SPC REST API into Postman was originally mentioned in a [blog post](https://www.cragdoo.co.uk/2017/08/17/veeam-availability-console-api/) by Craig Dalrymple. The method mentioned here not only covers that but automates auth for **all** API calls.

## Requirements

* Veeam Service Provider Console
* [Postman](https://www.getpostman.com/)

## Getting Started

* Get the SPC OpenAPI specification
  * To get this, you'll have to navigate to a URL hosted on your SPC web server
  * Click the link shown below which triggers a file download:
    * `https://<spc_web_server>:1280/api/swagger/index.html`

![SPC OpenAPI specification](images/spc_openapi_specification.png)

* Import the file we just downloaded into Postman

![PostMan Import](images/postman_import.png)

* Make sure `Generate collection from imported APIs` is checked

![Generate Collection checkbox](images/postman_import_generate.png)

* Click `Import`
  * **Wait...be patient!**
* Once imported, it will show up in your Postman Collections as shown below:

![SPC Postman Collection](images/spc_postman_collection.png)

* Set the following [variables](https://learning.getpostman.com/docs/postman/environments_and_globals/variables/) in Postman:
  * `baseUrl`: Base URL of Veeam Availability Console web server
  * `spc-username`: Username login
  * `spc-password`: Password login

* Open the newly imported collection and navigate to the `Authenticate using OAuth 2.0.` API call
* Click on the `Body` tab
* Update fields as shown below:

![SPC Login Body](images/login_body.png)

* Click on the `Tests` tab
* Copy/Paste the code from [here](automated_auth_test.js) in this section

![SPC Login Tests](images/login_test.png)

* Click `Save`
* Edit the root folder of the collection

![SPC Collection Edit](images/spc_collection_edit.png)

* Navigate to the `Authorization` tab
* Choose _Type:_ `Bearer Token`
* Enter for _Token:_ `{{spc_access_token}}`
* Click `Update`

![SPC Collection Auth](images/spc_collection_auth.png)

At this point, you've now automated auth for **all** API calls! All you have to do when using an API call in this collection is make sure that `Authorization` is set to _Type:_ `Inherit auth from parent`

![SPC Auth Type](images/auth_type.png)

You can now begin using Postman with the Veeam Service Provider Console!
