import { RxAvatar } from "react-icons/rx";
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
