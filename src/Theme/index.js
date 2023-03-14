import { createTheme } from "@mui/material"
import { palette } from "./palette"
import { components } from "./components";
// import { shadows } from "./shadows";

export const initTheme = () => {
    return createTheme({
        palette,
        // shadows,
        components
    })
}
