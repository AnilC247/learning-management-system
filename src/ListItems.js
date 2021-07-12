import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import GroupWorkIcon from '@material-ui/icons/GroupWork';

export const mainListItems = (
    <div>
        <ListSubheader inset>My School</ListSubheader>        
        <ListItem button>
            <ListItemIcon>
                <AddCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Add Course" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Account" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <LiveHelpIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Support" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <GroupWorkIcon />
            </ListItemIcon>
            <ListItemText primary="Become a partner" />
        </ListItem>
    </div>
);