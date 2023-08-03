import { RxAvatar } from "react-icons/rx";
import "./ProfileComponent.css";
const ProfileComponent = ({ username }) => {
	return (
		<>
			<div className='profile-container'>
				<RxAvatar className='custom-rx-avatar' />
				<div className='username'>{username}</div>
			</div>
		</>
	);
};

export default ProfileComponent;
