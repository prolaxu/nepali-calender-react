import React, { useState } from "react"
import { NepaliDatePicker } from "nepali-datepicker-reactjs"
import "nepali-datepicker-reactjs/dist/index.css"

const App = () => {
    const [date, setDate] = useState("")

    return (
        <form>
            <label htmlFor="date">Date</label>
            <NepaliDatePicker inputClassName="form-control"
                              className=""
                              value={date}
                              onChange={(value) => setDate(value)}
                              options={{ calenderLocale: "en", valueLocale: "en" }} />
        </form>
    )
}

export default App