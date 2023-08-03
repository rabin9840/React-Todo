import { RxAvatar } from "react-icons/rx";
import "./ProfileComponent.css";
const ProfileComponent = ({ username }) => {
	return (
		<>
			<div className='profile-container'>
				<RxAvatar className='custom-rx-avatar' />
				{username}
			</div>
		</>
	);
};

export default ProfileComponent;
