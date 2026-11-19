import { CurrentUser } from "./CurrentUser";
import type { UsersObjectType } from "./HW2";

type UserList2PropsType = {  // Типы которые КОМПОНЕНТА получает от РОДИТЕЛЯ🧙
    users: UsersObjectType;  // список друзей — Массив[] Объектов{}
    filterUsers: () => void; // Функция(), запускающая ФИЛЬТРАЦИЮ🔃, НИЧЕГО НЕ ВОЗВРАЩАЕТ(void)
};

export const UserList2 = (props: UserList2PropsType) => {
    return (
        <div id={"hw02-users"}>
            <h2>User List:</h2>
            <button id={"hw02-filter-button"} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>
            <ul>
                {/* map() перебирает Массив[] Объектов{}  друзей по одному */}
                { props.users.myFriends.map((user) => (
                    <CurrentUser key={user.id} user={user} />
                )) }
            </ul>
        </div>
    );
};
