import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>

    <a style={{ position:"absolute", alignItems: "center" , color:'#fff', left:80, fontWeight:"bold"}} target="_blank" rel="noreferrer" href="https://github.com/aida-solat">By Soli</a>
   
    <SearchBar />
  </Stack>
);

export default Navbar;
