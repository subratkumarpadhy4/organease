import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", color: "#94a3b8" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        OrganEase — Organ Donation Management System © {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
