import Dashboard from "../components/Dashboard/Dashboardmain/Dashboard";
import CreateTodos from "../components/Common Component/CreateTodos";
import LogoutButton from "../components/Common Component/LogoutButton";
import CommonLayout from "../components/Layout/CommonLayout";

const DashboardPage = () => {
	return (
		<>
			<CommonLayout>
				<CreateTodos />
				<LogoutButton />
				<Dashboard />
			</CommonLayout>
		</>
	);
};
export default DashboardPage;
