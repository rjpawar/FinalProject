import React from "react";
import PlanForumHomeCardComponent from "./PlanForumHomeCardComponent";
import PlanService from "../../services/PlanService";


class PlanForumHomeComponent extends React.Component {

    loadPlans = () => {
        PlanService.findAllPlans()
            .then(fetchedPlans => this.setState({plans: fetchedPlans}))
    }

    state = {
        plans: []
    }

    componentDidMount() {
        this.loadPlans()
    }

    render() {
        return <div className="wd-card-body-2" style={{backgroundColor:"turquoise" }}>
            <h4 className="h4 text-center py-5 font-weight-bold wd-one-point-6-rem wd-articles-title text-black"><em>Itineraries</em></h4>
            <ol className="wd-articles">
                {this.state.plans &&
                 this.state.plans.map(
                     plan => {
                         return <PlanForumHomeCardComponent key={plan._id} plan={plan}/>
                     }
                 )
                }
            </ol>
        </div>
    }
}

export default PlanForumHomeComponent;
