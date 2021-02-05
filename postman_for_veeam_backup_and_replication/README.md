# Postman for Veeam Backup & Replication (VBR)

[Postman](https://www.getpostman.com/) is a tool that’s build by developers for developers. It provides a complete API development environment with stream-lined collaboration to help any number of use cases including testing, development, & product development. They do have both [free and paid versions](https://www.getpostman.com/pricing) so if you are looking at getting started, they make it easy and you can work your way up.

## Requirements

* Veeam Backup & Replication v11
* [Postman](https://www.getpostman.com/)

## Getting Started

* Get the VBR OpenAPI specification
  * To get this, you'll have to navigate to a URL hosted on your VBR server
  * Click the link shown below which triggers a file download:
    * `https://<vbr_server>:9419/swagger/ui/index.html`

![VBR OpenAPI specification](images/vbr_openapi_specification.png)

* Import the file we just downloaded into Postman

![Postman Import](images/postman_import.png)

* Make sure `Generate collection from imported APIs` is checked

![Generate Collection checkbox](images/postman_import_generate.png)

* Click `Import`
  * **Wait...be patient!**
* Once imported, it will show up in your Postman Collections as shown below:

![VBR Postman Collection](images/vbr_postman_collection.png)

* Set the following [variables](https://learning.getpostman.com/docs/postman/environments_and_globals/variables/) in Postman:
  * `baseUrl`: Base URL of Veeam Backup & Replication RESTful API
  * `vbr-username`: Username login
  * `vbr-password`: Password login

* Open the newly imported collection and navigate to the `Create Token` API call
* Click on the `Body` tab
* Update fields as shown below:

![VBR Login Body](images/login_body.png)

* Click on the `Tests` tab
* Copy/Paste the code from [here](automated_auth_test.js) in this section

![VBR Login Tests](images/login_test.png)

* Click `Save`
* Edit the root folder of the collection

![VBR Collection Edit](images/vbr_collection_edit.png)

* Navigate to the `Authorization` tab
* Choose _Type:_ `Bearer Token`
* Enter for _Token:_ `{{vbr_access_token}}`
* Click `Update`

![VBR Collection Auth](images/vbr_collection_auth.png)

At this point, you've now automated auth for **all** API calls! All you have to do when using an API call in this collection is make sure that `Authorization` is set to _Type:_ `Inherit auth from parent`

![VBR Auth Type](images/auth_type.png)

You can now begin using Postman with the Veeam Backup & Replication RESTful API!
