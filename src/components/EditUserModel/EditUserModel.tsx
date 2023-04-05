import { FC } from "react";
import Button from "@mui/material/Button";
import { Box, Modal } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { UserDataType } from "../../utils/types";
import { ModalActions, formStyle, modalStyle } from "./styles";
import { useDispatch } from "react-redux";
import { editUser } from "../../users/usersSlice";
import { AppDispatch } from "../../store/store";

interface IEditUserModel {
  userData: UserDataType;
  open: boolean;
  handleCloseModal: () => void;
}

const EditUserModel: FC<IEditUserModel> = ({
  userData,
  open,
  handleCloseModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Formik
          initialValues={
            {
              name: {
                title: userData.name.title,
                first: userData.name.first,
                last: userData.name.last,
              },
              email: userData.email,
              location: {
                street: {
                  number: userData.location.street.number,
                  name: userData.location.street.name,
                },
                city: userData.location.city,
                country: userData.location.country,
              },
            } as Partial<UserDataType>
          }
          onSubmit={(values, { setSubmitting }) => {
            dispatch(editUser({ id: userData.id.value, values }));
            setSubmitting(false);
            handleCloseModal();
          }}
        >
          {({ isSubmitting }) => (
            <Form style={formStyle as React.CSSProperties}>
              <Field type="name" name="name.title" placeholder="Title" />
              <ErrorMessage name="name" component="div" />
              <Field type="name" name="name.first" placeholder="First name" />
              <ErrorMessage name="name" component="div" />
              <Field type="name" name="name.last" placeholder="Last name" />
              <ErrorMessage name="name" component="div" />
              <Field type="email" name="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
              <Field
                type="name"
                name="location.street.name"
                placeholder="Street"
              />
              <ErrorMessage name="name" component="div" />
              <Field
                type="name"
                name="location.street.number"
                placeholder="Street number"
              />
              <ErrorMessage name="name" component="div" />
              <Field type="name" name="location.city" placeholder="City" />
              <ErrorMessage name="name" component="div" />
              <Field
                type="name"
                name="location.country"
                placeholder="Country"
              />
              <ErrorMessage name="name" component="div" />
              <ModalActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={isSubmitting}
                >
                  Save
                </Button>
                <Button variant="outlined" onClick={handleCloseModal}>
                  Cancel
                </Button>
              </ModalActions>
            </Form>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};

export default EditUserModel;
