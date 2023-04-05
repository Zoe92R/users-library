export type LocationType = {
  street: {
    number: number;
    name: string;
  };
  city: string;
  country: string;
};

export type IdType = {
  name: string;
  value: string;
};

export type UserDataType = {
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  picture: string; // medium
  location: LocationType;
  id: IdType;
};
