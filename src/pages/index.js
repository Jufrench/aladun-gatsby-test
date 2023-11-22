import * as React from "react"
import "./styles.css"

const handleGetCustomers = async () => {
  let data = {};
  // console.log('%chandleGetCustomers!', 'color:tomato')
  try {
    console.log('%chandleGetCustomers!', 'color:limegreen')
    // const environment = process.env.NODE_ENV === "development" ? "development" : "production"
    const response = await fetch('http://localhost:3001/customers').then(res => res.json())
      data = response
      console.log('%cdata:', 'color:tomato', data)
  } catch(error) {
    console.log(error)
  }
}

const handleGetACustomer = async () => {
  const idValue = document.getElementById("input-id").value;
  console.log("idValue:", idValue)

  try {
    console.log('%chandleGetACustomer!', 'color:goldenrod')
    const response = await fetch('http://localhost:3001/customer').then(res => res.json())
    console.log('%cdata:', 'text-decoration:underline', response);
  } catch(error) {
    console.log(error)
  }
// ==================
  // const fetchRes = await fetch('http://localhost:3001/customer', {
  //   method: 'POST',
  //   credentials: 'same-origin',
  //   headers: {
  //       'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(idValue),
  // });

  // console.log('fetchRes:', fetchRes);
}

const IndexPage = () => {
  return (
    <main style={{textAlign: "center", marginTop: "100px"}}>
      <button onClick={handleGetCustomers}>Get Customers</button>
      <hr />
      <div>
        <input id="input-id" />
        <button onClick={handleGetACustomer}>Get A Customer</button>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
