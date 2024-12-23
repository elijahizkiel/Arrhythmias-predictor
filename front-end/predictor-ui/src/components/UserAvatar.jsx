function UserAvatar({ imgSource }) {
  return (
    <div className="user-avatar">
      <img src={imgSource} alt="user initials" />
    </div>
  );
}

export default UserAvatar;
