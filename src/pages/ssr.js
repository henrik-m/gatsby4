import * as React from "react"

const SSRPage = ({ serverData }) => (
  <main>
    <h1>Tell me the time</h1>
    <p>{serverData.datetime}</p>
  </main>
)

export default SSRPage

export async function getServerData() {
  const res = await fetch(
    `http://worldtimeapi.org/api/timezone/Europe/Berlin.json`
  )

  return {
    props: await res.json(),
  }
}
