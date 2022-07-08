import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Search from '@mui/icons-material/Search';
import QueryBuilder from '@mui/icons-material/QueryBuilder';
import Addchart from '@mui/icons-material/Addchart';
import ExitToApp from '@mui/icons-material/ExitToApp';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import Calculate from '@mui/icons-material/Calculate';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import Engineering from '@mui/icons-material/Engineering';
import Notifications from '@mui/icons-material/Notifications';


export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <Search />
      </ListItemIcon>
      <ListItemText primary="Pesquisa de Paciênte" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FamilyRestroomIcon />
      </ListItemIcon>
      <ListItemText primary="Cadastro de Paciênte" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Addchart />
      </ListItemIcon>
      <ListItemText primary="Cadastro de Prontuário" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Engineering />
      </ListItemIcon>
      <ListItemText primary="Cadastrar Usuário" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Orçamento" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <QueryBuilder />
      </ListItemIcon>
      <ListItemText primary="Agendamento" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Relatórios" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Notifications />
      </ListItemIcon>
      <ListItemText primary="Lembretes" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <Calculate />
      </ListItemIcon>
      <ListItemText primary="Calculadora" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CalendarMonth/>
      </ListItemIcon>
      <ListItemText primary="Calendário" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ExitToApp />
      </ListItemIcon>
      <ListItemText primary="LogOff" />
    </ListItemButton>

  </React.Fragment>
);

