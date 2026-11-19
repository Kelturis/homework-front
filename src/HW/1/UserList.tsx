type UserType = { // ВСЕГДА⭕ Объект{} Тип КАЖДОГО пользователя
    id: number;           // Идентификатор
    name: string;         // Имя
    age: number;          // Возраст
    address: AddressType; // Объект{} Адрес
};

type AddressType = { // ВСЕГДА⭕ Объект{} ВЛОЖЕННЫЙ⏬ в UserType(address)
    street: string;  // Улица
    city: string;    // Город
};

type UserListPropsType = { // РОДИТЕЛЬСКАЯ🧙 Декомпозиция Типов
    users: UserType[];     // ИТОГОВЫЙ🏁 Массив[] пользователей
};

export const UserList = (props: UserListPropsType) => { // КОМПОНЕНТ списка
    return ( // Возвращаем JSX
        <div id={'hw01-users'}>
            <h2>User List:</h2>
            <ul>
                {props.users.map((user) => { // map() Перебираем Массив[] пользователей для Отрисовки🖼️
                    return (                           // ВОЗВРАЩАЕМ⏫ <li>
                        <li key={user.id} id={`hw01-user-${user.id}`}> {/* 🆔 пользователя */}
                            <strong>{user.name}</strong> (Age: {user.age})<strong> Address:</strong>
                            {user.address.street}, {user.address.city}
                        </li>
                    ); 
                })}
            </ul>
        </div>
    );
};
