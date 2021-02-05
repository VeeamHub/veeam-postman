# Postman for Veeam Backup for Office 365 (VBO)

[Postman](https://www.getpostman.com/) is a tool that’s build by developers for developers. It provides a complete API development environment with stream-lined collaboration to help any number of use cases including testing, development, & product development. They do have both [free and paid versions](https://www.getpostman.com/pricing) so if you are looking at getting started, they make it easy and you can work your way up.

## Requirements

* Veeam Backup for Office 365 v5
* [Postman](https://www.getpostman.com/)

## Getting Started

* Get the VBO OpenAPI specification
  * To get this, you'll have to navigate to a URL hosted on your VBO server
    * `https://<vbo_server>:4443/swagger/docs/v5`
  * Save all the text in a file

![VBO OpenAPI specification](images/vbo_openapi_specification.png)

* Import the file we just downloaded into Postman

![Postman Import](images/postman_import.png)

* Make sure `Generate collection from imported APIs` is checked

![Generate Collection checkbox](images/postman_import_generate.png)

* Click `Import`
  * **Wait...be patient!**
* Once imported, it will show up in your Postman Collections as shown below:

![VBO Postman Collection](images/vbo_postman_collection.png)

* Set the following [variables](https://learning.getpostman.com/docs/postman/environments_and_globals/variables/) in Postman:
  * `baseUrl`: Base URL of Veeam Availability Console web server
  * `vbo-username`: Username login
  * `vbo-password`: Password login

* Open the newly imported collection and navigate to the `/v5/token` API call
* Click on the `Body` tab
* Update fields as shown below:

![VBO Login Body](images/login_body.png)

* Click on the `Tests` tab
* Copy/Paste the code from [here](automated_auth_test.js) in this section

![VBO Login Tests](images/login_test.png)

* Click `Save`
* Edit the root folder of the collection

![VBO Collection Edit](images/vbo_collection_edit.png)

* Navigate to the `Authorization` tab
* Choose _Type:_ `Bearer Token`
* Enter for _Token:_ `{{vbo_access_token}}`
* Click `Update`

![VBO Collection Auth](images/vbo_collection_auth.png)

At this point, you've now automated auth for **all** API calls! All you have to do when using an API call in this collection is make sure that `Authorization` is set to _Type:_ `Inherit auth from parent`

![VBO Auth Type](images/auth_type.png)

You can now begin using Postman with the Veeam Backup for Office 365 RESTful API!
