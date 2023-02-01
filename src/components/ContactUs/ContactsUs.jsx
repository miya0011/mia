// import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../ContactUs/Contact.css"
const ContactsUs = () => {
  return (
    <Box>
      <div className="contact">
        <p>
          ОсОО "Mango books", продажей книг из местных и зарубежных издательств.
          В нашем ассортименте каждый найдет себе книгу по вкусу.
        </p>
        <p>Адрес: г.Бишкек, Табышалиева 29</p>
        <p>Телефоны: 0555000000, 0700777777</p>
      </div>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11695.544561728426!2d74.57884692603255!3d42.87524730191702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7d04d040001%3A0x435e5287f35c7d3c!2z0JrRg9GA0YHRiyDQv9GA0L7Qs9GA0LDQvNC80LjRgNC-0LLQsNC90LjRjyBNYWtlcnMgQ29kaW5nIEJvb3RjYW1w!5e0!3m2!1sru!2skg!4v1673244678621!5m2!1sru!2skg"
          style={{
            width: "100%",
            height: "800px",
            border: "0px",
          }}
        ></iframe>
      </div>
    </Box>
  );
};

export default ContactsUs;
