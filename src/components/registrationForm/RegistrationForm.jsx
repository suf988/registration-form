import { Field, Form, Formik, ErrorMessage } from 'formik'
import { initialValues, cities } from '../../schemas/data'
import { registerValidation } from '../../schemas/registerValidation'
import './RegistrationForm.css'
import { useNavigate } from 'react-router-dom'

const RegistrationForm = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div>
                <div className='main-div'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={registerValidation}
                        onSubmit={(values, action) => {
                            console.log(values)
                            action.resetForm()
                            navigate('/formData', {state:{formData:values}})
                        }}>

                        {({ values, setFieldValue }) => (

                            <Form>

                                <div className='form-div'>

                                    <h1 className='heading'>Registration Form</h1>

                                    <div className='text-div'>

                                        <div>
                                            <label htmlFor="fname" className='input-text-label'>First Name
                                                <span className='asteric'> *</span></label>

                                            <Field type="text" id="fname" name="fname" placeholder="Benjamin" autoComplete="off" className="text-field" />
                                            <div className="error"><ErrorMessage name='fname' /></div>
                                        </div>

                                        <div>
                                            <label htmlFor="mname" id="mname" className='input-text-label'>Middle Name</label>

                                            <Field type="text" name="mname" placeholder="Andrew" autoComplete="off" className="text-field" />
                                        </div>

                                        <div>
                                            <label htmlFor="lname" id="lname" className='input-text-label'>Last Name
                                                <span className='asteric'> *</span></label>

                                            <Field type="text" name="lname" placeholder="Stokes" autoComplete="off" className="text-field" />
                                            <div className="error"><ErrorMessage name='lname' /></div>
                                        </div>

                                        <div>
                                            <label htmlFor="contactNo" className='input-text-label'>Contact Number
                                                <span className='asteric'> *</span></label>

                                            <Field type="tel" id="contactNo" name="contactNo" placeholder="02112345678" autoComplete="off" className="text-field" />
                                            <div className="error"><ErrorMessage name='contactNo' /></div>
                                        </div>

                                    </div>

                                    <div>
                                        <label htmlFor="email" className='input-text-label'>Email Address
                                            <span className='asteric'> *</span></label>

                                        <Field type="text" id="email" name="email" placeholder="alex.hales@abc.com" autoComplete="off" className="text-field" />
                                        <div className="error"><ErrorMessage name='email' /></div>
                                    </div>

                                    <div className='pass'>
                                        <label htmlFor="password" className='input-text-label'>Password
                                            <span className='asteric'> *</span></label>

                                        <Field type="password" id="password" name="password" placeholder="********" className="text-field" />
                                        <div className="error"><ErrorMessage name='password' /></div>
                                    </div>

                                    <div className='pass'>
                                        <label htmlFor="confirmPassword" className='input-text-label'>Confirm Password
                                            <span className='asteric'> *</span></label>

                                        <Field type="password" id="confirmPassword" name="confirmPassword" placeholder="********" className="text-field" />
                                        <div className="error"><ErrorMessage name='confirmPassword' /></div>
                                    </div>

                                    <div className='text-div'>
                                        <div className='pass'>
                                            <label htmlFor="country" className='drop-down-label'>Select Country
                                                <span className='asteric'> *</span></label>

                                            <Field as="select" name="country" id="country" className="drop-heading">
                                                <option className='drop' value="">Select</option>
                                                <option className='drop' value="pakistan">Pakistan</option>
                                                <option className='drop' value="india">India</option>
                                                <option className='drop' value="usa">USA</option>
                                                <option className='drop' value="uk">UK</option>
                                                <option className='drop' value="italy">Italy</option>
                                                <option className='drop' value="australia">Australia</option>
                                            </Field>
                                            <div className="error"><ErrorMessage name='country' /></div>
                                        </div>

                                        <div className='pass'>
                                            <label htmlFor="city" className='drop-down-label'>Select City
                                                <span className='asteric'> *</span></label>

                                            <Field as="select" name="city" id="city" className="drop-heading">
                                                <option value="">Select</option>
                                                {cities[values.country] && cities[values.country].map((city) => (
                                                    <option value={city} className='drop' key={city}>{city}</option>
                                                ))}
                                            </Field>
                                            <div className="error"><ErrorMessage name='city' /></div>
                                        </div>

                                    </div>

                                    <div className='text-div'>


                                        <div className='date-div'>
                                            <label htmlFor="dob" className='date-label'>Select Date of Birth
                                                <span className='asteric'> *</span></label>
                                            <Field
                                                type="date" name="dob" id="dob" className="datee" />
                                            <div className="error"><ErrorMessage name='dob' /></div>
                                        </div>

                                        <div className='pass'>
                                            <label htmlFor="gender" className='input-text-label'>Select Gender
                                                <span className='asteric'> *</span></label>

                                            <div className='radio-div'>
                                                <div>
                                                    <Field type="radio" name="gender" value="male" className="radio-buttons" id="male" />
                                                    <label htmlFor="male" className='radio-label'>Male</label>
                                                </div>

                                                <div>
                                                    <Field type="radio" name="gender" value="female" className="radio-buttons" id="female" />
                                                    <label htmlFor="female" className='radio-label'>Female</label>
                                                </div>

                                                <div>
                                                    <Field type="radio" name="gender" value="others" className="radio-buttons" id="others" />
                                                    <label htmlFor="others" className='radio-label'>Others</label>
                                                </div>
                                            </div>
                                            <div className="error"><ErrorMessage name='gender' /></div>
                                        </div>
                                    </div>
                                    <div className='pass'>
                                        <label htmlFor="skills" className='input-text-label'>Select Skills
                                            <span className='asteric'> *</span></label>

                                        <div className="check-box-div">

                                            <Field type="checkbox" name="skills" value="html-css" id="html-css"
                                                className="check-box" />
                                            <label htmlFor="html-css"
                                                className="check-box-label">HTML-CSS</label>

                                            <Field type="checkbox" name="skills" value="javaScript" id="javaScript"
                                                className="check-box" />
                                            <label htmlFor="javaScript"
                                                className="check-box-label">JavaScript</label>

                                            <Field type="checkbox" name="skills" value="reactJS" id="reactJS"
                                                className="check-box" />
                                            <label htmlFor="reactJS"
                                                className="check-box-label">React JS</label>

                                            <Field type="checkbox" name="skills" value="mongoDB" id="mongoDB"
                                                className="check-box" />
                                            <label htmlFor="mongoDB"
                                                className="check-box-label">Mongo DB</label>

                                            <Field type="checkbox" name="skills" value="nodeJS" id="nodeJS"
                                                className="check-box" />
                                            <label htmlFor="nodeJS"
                                                className="check-box-label">Node JS</label>

                                            <Field type="checkbox" name="skills" value="redux" id="redux"
                                                className="check-box" />
                                            <label htmlFor="redux"
                                                className="check-box-label">Redux</label>

                                            <Field type="checkbox" name="skills" value="tailwindCSS" id="tailwindCSS"
                                                className="check-box" />
                                            <label htmlFor="tailwindCSS"
                                                className="check-box-label">Tailwind CSS</label>

                                            <Field type="checkbox" name="skills" value="bootstrap" id="bootstrap"
                                                className="check-box" />
                                            <label htmlFor="bootstrap"
                                                className="check-box-label">BootStrap</label>
                                        </div>
                                        <div className="error"><ErrorMessage name='skills' /></div>
                                    </div>

                                    <div>
                                        <label htmlFor="picture" className='input-text-label'>Insert Profile Picture
                                            <span className='asteric'> *</span></label>

                                        <input type="file" id="picture" name="picture" accept='image/*'
                                            onClick={(e) => setFieldValue("picture", e.target.files[0])} />
                                        {values.picture && <img src={URL.createObjectURL(values.picture)} alt='Preview' className='picture' />}
                                        <div className="error"><ErrorMessage name='picture' /></div>
                                    </div>

                                    <div className='pass'>
                                        <label htmlFor="about" className='text-area-label'>About Yourself
                                            <span className='asteric'> *</span></label>

                                        <Field as="textarea" id="about" name="about" placeholder="Tell us about yourself...." rows="4" className="text-area" />
                                        <div className="error"><ErrorMessage name='about' /></div>
                                    </div>

                                    <div className='button-div'>
                                        <button type="submit"
                                            className="register-button">
                                            Register
                                        </button>
                                    </div>

                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

        </div>
    )
}

export default RegistrationForm
