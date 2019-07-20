import React, { Component } from "react";

class NewCards extends Component {
  render() {
    return (
      <div className="cards-container container outer align-content-center">
        <div className="row inner">
          <div class="card text-white bg-info col-md-3 col-xs-12 mt-3 mr-3">
            <div class="card-header">
              Calls
              <i class="fas fa-phone-volume" style={{ color: "white" }} />
            </div>
            <div class="card-body">
              <h5 class="card-title">Target</h5>
              <p class="card-text">Calls target for this week</p>
            </div>
          </div>
          <div class="card text-white bg-info col-md-3 col-xs-12 mt-3 mr-3">
            <div class="card-header">Masseges</div>
            <div class="card-body">
              <h5 class="card-title">Target</h5>
              <p class="card-text">Messages target for this week</p>
            </div>
          </div>
          <div class="card text-white bg-info col-md-3 col-xs-12 mt-3 mr-3">
            <div class="card-header">Ranking and Achivements</div>
            <div class="card-body">
              <h5 class="card-title">Top 3 Student</h5>
              <p class="card-text">
                <div>
                  <p className="col-md-12 mt-3">
                    Your Stars <i class="align-self-centre fa fa-star" />
                  </p>

                  <p className="col-md-12 mt-3">
                    Your Medals <i class="fa fa-medal" />
                  </p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewCards;
