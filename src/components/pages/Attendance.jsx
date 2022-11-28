import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import { FaUser } from 'react-icons/fa';
import QrCode from '../utils/QrCode';
import UtilModal from '../utils/UtilModal';
import Footer from '../layouts/Footer';


function Attendance() {
    const token = JSON.parse(localStorage.getItem("token"));
    const [lecture_no, setLectureNo] = useState(JSON.parse(localStorage.getItem(`${token._id}_lec_no`)) || null)
    const [students, setStudents] = useState([])
    const [open, setOpen] = useState(false)

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

    const getStudents = async () => {
        try {
            const result = await fetch(`https://attendanceapi.vercel.app/api/attendance/get/class/${token._id}/${lecture_no}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'GET'
            });
            const data = await result.json();
            // console.log(data.data)
            const attendees = data.data.filter((att) => att.present === 1)
            console.log(attendees)
            setStudents(attendees)
            // return data.data;
        } catch (err) {
            console.log(err);
        }
    }
    const initialize = async () => {
        try {
            const result = await fetch(`https://attendanceapi.vercel.app/api/attendance/initialize/${token._id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    "lec": lecture_no
                })
            });
            const data = await result.json();
            // setStudents(data.data)
            console.log(data)
            localStorage.setItem(`${token}_lec_no`, lecture_no.toString())
            handleOpen()
            return data.data;
        } catch (err) {
            return console.log(err);
        }
    }
    useEffect(() => {
        getStudents()
    }, [open])
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false)
        getStudents()
    };
    return (
        <div>
            <Header />
            <Grid container>
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        <h3>Class Attendance</h3>
                        <p>Enter lecture number and then generate code</p>
                        <input class="input" type="numeric" placeholder="Enter lecture No..." onChange={(e) => setLectureNo(e.target.value)} required />
                        <button onClick={() => { initialize() }} className='button is-large is-focus is-primary is-inverted'>Generate Code</button>

                        <UtilModal content={<QrCode url={`https://attendanceapi.vercel.app/api/attendance/mark/${token._id}/${lecture_no}`} size={256} color="green" />} open={open} handleClose={handleClose} />
                    </div>
                </Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs>
                    <div style={style} className="content has-text-centered">
                        {(lecture_no) ?
                            <h4>Lecture {lecture_no}'s attendees - {students.length}</h4>
                            :
                            <h4>No attendance record yet</h4>
                        }
                    </div>
                    <Divider />
                    {
                        (students.length > 0) ?
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                            >

                                {students.map((student) => <ListItem key={student._id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <FaUser />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={student.student_name} secondary={"ID: " + student._id} />
                                    <Divider variant="inset" component="li" />
                                </ListItem>)
                                }
                            </List>
                            : (<p className='has-text-centered'>No student attended yet</p>)
                    }
                </Grid>
            </Grid>
            <Footer />
        </div>
    )
}

export default Attendance
