import { useEffect } from "react";
import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  IconButton,
} from "@material-ui/core";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { clearStudent, getStudent } from "../../redux/features/studentSlice";
const Student = () => {
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudent(params.id))
    //we are destroying the component and dispatching the clear function to clear the state
    return () => {
      dispatch(clearStudent)
    }
  }, []);
  const student = useSelector((state) => state.student.student)
  const { } = student
  return (
    <Paper>
      <Typography variant="h2" gutterBottom>
        {student.firstName} {student.lastName}
      </Typography>

      <Typography variant="h5" gutterBottom>
        {student.phone}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {student.email}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {student.address}
      </Typography>
    </Paper>
  );
};

export default Student;
