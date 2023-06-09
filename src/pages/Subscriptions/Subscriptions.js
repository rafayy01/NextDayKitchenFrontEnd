// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import UserList from "../../components/UserList/UserList";
// import ListUser from "./SubscriptionsList.json";
// import { toastmessage } from "../../components/ToastMessage/toast";
// import "./Subscriptions.css";

// function Subscriptions() {
//   const [list, setList] = useState(ListUser);
//   const [name, setName] = useState("");
//   const [calories, setCalories] = useState("");
//   const [updateButton, setUpdateButton] = useState(false);
//   const [updateId, setUpdateId] = useState("");


//   const HandleSubmit = (e) => {
//     e.preventDefault();
//     const id = list.length + 1;
//     const addUser = {
//       id,
//       username,
//       password,
//     };
//     const newlist = [...list];
//     newlist.push(addUser);
//     setList(newlist);
//     toastmessage("New User Created Successfully", "success");

//     console.log(list);
//   };
//   const HandleUpdateList = (id) => {
//     const UpdatedArrayItem = list.filter((item) => item.id === id);
//     setUsername(UpdatedArrayItem[0].username);
//     setPassword(UpdatedArrayItem[0].password);
//     setUpdateId(UpdatedArrayItem[0].id)
//     setUpdateButton(true);
//   };
//   const HandleUpdateSumbit = (e) => {
//     e.preventDefault();
//     const UpdatedArrayItem = list.map((item) => {
//       if (item.id === updateId) {
//         return { ...item, username: username, password: password };
//       }
//       return item;
//     });
//     setList(UpdatedArrayItem)
//     setUpdateButton(false);
//     setUsername("");
//     setPassword("");
//   };

//   const HandleDeleteItem = (id) => {
//     const filterArrayItem = list.filter((item) => item.id !== id);
//     setList(filterArrayItem);
//     toastmessage("User has been Deleted", "success");
//   };
//   return (
//     <Row className="userBackground">
//       <Row>
//         <Col></Col>
//         <Col className="mt-5">
//           <h2 className="rounded text-center bg-success text-white w-100">
//             User Form
//           </h2>
//           <Form onSubmit={updateButton ?HandleUpdateSumbit : HandleSubmit  }>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control
//                 type="email"
//                 placeholder="Enter email"
//                 value={username}
//                 onChange={(e) => {
//                   setUsername(e.target.value);
//                 }}
//               />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                 }}
//               />
//             </Form.Group>
//             {updateButton ? (
//               <Button variant="primary" type="submit" className="w-100">
//                 Update
//               </Button>
//             ) : (
//               <Button variant="primary" type="submit" className="w-100">
//                 Submit
//               </Button>
//             )}
//           </Form>
//         </Col>
//         <Col></Col>
//       </Row>
//       <Row>
//         <Col className="mt-4">
//           <UserList
//             list={list}
//             updateList={HandleUpdateList}
//             deleteItem={HandleDeleteItem}
//           />
//         </Col>
//       </Row>
//     </Row>
//   );
// }

// export default User;
