import { useLocation } from "react-router-dom"
import './FormData.css'
import Navbar from "./navbar/Navbar"

const FormData = () => {

    const location = useLocation()
    const formData = location.state.formData

    return (
        <div>
            <Navbar/>
            <div className="data-main-div">

                
                    <h1 className="data-main-heading">Thank you {formData.fname} for registering</h1>

                    <h3 className="data-heading">Your Data</h3>
                

                <div>

                    <p className="data-value"><span className="data-key">First Name:</span> {formData.fname}</p>
                    <p className="data-value"><span className="data-key">Middle Name:</span> {formData.mname}</p>
                    <p className="data-value"><span className="data-key">Last Name:</span> {formData.lname}</p>
                    <p className="data-value"><span className="data-key">Email Address:</span> {formData.email}</p>
                    <p className="data-value"><span className="data-key">Contact No.:</span> {formData.contactNo}</p>
                    <p className="data-value"><span className="data-key">Date of Birth:</span> {formData.dob}</p>
                    <p className="data-value"><span className="data-key">Gender:</span> {formData.gender}</p>
                    <p className="data-value"><span className="data-key">Country:</span> {formData.country}</p>
                    <p className="data-value"><span className="data-key">City:</span> {formData.city}</p>
                    <p className="data-value"><span className="data-key">Skills:</span> {formData.skills}</p>
                    <p className="data-value"><span className="data-key">Your Description:</span>{formData.about}</p>

                </div>
            </div>

        </div>
    )
}

export default FormData
