# doghouse v0.0.0



- [Pets](#pets)
	- [Create pets](#create-pets)
	- [Delete pets](#delete-pets)
	- [Retrieve pets](#retrieve-pets)
	- [Update pets](#update-pets)
	


# Pets

## Create pets



	POST /pets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Pets's name.</p>							|
| type			| 			|  <p>Pets's type.</p>							|
| breed			| 			|  <p>Pets's breed.</p>							|
| location			| 			|  <p>Pets's location.</p>							|
| lat			| 			|  <p>Pets's lat.</p>							|
| lon			| 			|  <p>Pets's lon.</p>							|

## Delete pets



	DELETE /pets/:id


## Retrieve pets



	GET /pets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update pets



	PUT /pets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>Pets's name.</p>							|
| type			| 			|  <p>Pets's type.</p>							|
| breed			| 			|  <p>Pets's breed.</p>							|
| location			| 			|  <p>Pets's location.</p>							|
| lat			| 			|  <p>Pets's lat.</p>							|
| lon			| 			|  <p>Pets's lon.</p>							|


