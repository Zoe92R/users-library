import { FC } from "react";
import { useSelector } from "react-redux";

import UserCard from "../UserCard/UserCard";
import { UsersCardsContainer } from "./styles";
import { RootState } from "../../store/store";

const UsersCards: FC = () => {
  const users = useSelector((state: RootState) => state.users.data);
  const isLoading = useSelector((state: RootState) => state.users.isLoading);

  return (
    <UsersCardsContainer>
      {!!users.length &&
        !isLoading &&
        users.map((userData: any, index: number) => (
          <UserCard userData={userData} key={index} />
        ))}
    </UsersCardsContainer>
  );
};

export default UsersCards;
