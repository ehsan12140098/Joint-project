import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import styled from "styled-components";

export function BasicPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={10} variant="outlined" size="large" disabled />
    </Stack>
  );
}
