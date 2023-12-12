import * as Yup from 'yup'

export const registerValidation = Yup.object({
    fname: Yup.string().min(2, "Write minimum 2 characters").max(15, "Maximum 15 characters").required("Required field"),
    lname: Yup.string().min(2, "Write minimum 2 characters").max(15, "Maximum 15 characters").required("Required field"),
    email: Yup.string().email("Enter valid email address").required("Required field"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Weak Password").required("Required field"),
    confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Password does not match").required("Required field"),
    contactNo: Yup.string().matches(/^[0-9]{11}$/, "Invalid phone no.").required("Required field"),
    dob: Yup.string().required("Required field"),
    gender: Yup.string().required("Required field"),
    country: Yup.string().required("Required field"),
    city: Yup.string().required("Required field"),
    skills: Yup.array().min(3, "Select minimum 3 skills"),
    picture: Yup.mixed().required("Required field").test("picture format", "Invalid picture format", (value) => {
        const allowedFormat = ["image/jpeg", "image/jpg", "image/png"]
        return allowedFormat.includes(value.type)
    }).test("file size", "Too large file", (value) => {
        const allowedSize = 1024 * 1024
        return value.size < allowedSize
    }),
    about: Yup.string().min(50, "Write minimum 50 characters").max(150, "Maximum 150 characters").required("Required field")
})