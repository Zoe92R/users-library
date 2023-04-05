import { FC } from "react";

import { UserLibraryContainer } from "./styles";
import UsersCards from "../../components/UsersCards/UsersCards";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import CircularIndeterminate from "../../components/Loader/Loader";

const UsersLibrary: FC = () => {
  const isLoading = useSelector((state: RootState) => state.users.isLoading);

  return (
    <UserLibraryContainer>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <h1>Users Library</h1>
          <UsersCards />
        </>
      )}
    </UserLibraryContainer>
  );
};

export default UsersLibrary;
