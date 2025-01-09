import { useUser } from "@clerk/clerk-react";
import FinancialRecoedForm from "./financial-recoed-form";
import FinancialRecoedFormList from "./financial-recoed-form";


export const DashBoard = () => {

    const { user } = useUser()

    return (
        <div className="dashboard-container">
            {" "}
            <h1>Welcome {user?.firstName}! Here are Your Finances:</h1>
            <FinancialRecoedForm />
            <FinancialRecoedFormList />
        </div>
    )

}