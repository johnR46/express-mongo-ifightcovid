const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Connect to MongoDB
mongoose
  .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/*
  import model 
  
  */
const Login = require("./models/Login");
const Form14dayPatient = require("./models/Form14dayPatient");
const PatientHistoryInformation = require('./models/PatientHistoryInformation');
const QuestionForm14day = require('./models/QuestionForm14day ');
const QuestionHealtform = require('./models/QuestionHealtform');
const QuestionScreening = require('./models.QuestionScreening');
const RegisterParent = require("./models/RegisterParent");

// for หมอ / พยาบาล login ?
app.post("/login/auth", (req, res) => {
  const newAuth = new Login({
    user: req.body.user,
    password: req.body.password,
  });
  if (newAuth.user === "john" && newAuth.password === "123") {
    res.json(true);
  } else {
    res.json(false);
  }
});

// for ใครจะมาลงทะเบียนวะ
app.post("/login/add", (req, res) => {
  const newLogin = new Login({
    user: req.body.user,
    password: req.body.password,
  });
  newLogin.save().then(() => res.json(newLogin));
});

app.get("/logins", async (req, res) => {
  const logins = await Login.find({});
  res.json(logins);
});

// Form14dayPatient หน้าบันทึกฟอร์ม14วัน
app.post("/form14daypatient/add", (req, res) => {
  const newForm14daypatient = new Form14dayPatient({
    screeningDate: req.body.screeningDate,
    status: req.body.status,
  });
  newForm14daypatient.save().then(() => res.json(newForm14daypatient));
});

app.get("/form14daypatients", async (req, res) => {
  const form14daypatient = await Form14daypatient.find({});
  res.json(form14daypatient);
});


/*
PatientHistoryInformation add 
*/
app.post("/patientInfo/add", (req, res) => {
  const patientInfo = new PatientHistoryInformation({
    screeningDate: req.body.screeningDate,
    status: req.body.status,
  });
  patientInfo.save().then(() => res.json(patientInfo));
});

// PatientHistoryInformation get all 
app.get("/patientInfos", (req, res) => {
  const patientInfo = await PatientHistoryInformation.find({});
  res.json(patientInfo);
});


/*
QuestionForm14day add
*/
app.post("/questionForm14day/add", (req, res) => {
  const questionForm14day = new QuestionForm14day({
    question: req.body.question,
    answer: req.body.answer,
  });
  questionForm14day.save().then(() => res.json(questionForm14day));
});
/*
QuestionForm14day get all 
*/
app.get("/questionForm14days", (req, res) => {
  const questionForm14days = await QuestionForm14day.find({});
  res.json(questionForm14days);
});




/*
QuestionHealtform add 
*/
app.post("/questionHealtform/add", (req, res) => {
  const questionHealtform = new QuestionHealtform({
    question: req.body.question,
    answer: req.body.answer,
  });
  questionHealtform.save().then(() => res.json(questionHealtform));
});

/*
QuestionHealtform get all  
*/
app.get("/questionHealtforms", (req, res) => {
  const questionHealtform = await QuestionHealtform.find({});
  res.json(questionHealtform);
});


/*
QuestionScreening add 
*/
app.post("/questionScreening/add", (req, res) => {
  const questionScreening = new QuestionScreening({
    question: req.body.question,
    answer: req.body.answer,
  });
  questionScreening.save().then(() => res.json(questionScreening));
});

/*
QuestionScreening get all  
*/
app.get("/questionScreenings", (req, res) => {
  const questionHealtform = await QuestionScreening.find({});
  res.json(questionHealtform);
});

/*
   register  
*/
app.post("/register/add", (req, res) => {
  const newRegister = new RegisterParent({
    firstNameLastName: req.body.firstNameLastName,
    dateOfBirth: req.body.dateOfBirth,
    personId: req.body.personId,
    address: req.body.address,
    district: req.body.district,
    phone: req.body.phone,
  });
  newRegister.save().then(() => res.json(newRegister));
});

app.get("/registers", async (req, res) => {
  const registers = await RegisterParent.find({});
  res.json(registers);
});


const port = 3000;
app.listen(port, () => console.log("Server running..."));
