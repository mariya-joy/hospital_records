import React from 'react'

const ViewPatients = () => {
  return (
    <div>
      <table class="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">Patient_Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Illness</th>
            <th scope="col">Doctor_Assigned</th>
            <th scope="col">Room_No</th>
            <th scope="col">Admission_Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ravi Sharma</td>
            <td>45</td>
            <td>Male</td>
            <td>Diabetes</td>
            <td>Dr. Mehta</td>
            <td>101</td>
            <td>2025-07-10</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Anita Nair</td>
            <td>32</td>
            <td>Female</td>
            <td>Flu</td>
            <td>Dr. Kapoor</td>
            <td>102</td>
            <td>2025-07-11</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mohammed Rafi</td>
            <td>58</td>
            <td>Male</td>
            <td>Hypertension</td>
            <td>Dr. Iyer</td>
            <td>103</td>
            <td>2025-07-08</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Lakshmi Menon</td>
            <td>26</td>
            <td>Female</td>
            <td>Fracture</td>
            <td>Dr. Prasad</td>
            <td>104</td>
            <td>2025-07-12</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Sunil Joshi</td>
            <td>39</td>
            <td>Male</td>
            <td>Covid-19</td>
            <td>Dr. Nair</td>
            <td>105</td>
            <td>2025-07-09</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Priya Ramesh</td>
            <td>30</td>
            <td>Female</td>
            <td>Migraine</td>
            <td>Dr. Mehta</td>
            <td>106</td>
            <td>2025-07-11</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Thomas Jacob</td>
            <td>51</td>
            <td>Male</td>
            <td>Asthma</td>
            <td>Dr. Kapoor</td>
            <td>107</td>
            <td>2025-07-10</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Divya Menon</td>
            <td>42</td>
            <td>Female</td>
            <td>Thyroid</td>
            <td>Dr. Iyer</td>
            <td>108</td>
            <td>2025-07-07</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Ajay Varma</td>
            <td>60</td>
            <td>Male</td>
            <td>Heart Disease</td>
            <td>Dr. Prasad</td>
            <td>109</td>
            <td>2025-07-06</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Sneha Das</td>
            <td>29</td>
            <td>Female</td>
            <td>Allergy</td>
            <td>Dr. Nair</td>
            <td>110</td>
            <td>2025-07-12</td>
          </tr>
        </tbody>

      </table>
    </div>
  )
}

export default ViewPatients