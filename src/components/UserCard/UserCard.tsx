import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";

import { UserDataType } from "../../utils/types";
import {
  CardHeader,
  CardContainer,
  CardContent,
  UserImage,
  UserName,
  CardDetails,
  CardEmail,
  CardLocation,
  CardId,
  CardActions,
} from "./styles";
import { getFullLocation, getId } from "../../utils/utilsFunctions";
import EditUserModel from "../EditUserModel/EditUserModel";
import { deleteUser } from "../../users/usersSlice";
import { AppDispatch } from "../../store/store";

interface IUserCard {
  userData: UserDataType;
}

const UserCard: FC<IUserCard> = ({ userData }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenModal = () => setIsOpenModal(true);

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <CardContainer>
      <CardContent>
        <CardHeader>
          <UserImage src={userData.picture} />
          <UserName>{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</UserName>
        </CardHeader>
        <CardDetails>
          <CardEmail>{userData.email}</CardEmail>
          <CardLocation>{getFullLocation(userData.location)}</CardLocation>
          <CardId>{getId(userData.id)}</CardId>
        </CardDetails>
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={handleOpenModal}>
          Edit
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={() => dispatch(deleteUser(userData.id.value))}
        >
          Delete
        </Button>
      </CardActions>
      <EditUserModel
        userData={userData}
        open={isOpenModal}
        handleCloseModal={handleCloseModal}
      />
    </CardContainer>
  );
};

export default UserCard;
