import type { UserType } from "./HW2";

type CurrentUserPropsType = {
    user: UserType;           // id пользователя, имя пользователя, возраст пользователя, типизированный объект адреса
};

export const CurrentUser = (props: CurrentUserPropsType) => { // Создаёт компонент для показа ОДНОГО друга
    return (
        <li id={`hw02-user-${props.user.id}`}> {/* Создаёт строку и задаёт ей HTML id по номеру пользователя */}
            <strong>{props.user.name}</strong>
            (Age: {props.user.age})
            <strong> Address: </strong>
            {props.user.address.street}, {props.user.address.city}
        </li>
    );
};
