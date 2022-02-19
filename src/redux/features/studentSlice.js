import { createSlice } from "@reduxjs/toolkit";

export const studentSlice = createSlice({
    name: "student",
    initialState: {
        students: [
            {
                id: 1,
                firstName: "Himadri",
                lastName: "Bhattathiri",
                email: "Chandramani_Talwar73@hotmail.com",
                phone: "+91620-320-4125",
                address: "474 Banerjee Fords",
            },
            {
                id: 2,
                firstName: "Subhasini",
                lastName: "Bhattacharya",
                email: "Chetan17@yahoo.co.in",
                phone: "+91953-928-4930",
                address: "52520 Bhisham Brooks",
            },
            {
                id: 3,
                firstName: "Daevika",
                lastName: "Ganaka",
                email: "Bharat89@gmail.com",
                phone: "+91-917-1416065",
                address: "78079 Patel Park",
            },
            {
                id: 4,
                firstName: "Tanya",
                lastName: "Trivedi",
                email: "Birjesh_Sinha3@hotmail.com",
                phone: "+91-644-6939697",
                address: "57761 Shreyashi Junctions",
            },
        ],
        //adding defualt scheema or strucutre for single data fetch
        student: {
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phone: "",
        },
    },
    reducers: {
        //here we add reducer function which define how we want to manipulate data or initial state
        getStudent: (state, action) => {
            //we are geetinf single student state then finding in all student state with id which is equal to action payload wich is passes from student card with use param
            state.student = state.students.find((el) => el.id == action.payload);
        },
        //now when we set data to student state i wont delete by itslef
        //so to delete it we have set the state to null and we can do it by component destroy in ussefext
        clearStudent: (state) => {
            state.student = {
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                phone: "",
            };
        },
        addStudent: (state, action) => {
            state.students = [action.payload, ...state.students];
            //we are getting new data object from action and then we are 
            //adding it in student array [ new data comming ,...old data] = latest array
        },
        updateStudent: (state, action) => {
            state.students = state.students.map((el) =>
                el.id == action.payload.id ? action.payload : el
            );
            //we have maped the data to find which to update
            //we are taking id and checking it then we it get added to
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter((el) => el.id != action.payload);
            //here we are taking id in payload after that we are checking it wether it matcher or nor
            //after that we are getting all the data exxpect the mathced id el.id! = 
            //hame wo rakhna he jo mach nhi ho rha
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    getStudent,
    clearStudent,
    addStudent,
    updateStudent,
    deleteStudent,
} = studentSlice.actions;

export default studentSlice.reducer;
 