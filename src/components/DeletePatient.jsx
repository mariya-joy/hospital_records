import React from 'react'
import HospitalNavbar from './HospitalNavbar'

const DeletePatient = () => {
  return (
    <div>
      <HospitalNavbar/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Patient Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-danger">Delete Patient</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeletePatient