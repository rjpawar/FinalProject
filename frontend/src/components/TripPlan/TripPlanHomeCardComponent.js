import React, {Component} from "react";
import {Link} from "react-router-dom";
import illustration from "../../assets/illustration-3.png";
import {FaCheck} from "react-icons/all";

class TripPlanHomeCardComponent extends Component {
    state = {
        planBeingEdited: false,
        plan: this.props.plan
    }

    render() {
        return <li className="wd-articles-article">
            <div className="wd-articles-link">
                <div className="wd-articles-content wd-articles-content-lhs">
                    {this.state.planBeingEdited &&
                     <input
                         className="form-control wd-high-index"
                         value={this.state.plan.name} onChange={(e) => {
                         const newTitle = e.target.value;
                         this.setState(prevState => ({
                             plan: {
                                 ...prevState.plan,
                                 name: newTitle
                             }
                         }))
                     }}/>
                    }
                    {!this.state.planBeingEdited &&
                     <Link className="wd-articles-title wd-high-index"
                           to={`/user/${this.state.plan.user}/plans/${this.state.plan._id}`}>{this.state.plan.name}</Link>
                    }
                    <img src={illustration} alt="illus" className="wd-fixed-img"/>
                    <div className="wd-articles-footer">
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.setState({planBeingEdited: true})}
                             className="btn btn-light wd-card-abs-btn-1">
                             Edit Title
                         </button>
                        }
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.deletePlan(this.state.plan._id)}
                             className="btn btn-light wd-card-abs-btn-2">
                             Delete
                         </button>
                        }
                        {this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.updatePlan(this.state.plan._id,
                                                                  this.state.plan)
                                 .then(this.setState({
                                                         planBeingEdited: false
                                                     }))}
                             className="btn btn-light btn-block">
                             <FaCheck size={28}/>
                         </button>
                        }
                    </div>
                </div>
                <div className="wd-articles-content wd-articles-content-rhs"
                     aria-hidden="true">
                    {this.state.planBeingEdited &&
                     <input
                         className="form-control wd-high-index"
                         value={this.state.plan.name} onChange={(e) => {
                         const newTitle = e.target.value;
                         this.setState(prevState => ({
                             plan: {
                                 ...prevState.plan,
                                 name: newTitle
                             }
                         }))
                     }}/>
                    }
                    {!this.state.planBeingEdited &&
                     <Link className="wd-articles-title wd-high-index"
                           to={`/user/${this.state.plan.user}/plans/${this.state.plan._id}`}>{this.state.plan.name}</Link>
                    }
                    <img src={illustration} alt="illus" className="wd-fixed-img"/>
                    <div className="wd-articles-footer">
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.setState({planBeingEdited: true})}
                             className="btn btn-light wd-card-abs-btn-1">
                             Edit Title
                         </button>
                        }
                        {!this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.deletePlan(this.state.plan._id)}
                             className="btn btn-light wd-card-abs-btn-2">
                             Delete
                         </button>
                        }
                        {this.state.planBeingEdited &&
                         <button
                             onClick={() => this.props.updatePlan(this.state.plan._id,
                                                                  this.state.plan)
                                 .then(this.setState({
                                                         planBeingEdited: false
                                                     }))}
                             className="btn btn-light btn-block">
                             <FaCheck size={28}/>
                         </button>
                        }
                    </div>
                </div>
            </div>
        </li>
    }
}

export default TripPlanHomeCardComponent;

