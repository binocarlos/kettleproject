import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="10vh"
      bgcolor="#5AA9E6"
    >
      <Typography component="h1" variant="h5" color="#F9F9F9">
        Footer
      </Typography>
    </Box>
  );
}
