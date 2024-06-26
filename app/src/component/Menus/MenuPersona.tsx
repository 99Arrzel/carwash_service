import { Menu, MenuItem, Typography } from "@mui/material"
import Fade from "@mui/material/Fade"
import { TMenu } from "@type/default"

export default function MenuPersona(props: TMenu) {
  return (
    <Menu
      id={props.id}
      anchorEl={props.anchorEl}
      open={props.open}
      onClose={() => props.handleClose()}
      MenuListProps={{
        "aria-labelledby": props.id,
      }}
      TransitionComponent={Fade}
    >
      <MenuItem onClick={() => props.handleClose("/persona/gestion-persona")}>
        <Typography variant="inherit" noWrap>
          Gestión de persona
        </Typography>
      </MenuItem>
    </Menu>
  )
}
