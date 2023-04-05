import styled from "styled-components";

export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
};

export const ModalActions = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 16px;
`;
