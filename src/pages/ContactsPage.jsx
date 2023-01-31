import { Grid } from "@mui/material";

import React from "react";
import ContactsUs from "../components/ContactUs/ContactsUs";
import { Box } from "@mui/system";

const ContactsPage = () => {
  return (
    <div>
      <Box>
        <Grid>
          <ContactsUs />
        </Grid>
      </Box>
    </div>
  );
};

export default ContactsPage;
