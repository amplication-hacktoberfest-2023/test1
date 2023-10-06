import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const CutomerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Last Name" source="lastName" />
      </SimpleForm>
    </Edit>
  );
};
