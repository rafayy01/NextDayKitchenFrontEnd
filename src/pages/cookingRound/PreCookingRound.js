import React,{ useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { preRoundContext } from "../../Contexts/PreRound";
import axios from "axios";
import { Link } from "react-router-dom";
import "./frames2.css";
const PreCookingRound = () => {
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");
  const {
    preRoundData,
    setPreRoundData,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
  } = useContext(preRoundContext);
  console.log("Pre Round Data", preRoundData);
  console.log("Start Date", startDate);
  console.log("End Date", endDate);
  const header = { "Content-Type": "application/json" };
  const getPreRoundData = async () => {
    await axios
      .post(
        "http://localhost:8001/api/rounds/getprerounddata",
        { startDate: startDate, endDate: endDate },
        header
      )
      .then((res) => {
        console.log("Data from Api", res.data);
        setPreRoundData(res.data);
      })
      .catch((err) => console.log(err.message));
   
  };
  console.log("Pre Round Data", preRoundData);

  return (
    <div className="CookingRound">
      <Row>
        <Col className="startDate">
          <h4>Enter Start Date</h4>

          <input
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            style={{ width: "50%", marginLeft: "12px", height: "40px" }}
          />
        </Col>
        <Col className="endDate">
          <h4>Enter End Date</h4>

          <input
            type="date"
            min={startDate}
            onChange={(e) => setEndDate(e.target.value)}
            style={{ width: "50%", marginLeft: "12px", height: "40px" }}
          />
        </Col>
      </Row>
      <Row className="submit">
        <div>
          <Link to="/precookinground1">
            <Button
              class="btn btn-lg"
              style={{width:"90px",height:"50px",fontSize:"20px",backgroundColor:"green",color:"white"}}
              onClick={() => getPreRoundData()}
            >
              Submit
            </Button>
          </Link>
        </div>
      </Row>
    </div>
  );
};

export default PreCookingRound;
