import { Divider } from "antd";
import React from "react";
import AddressChoise from "components/Forms/AddressChoise";
import Residents from "./Residents/Residents";

const WorkWithUsersPage = ({ props }) => {
  return (
    <>
      <AddressChoise props={props} />
      <Divider />
      <div>
        <Residents props={props} />
      </div>
    </>
  );
};
export default WorkWithUsersPage;
