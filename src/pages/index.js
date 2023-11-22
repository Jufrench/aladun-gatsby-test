import * as React from "react"

const handleGetCustomers = async () => {
  let data = {}
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

const IndexPage = () => {
  return (
    <main style={{textAlign: "center", marginTop: "100px"}}>
      <button onClick={handleGetCustomers}>Get Customers</button>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
