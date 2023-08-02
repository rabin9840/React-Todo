import Dashboard from "../components/Dashboard/Dashboardmain/Dashboard";
import CreateTodos from "../components/Common Component/CreateTodos";
import CommonLayout from "../components/Layout/CommonLayout";

const DashboardPage = () => {
	return (
		<>
			<CommonLayout>
				<CreateTodos />
				<Dashboard />
			</CommonLayout>
		</>
	);
};
export default DashboardPage;
