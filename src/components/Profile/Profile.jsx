import css from "./Profile.module.css"
const Profile = ({name, tag, location, image, stats}) => {
  return (
    <div className={css.profileWrapper}>
  <div className={css.profileInfoWrapper}>
        <img
          className={css.profileImg}
      src={image}
      alt="User avatar"
    />
    <p className={css.profileName}>{name}</p>
    <p className={css.profileTag}>@{tag}</p>
    <p className={css.profileLocation}>{location}</p>
  </div>
  <ul className={css.profileList}>
    <li className={css.profileListItem}>
      <span>Followers</span>
      <span className={css.spanData}>{stats.followers}</span>
    </li>
    <li className={css.profileListItem}>
      <span>Views</span>
      <span className={css.spanData}>{stats.views}</span>
    </li>
    <li className={css.profileListItem}>
      <span>Likes</span>
      <span className={css.spanData}>{stats.likes}</span>
    </li>
  </ul>
</div>
  )
}
export default Profile
