import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Register from "../utils/Register"
import { List } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FaUser } from 'react-icons/fa';


function RegisterSection() {
    const [courses, setCourses] = useState([])
    const Grid = styled(MuiGrid)(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& [role="separator"]': {
            margin: theme.spacing(0, 2),
        },
    }));

    const style = {
        "paddingTop": "30px"
    }

    const getCourses = async () => {
        try {
            const result = await fetch("https://attendanceapi.vercel.app/api/get/courses", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            });
            const data = await result.json();
            setCourses(data.data)
            console.log(data.data)
            return data.data;
        } catch (err) {
            return console.log(err);
        }
    }


    useEffect(() => {
        getCourses()
    }, [])

    return (
        <div>
            <Grid container>
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h3>Register a Course</h3>
                    </div>
                    <Register />
                    <div style={style} className="content has-text-centered">
                        <p>Already have a registered course? Log in <Link to='/login'>here</Link> </p>
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h4>Registered Courses - {courses.length}</h4>
                    </div>
                    <Divider />
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                    >
                        {(courses) ?
                            (courses.map((course) => <ListItem key={course.course_code}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <FaUser />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={course._id} secondary={"Lecturer: " + course.lecturer_name} />
                                <Divider variant="inset" component="li" />
                            </ListItem>)) : (<p>No course registered yet</p>)
                        }
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default RegisterSection