var formObj = {"_id":"5a08435835677f0001af052d","machineName":"nezcjzowfnfwzny:end2end","modified":"2017-12-18T15:17:29.344Z","title":"GOS | End-2-End-Test","display":"form","name":"end2end","path":"end2end","project":"5a05516e35677f0001aeef6e","_vid":0,"revisions":"","created":"2017-11-12T12:49:28.153Z","components":[{"key":"panel","input":false,"title":"Complete Test","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[{"input":false,"tableView":false,"key":"columns","type":"columns","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"columns":[{"components":[{"labelPosition":"top","input":true,"tableView":true,"inputType":"number","label":"Number 1","key":"a","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"custom":"","multiple":"","integer":"","step":"any","max":9999,"min":0,"required":false},"type":"number","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)","fieldhelp":"The first number to add","formhelp":"This example shows how to add two numbers"},"lockKey":true,"hideLabel":false,"isNew":false}],"width":6,"offset":0,"push":0,"pull":0},{"components":[{"labelPosition":"top","input":true,"tableView":true,"inputType":"number","label":"Number 2","key":"b","placeholder":"","prefix":"","suffix":"","defaultValue":"","protected":false,"persistent":true,"hidden":false,"clearOnHide":true,"validate":{"custom":"","multiple":"","integer":"","step":"any","max":9999,"min":0,"required":false},"type":"number","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"processlink":"https://stackoverflow.com/questions/12256948/bitwise-operations-to-add-two-numbers","processimagelink":"https://i.stack.imgur.com/MjNuE.gif","formhelp":"This example shows how to add two numbers","fieldhelp":"The second number to add","elearningimagelink":"http://www.sparklebox.co.uk/wp-content/uploads/1-1231.jpg","elearninglink":"https://en.wikipedia.org/wiki/Operation_(mathematics)"},"lockKey":true,"hideLabel":false}],"width":6,"offset":0,"push":0,"pull":0}],"clearOnHide":false,"hideLabel":false},{"lockKey":true,"event":"add2numbers","properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"button","theme":"primary","disableOnInvalid":false,"action":"custom","block":false,"rightIcon":"","leftIcon":"","size":"md","key":"addtwonumbers","tableView":false,"label":"Add two numbers","input":true,"custom":"function addtwonumbers(url,formdata){\n   executeAjaxRequestWithAdalLogic(ADAL.config.clientId,addtwonumbersnoadal,url,formdata);\n}\n\nfunction addtwonumbersnoadal(token,url,formdata) {\n   var settings = {\n     \"crossDomain\": true,     \n     \"url\": url,\n     \"timeout\":30000,\n     \"method\": \"POST\",\n     \"headers\": {\n       \"content-type\": \"application/json\",\n       \"authorization\": \"Bearer \"+token,\n       \"cache-control\": \"no-cache\"\n     },\n     \"data\": JSON.stringify(formdata),\n     \"dataType\": 'json',\n     \"contentType\": 'application/json'                          \n   }\n\n   $.ajax(settings).done(function (data,textStatus,request) {\n      document.getElementById('mymessage').innerHTML='Calculation successfully performed!';\n      //console.log('data='+JSON.stringify(data));\n      //console.log('formdata='+JSON.stringify(formdata));\n      var datamerged = $.extend(formdata.data,data.data);\n      var datamergedstring = JSON.stringify(datamerged);\n      //console.log('datamerged='+datamergedstring);\n      var initjson = JSON.parse('{\"data\":'+datamergedstring+'}');\n      \n      form.submission = initjson;      \n   }).fail(function (err, textStatus, errorThrown) {\n      document.getElementById('mymessage').innerHTML='Failed to calculate two numbers!';\n      console.log(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n      alert(\"AJAX REQUEST FAILED:\"+err.toString()+',textStatus='+textStatus+', errorThrown='+errorThrown+\", url=\"+url+\",formdata=\"+(formdata!=null ? JSON.stringify(formdata) : null));\n   });\n}\n\naddtwonumbers(addtwonumbersurl,{\"data\":form.submission.data});","hideLabel":false},{"labelPosition":"top","disabled":true,"lockKey":true,"properties":{},"conditional":{"show":"","when":null,"eq":""},"tags":[],"type":"number","validate":{"required":false,"min":"","max":"","step":"any","integer":"","multiple":"","custom":""},"clearOnHide":true,"hidden":false,"persistent":true,"protected":false,"defaultValue":"","suffix":"","prefix":"","placeholder":"","key":"c","label":"Result","inputType":"number","tableView":true,"input":true,"hideLabel":false},{"input":true,"label":"Do all the crazy things in green","tableView":false,"key":"submit","size":"md","leftIcon":"","rightIcon":"","block":false,"action":"submit","disableOnInvalid":false,"theme":"success","type":"button","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"hideLabel":false}],"clearOnHide":false,"hideLabel":false},{"key":"panel27","input":false,"title":"Encryption","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"All form.io Controls","input":false,"key":"panel24","components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel21","input":false,"title":"Current User","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel20","input":false,"title":"Branding","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel19","input":false,"title":"Language","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel18","input":false,"title":"Header Features","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"CDN Content","input":false,"key":"panel25","components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel2","input":false,"title":"CDN Token","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel3","input":false,"title":"Event Grid","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel23","input":false,"title":"Service Bus","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel4","input":false,"title":"Mail","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel5","input":false,"title":"PDF","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel6","input":false,"title":"SMS","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel7","input":false,"title":"WhatsApp","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel9","input":false,"title":"Slack","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel10","input":false,"title":"Teams","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel8","input":false,"title":"Excel Calculation","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel11","input":false,"title":"WebBase Cache","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel12","input":false,"title":"SQL Server","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel15","input":false,"title":"Preview","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel14","input":false,"title":"DokStore","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel13","input":false,"title":"CosmosDB","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel16","input":false,"title":"Polizze erzeugen","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel17","input":false,"title":"Schaden erzeugen","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false},{"properties":{"":""},"conditional":{"show":"","when":null,"eq":""},"tags":[],"breadcrumb":"default","type":"panel","tableView":false,"theme":"default","title":"Dokument ablegen","input":false,"key":"panel26","components":[],"clearOnHide":false,"hideLabel":false},{"key":"panel22","input":false,"title":"In context translation","theme":"default","tableView":false,"type":"panel","breadcrumb":"default","tags":[],"conditional":{"eq":"","when":null,"show":""},"properties":{"":""},"components":[],"clearOnHide":false,"hideLabel":false}],"owner":"594fd15f7684cc005c2280ae","submissionAccess":[],"access":[{"type":"read_all","roles":["5a05516e35677f0001aeef6f","5a05516e35677f0001aeef70","5a05516e35677f0001aeef71"]}],"tags":[],"type":"form"};