import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function Buttons(props) {
  return (
    <Stack spacing={100} direction="row">
      {/* <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button> */}
      <Button variant={props.variant} onClick={props.onClick}>{props.children}</Button>
    </Stack>
  );
}
