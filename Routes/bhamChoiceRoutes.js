const express = require('express');
const router = express.Router();

const { getAreYou } = require('../Controller/getDropdownData')

const { signUpNewClient } = require('../Controller/signUpNewClient');
const { createClientRef } = require('../Controller/Client/createClientRef');
const { updateClient } = require("../Controller/Client/updateClient");
const { changePwd } = require("../Controller/Client/changePwd");
const { changeMemorableDate } = require("../Controller/Client/changeMemorableDate")
const { clientRefLogin } = require('../Controller/Client/clientRefLogin')
const { forgottenRef } = require('../Controller/Client/forgottenRef')
const { forgottenPwd } = require('../Controller/Client/forgottenPwd')
const { clientLogin } = require('../Controller/Client/clientLogin')
const { addClientJoint } = require('../Controller/addClientJoint');
const { updateJoint } = require('../Controller/Joint/updateJoint');
const { deleteJoint } = require('../Controller/Joint/deleteJoint');

const { addClientMember } = require('../Controller/Member/addClientMember');
const { updateMember } = require('../Controller/Member/updateMember');
const { deleteMember } = require('../Controller/Member/deleteMember');

const { getClientList } = require('../Controller/Client/getClientList');
const { getOneClient } = require('../Controller/Client/getOneClient');
const { getClientIdInJoint } = require('../Controller/Joint/getClientIdInJoint');
const { getOneReference } = require('../Controller/Client/getOneReference');
const { getOneClientIdInClientRef } = require('../Controller/Client/getOneClientIdInClientRef');

const { getJointList } = require('../Controller/Joint/getJointList');
const { getOneJoint } = require('../Controller/Joint/getOneJoint');

const { getClientIDInMember } = require('../Controller/Member/getClientIDInMember');
const { getMemberList } = require('../Controller/Member/getMemberList');
const { getOneMember } = require('../Controller/Member/getOneMember');

const { getPropertyList } = require('../Controller/Property/getPropertyList')
const { getPropertyById } = require('../Controller/Property/getPropertyById')
const { getPropertyByPropertyId } = require('../Controller/Property/getPropertyByPropertyId')

const { acceptBid } = require('../Controller/Property/acceptBid')
const { withdrawBid } = require('../Controller/Property/withdrawBid')
const { getBidListbyClientId } = require('../Controller/Property/getBidListbyClientId')
const { getBidByPropertyId } = require('../Controller/Property/getBidByPropertyId')
const { GuestSearch } = require('../Controller/Property/guestSearch');

const { AddToDo } = require('../Controller/toDo/addToDo');
const { GetOneClientToDoList } = require('../Controller/Todo/getOneClientTodo');
const { GetOneClientToDoInfo } = require('../Controller/Todo/getOneToDoInfo');
const { UpdateToDo } = require('../Controller/Todo/updateToDo');

const { AddMessage } = require('../Controller/Message/addMessage')
const { GetMessageByClient } = require('../Controller/Message/getMessagebyClient');
const { UpdateMessage } = require('../Controller/Message/updateMessage');

const { saveErrDetail } = require('../Utility/saveErrDetail');

const { ValidatorClient } = require('../Middleware/validatorClient');
const { ValidatorClientRef } = require('../Middleware/validatorClientRef');
const {
    ValidatorCreateRef,
    ValidatorForgottenRef,
    ValidatorForgottenPwd } = require('../Middleware/validatorCreateRef');

const { ValidatorClientJoint } = require('../Middleware/validatorClientJoint');
const { ValidatorClientOtherHousehold } = require('../Middleware/validatorClientOtherHousehold');

const { ValidatorBid } = require('../Middleware/validatorBid');

const { ValidatorToDo } = require('../Middleware/validatorToDo')

const { checkClientNINOExist,
    checkClientJointNINOExist,
    checkClientOtherHouseholdNINOExist
} = require('../Controller/checkNINO');

const { checkClientEmailExist,
    checkClientJointEmailExist
} = require('../Controller/checkEmail');


const { ValidatorMisc } = require('../Middleware/validatorMisc');
const { ValidatorMessage } = require('../Middleware/validatorMessage');

router.get("/dropdown/areyou", getAreYou);

// client routes

router.get("/client/clientnino/:nino", ValidatorClient, checkClientNINOExist);                          // http://localhost:9001/client/clientnino/:nino 
router.get("/client/partnernino/:nino", ValidatorClient, checkClientJointNINOExist);                    // http://localhost:9001/client/partnernino/:nino 
router.get("/client/othermembernino/:nino", ValidatorClient, checkClientOtherHouseholdNINOExist);       // http://localhost:9001/client/othermembernino/:nino 
router.get("/client/clientemail/:email", ValidatorClient, checkClientEmailExist);
router.get("/client/partneremail/:email", ValidatorClient, checkClientJointEmailExist);
router.get("/client/list", getClientList);
router.get("/client/clientid/:_id", getOneClient);
router.get("/client/clientOneref/:reference", getOneReference);     // http://localhost:9001/client/clientOneref/
router.get("/client/clientref/clientid/:clientId", getOneClientIdInClientRef);     // http://localhost:9001/client/clientref/clientId/64182ff5c11918c62cd57a13

router.post("/client/signup", signUpNewClient);                                     // http://localhost:9001/signup 
router.post("/client/clientref", createClientRef);                                  // http://localhost:9001/client/clientref/
router.post("/client/forgotref/", ValidatorForgottenRef, forgottenRef);             // http://localhost:9001/client/forgotref/
router.post("/client/forgotpwd/", ValidatorForgottenPwd, forgottenPwd);             // http://localhost:9001/client/forgotpwd/
router.put("/client/update/:_id", ValidatorClient, updateClient);


router.post("/client/clientreflogin", ValidatorClientRef, clientRefLogin);         // http://localhost:9001/client/clientReflogin/
router.post("/client/clientlogin/", ValidatorCreateRef, clientLogin);

router.put("/client/chpwd/:_id", ValidatorClientRef, changePwd);
router.put("/client/chmemdte/:_id", ValidatorClientRef, changeMemorableDate)

// partner/joint applicant routes

router.get("/joint/list", getJointList);
router.get("/joint/jointid/:_id", getOneJoint);
router.get("/joint/clientid/:clientId", getClientIdInJoint);
router.post("/joint/addclientjoint", ValidatorClientJoint, addClientJoint);                                   // http://localhost:9001/addclientjoint  
router.put("/joint/update/:_id", ValidatorClientJoint, updateJoint)
router.delete("/joint/delete/:_id", ValidatorClientJoint, deleteJoint)

// household members routes

router.get("/member/list", getMemberList);
router.get("/member/clientid/:clientId", getClientIDInMember);
router.get("/member/member/:_id", getOneMember);
router.post("/member/addclientmember", ValidatorClientOtherHousehold, addClientMember);        // http://localhost:9001/addclientotherhousehold  
router.put("/member/update/:_id", updateMember)
router.delete("/member/delete/:_id", ValidatorClientOtherHousehold, deleteMember)

//bid routes

router.post("/client/bid/", acceptBid);
router.get("/bid/clientid/:clientId", getBidListbyClientId);
router.get("/bid/property/position/:propertyId", getBidByPropertyId);
router.delete("/property/bid/withdraw/:propertyId", withdrawBid);

// property routes

router.get("/property/list", getPropertyList);
router.get("/property/:_id", getPropertyById);
router.get("/property/propertyid/:propertyId", getPropertyByPropertyId);
router.post("/guest/property/list/", GuestSearch)

// todo routes

router.post("/todo/newtodo/", ValidatorToDo, AddToDo);
router.get("/todo/client/:clientId", ValidatorToDo, GetOneClientToDoList);
router.get("/todo/client/info/:_id", ValidatorToDo, GetOneClientToDoInfo);
router.put("/todo/client/update/:_id", ValidatorToDo, UpdateToDo);

// message routes

router.post("/message/newmsg/", ValidatorMessage, AddMessage);
router.get("/message/listmsg/:clientId", ValidatorMessage, GetMessageByClient);
router.put("/message/updatemsg/:_id", ValidatorMessage, UpdateMessage);

// error routes

router.post("/client/err/", saveErrDetail);

router.all("*", (req, res) => {
    res.status(404).json({
        message: "Request not found"
    })
})

module.exports = router;
