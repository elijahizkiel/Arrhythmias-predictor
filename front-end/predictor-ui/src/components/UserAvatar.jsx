import assets from '../assets/imgs'
function UserAvatar({ imgSource }) {
  return (
    <div className="user-avatar">
      <img src={assets.listBullet} alt="" />
    </div>
  );
}

export default UserAvatar;
