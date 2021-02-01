import baseAvatar from '../../assets/avatars/Eva.jpg';

type TAvatar = {
  avatar: string | null;
};

const Avatar = ({ avatar }: TAvatar): JSX.Element => {
  const imgSrc = avatar ? avatar : baseAvatar;

  return (
    <div className="avatar">
      <img src={imgSrc} alt="avatar-img" className="avatar-img"></img>
    </div>
  );
};
export default Avatar;
