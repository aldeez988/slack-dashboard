import React, { Component } from "react";
import logo_CYF_square from "../Components/Nav/logo-CYF-square.png";
class StudentLabel extends Component {
  render() {
    return (
      <div className="mt-5 label">
        <div className="d-flex flex-column justify-content-center">
          {/* <h3 className=" mt-3">This week Top Student:</h3> */}
          <h3 className=" mt-3">
            {`Messages target `}
            <i class="far fa-comments" style={{ fontSize: "30px" }} />:
          </h3>
          <h3 className=" mt-3">{this.props.targetThreads}</h3>
          <h3 className=" mt-3">
            {`Your messages`}
            <i class="far fa-comments" style={{ fontSize: "30px" }} />:
          </h3>
          <h3 className=" mt-3">{this.props.numberOfMessages}</h3>
          <h3 className=" mt-3">
            {`Calls target `}{" "}
            <i class="fa   fa-phone" style={{ fontSize: "30px" }} />:
          </h3>
          <h3 className=" mt-3">{this.props.targetCalls}</h3>
          <h3 className=" mt-3">
            {`Your calls`}
            <i class="fa fa-phone" style={{ fontSize: "30px" }} />:
          </h3>
          <h3 className=" mt-3">{this.props.numberOfCalls}</h3>
          <div className="d-flex flex-column justify-content-start">
            {/* <div>
              <h3 className=" mt-3">Your Stars</h3>
              <i
                class="fa fa-star"
                style={{ color: "gold", fontSize: "40px" }}
              />
            </div> */}
          </div>
          {/* <div>
            <h3 className=" mt-3">Your Medals:</h3>
            <i
              class="fas fa-award"
              style={{ color: "gold", fontSize: "40px" }}
            />
           
          </div> */}
        </div>
      </div>
    );
  }
}

export default StudentLabel;
