import React from 'react';
import { connect } from 'react-redux';
import { setCurrentProject } from '../actions/user';
import Select from '@material-ui/core/Select';

export class ProfilePage extends React.Component { 

    onChange = (e) => {
        this.props.setCurrentProject(e.target.value);
    }

    render() {    
        return (
            <div>
                <h1>ProfilePage</h1>

                
                    <Select
                        native
                        onChange={this.onChange}
                        value={this.props.user.currentProject}
                    >
                    <option value="">Selectionner</option>
                    { this.props.projects.map( (project) => (
                        <option 
                            key = {project.id} 
                            value={project.id}
                        >
                        {project.name}
                        </option>
                    ))}
                        
                    </Select>
            </div>
        );
    }
    
};

const mapStateToProps = (state) => ({
    user: state.user,
    projects: state.projects
});

const mapDispatchToProps = (dispatch) => ({
    setCurrentProject: (id) => dispatch(setCurrentProject(id))
})
export default connect(mapStateToProps,mapDispatchToProps)(ProfilePage);