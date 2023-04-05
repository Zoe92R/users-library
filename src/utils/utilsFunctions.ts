import { IdType, LocationType, UserDataType } from "./types";

export const getFullLocation = (location: LocationType): string =>
  `${location.street.number} ${location.street.name}, ${location.city}, ${location.country}`;

export const getId = (id: IdType): string => {
  if (id.name && id.value) {
    return `${id.name} ${id.value}`;
  } else if (id.name) {
    return id.name;
  } else {
    return "";
  }
};

export const getUsersDataToSave = (
  data: any
  // data: Required<UserDataType[]>
) =>
  data.map(({ name, email, picture, location, id }: any) => ({
    name,
    email,
    picture: picture.medium,
    location: {
      street: location.street,
      city: location.city,
      country: location.country,
    },
    id,
  }));
