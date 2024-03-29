/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router';
import { withTracker } from 'meteor/react-meteor-data';
import { can } from '../../../lib/scopes';

class AdminSidebar extends React.Component {
    render() {
        const style = {
            position: 'fixed',
            top: '0px',
            bottom: '0px',
            left: '0px',
            paddingBottom: '1em',
            background: 'rgb(27, 28, 29)',
            overflowY: 'auto',
            overflowX: 'hidden',
        };
        return (
            <Menu vertical inverted pointing style={style}>
                <Menu.Item>
                    <Menu.Header as='h2' name='nlu'>
                        Administración
                    </Menu.Header>
                    {can('projects:r', { anyScope: true }) && (
                        <Link to='/admin/projects'>
                            <Menu.Item name='Projects' data-cy='projects-link'> Proyectos</Menu.Item>
                        </Link>
                    )}
                    {can('users:r', { anyScope: true }) && (
                        <Link to='/admin/users' data-cy='users-link'>
                            <Menu.Item name='Users'> Usuarios</Menu.Item>
                        </Link>
                    )}
                    {can('global-settings:r', { anyScope: true })
                    && (
                        <Link to='/admin/settings'>
                            <Menu.Item name='Settings' data-cy='global-settings-link'> Configuración</Menu.Item>
                        </Link>
                    )
                    }
                    {can('roles:r', { anyScope: true })
                        && (
                            <Link to='/admin/roles'>
                                <Menu.Item name='Roles' data-cy='roles-link'> Roles</Menu.Item>
                            </Link>
                        )
                    }
                </Menu.Item>
                <Menu.Item>
                    <Menu.Header>Cuenta</Menu.Header>
                    <Link to='/login'>
                        <Menu.Item name='Sign out'>Log out</Menu.Item>
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default withTracker(() => ({
}))(AdminSidebar);
