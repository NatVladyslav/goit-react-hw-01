import FriendListItem from "./FriendListItem";
import css from './FriendList.module.css'
const Friendlist = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map((item) => {
        return (
          <li className={css.item} key={item.id}>
            <FriendListItem
              photo={item.avatar}
              name={item.name}
              status={item.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Friendlist;