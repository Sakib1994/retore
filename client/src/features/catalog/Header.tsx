import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
type props = {
    darkMode: boolean,
    handleThemeChange: ()=>void
}
export default function Header({ darkMode, handleThemeChange}:props) {
    return (
        <AppBar position='static' sx={{mb: 2}}>
            <Toolbar>
                <Typography variant='h5'>
                    Re-store
                </Typography>
                <Switch checked={darkMode} onChange={handleThemeChange} />
                {/* <Button color="secondary" variant="contained" onClick={handleTheme}>Toggle dark mode</Button> */}
            </Toolbar>
        </AppBar>
    )
}
