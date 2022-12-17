import React, {Component} from "react";
import {Link} from "react-router-dom";
import illustration from "../../assets/illustration-4.jpg";
import {findPublicProfileById} from "../../services/UserService";

class PlanForumHomeCardComponent extends Component {
    state = {
        plan: this.props.plan,
        user : {}
    }

    componentDidMount() {
        if (this.state.plan.user) {
            findPublicProfileById(this.state.plan.user)
                .then(user => this.setState({user: user}))
        }
    }

    render() {
        return <li className="wd-articles-article">
            <Link className="wd-articles-link" to={`/plan-forum/${this.state.plan._id}`}>
                <div className="wd-articles-content wd-articles-content-lhs">
                     <h4 className="wd-articles-title wd-high-index">{this.state.plan.name}</h4>
                    <img src={illustration} alt="illus" className="wd-fixed-img-1"/>
                    <div className="wd-articles-footer">
                        <h6 className="text-center wd-high-index wd-card-abs-btn-1">- By @{this.state.user.username}</h6>
                    </div>
                </div>
                <div className="wd-articles-content wd-articles-content-rhs"
                     aria-hidden="true">
                    <h4 className="wd-articles-title wd-high-index">{this.state.plan.name}</h4>
                    <img src={illustration} alt="illus" className="wd-fixed-img-1"/>
                    <div className="wd-articles-footer">
                        <h6 className="text-center wd-high-index wd-card-abs-btn-1">- By {this.state.user.username}</h6>
                    </div>
                </div>
            </Link>
        </li>
    }
}

export default PlanForumHomeCardComponent;

