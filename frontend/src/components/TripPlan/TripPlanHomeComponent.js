import React from "react";
import TripPlanHomeCardComponent from "./TripPlanHomeCardComponent";
import illustration from "../../assets/createTrip.png";

import PlanService from "../../services/PlanService";


class TripPlanHomeComponent extends React.Component {

    async componentDidMount() {
        if (this.state.isLogin) {
            const userRole = await JSON.parse(localStorage.getItem('user')).role;
            this.setState({userRole: userRole})
            if (this.state.userRole === 'Admin') {
                this.loadPlansAdmin()
            } else {
                this.loadPlans(this.state.userId);
            }
        }
    }

    state = {
        isLogin: localStorage.getItem('user') !== null,
        plans: [],
        userId: this.props.match.params.uid,
        userRole: ''
    }
    updatePlan = (planId, plan) => PlanService.updatePlan(planId, plan)
        .then(() => this.setState(prevState => ({
            plans: prevState.plans.filter(p => p._id === planId ? plan : p)
        })));

    createNewPlan = (userId) => {
        const newPlan = {
            name: "New Plan",
            user: this.state.userId
        }
        PlanService.createPlanForUser(userId, newPlan)
            .then(this.loadPlans)
    }

    createNewPlanaAdmin = (userId) => {
        const newPlan = {
            name: "New Plan",
            user: this.state.userId
        }
        PlanService.createPlanForUser(userId, newPlan)
            .then(this.loadPlansAdmin)
    }

    loadPlansAdmin = () => {
        PlanService.findAllPlans()
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    loadPlans = () => {
        PlanService.findPlansForUser(this.state.userId)
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    deletePlan = (planId) =>
        PlanService.deletePlan(planId)
            .then(() => this.setState(prevState => ({
                plans: prevState.plans.filter(p => p._id !== planId)
            })));


    render() {
        return <div className="wd-card-body" style={{backgroundColor: "turquoise"}}>
            {!this.state.isLogin &&
             <div>Please log in! {this.props.history.push("/signin")}</div>}
            <h4 className="text-center py-4 wd-articles-title text-black"><em>“We travel, some of
                us forever, to
                seek other places, other lives, other souls.” – Anais Nin</em></h4>
            {this.state.userRole === 'Admin' &&
             <h4 className="text-center pb-5 wd-articles-title text-black">
                 <em className="border border-dark p-2">You are viewing as <span className="font-weight-bold">ADMIN</span></em></h4>}
            <ol className="wd-articles">
                {this.state.userRole !== 'Admin'&& <li className="wd-articles-article">
                    <button
                        onClick={() => this.createNewPlan(this.state.userId)} className="wd-articles-link">
                        <div className="wd-articles-content wd-articles-content-lhs">
                            <h4 className="wd-articles-title">Create a new plan</h4>
                            <img src={illustration} alt="illus" className="wd-fixed-img"/>
                        </div>
                        <div className="wd-articles-content wd-articles-content-rhs"
                             aria-hidden="true">
                            <h2 className="wd-articles-title">Create a new trip</h2>
                            <img src={illustration} alt="illus" className="wd-fixed-img"/>

                        </div>
                    </button>
                </li>}

                {this.state.userRole === 'Admin'&& <li className="wd-articles-article">
                    <button
                        onClick={() => this.createNewPlanaAdmin(this.state.userId)} className="wd-articles-link">
                        <div className="wd-articles-content wd-articles-content-lhs">
                            <h2 className="wd-articles-title">Create a new plan</h2>
                            <img src={illustration} alt="illus" className="wd-fixed-img"/>

                        </div>
                        <div className="wd-articles-content wd-articles-content-rhs"
                             aria-hidden="true">
                            <h2 className="wd-articles-title">Create a new trip</h2>
                            <img src={illustration} alt="illus" className="wd-fixed-img"/>

                        </div>
                    </button>
                </li>}
                {this.state.plans &&
                 this.state.plans.map(plan => <TripPlanHomeCardComponent key={plan._id} plan={plan}
                                                                         deletePlan={this.deletePlan}
                                                                         updatePlan={this.updatePlan}/>)}
            </ol>
        </div>
    }
}

export default TripPlanHomeComponent;
