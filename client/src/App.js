import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Alert } from "react-bootstrap";
import { useState, useEffect } from "react";
import {
  Routes as Switch,
  Route,
  Navigate as Redirect,
  Router
} from "react-router-dom";
import LoginForm from "./pages/LoginForm.js";
import CoursesList from "./pages/CoursesList.js";
import NavigationBar from "./base/navigationBar/NavigationBar.jsx";
import Questions from "./pages/questions/questions";
import Answers from "./pages/answers/answers";
import Profile from "./pages/profile/profile";
import MyQuestions from "./pages/myQuestions/myQuestions";
import Exam from "./pages/exam/exam";
import parsedQuestions from "./constants/parsed";
import Home from "./pages/home/home";

// import SGList from './components/SGList.js'
// import SGView from './components/SGView.js'
// import AdminSGList from './components/AdminSGList.js'
// import AdminSGView from './components/AdminSGView.js'
// import GroupSGView from './components/GroupSGView.js'
// import MeetingsList from './components/MeetingsList.js'
// import NewSG from './components/NewSG.js'
// import NewMeeting from './components/NewMeeting.js'
// import API from './API'

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!loggedIn) setMessage("");
  }, [loggedIn]);

  // useEffect(() => {
  // 	const checkAuth = async () => {
  // 		try {
  // 			const user = await API.getUserInfo()
  // 			setLoggedIn(true)
  // 			user.admin ? setAdmin(true) : setAdmin(false)
  // 		} catch (err) {
  // 			console.error(err.error)
  // 		}
  // 	}
  // 	checkAuth()
  // }, [])

  // const doLogin = async credentials => {
  // 	try {
  // 		const username = await API.login(credentials)
  // 		setLoggedIn(true)
  // 		setMessage({ msg: `Welcome, ${username}!`, type: 'success' })
  // 		const user = await API.getUserInfo()
  // 		user.admin ? setAdmin(true) : setAdmin(false)
  // 	} catch (err) {
  // 		setMessage({ msg: err, type: 'danger' })
  // 	}
  // }

  const doLogout = async () => {
    // await API.logout()
    setLoggedIn(false);
    setAdmin(false);
  };

  return (
    <Container fluid>
      <Row>
        <Col className="px-0">
          <NavigationBar
            logged={loggedIn}
            logout={doLogout}
            setlogged={setLoggedIn}
          />
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={6} className="mx-auto">
          {message ? (
            <Alert
              variant={message.type}
              onClose={() => setMessage("")}
              dismissible={!message.noclose}
            >
              {message.msg}
            </Alert>
          ) : null}
        </Col>
      </Row>
      <Row className="my-4">
        <Col xs={10} md={8} className="mx-auto">
          {/* <Exam question={parsedQuestions.quiz.question} /> */}
          {/* {loggedIn ? <CoursesList/> : <LoginForm login={() => setLoggedIn(true)}/>} */}
          {loggedIn ? (
            <>
                <Switch>
                  {/* Route to show the homepage */}

                  <Route
                    path="/"
                    exact
                    element={
                      <>
                         <Home />
                      </>
                    }
                  />
				   <Route
                    path="/profile"
                    exact
                    element={
                      <>
                         <Profile/>
                      </>
                    }
                  />
				   <Route
                    path="/courses"
                    exact
                    element={
                      <>
                         <CoursesList />
                      </>
                    }
                  />
				   <Route
                    path="/questions"
                    exact
                    element={
                      <>
                         <Questions/>
                      </>
                    }
                  />
                 
                  {/*  */}
                  {/* <Answers/> */}
                  {/*  */}
                  {/* <MyQuestions /> */}
                </Switch>
            </>
          ) : (
            <LoginForm login={() => setLoggedIn(true)} />
          )}
          {/* <span onClick={() => setLoggedIn(true)}>CLICK TO LOGIN</span> */}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
