import React, { useState } from 'react'
// import { google } from 'googleapis';

// function writeToSheet(input1, input2) {
//   const auth = new google.auth.GoogleAuth({
//     keyFile: REACT_APP_PRIVATE_KEY, // Replace with the path to your service account key file
//     scopes: ['https://www.googleapis.com/auth/spreadsheets'],
//   });

//   const sheets = google.sheets({ version: 'v4', auth });

//   sheets.spreadsheets.values.append({
//     spreadsheetId: process.env.REACT_APP_SHEET_ID, // Replace with your Google Sheet ID
//     range: 'api', // Replace with the name of the sheet you want to write to
//     valueInputOption: 'USER_ENTERED',
//     resource: {
//       values: [[input1, input2]],
//     },
//   });
// }

function Form() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
 
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(`Input 1: ${input1}, Input 2: ${input2}`);
    // writeToSheet(input1, input2);
  }

  return (
    <div>
      <h1>FORMFORM</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Input 1:
          <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} />
        </label>
        <label>
          Input 2:
          <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form