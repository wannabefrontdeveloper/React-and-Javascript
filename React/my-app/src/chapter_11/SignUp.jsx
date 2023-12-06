import React,{useState} from "react"

function SignUp(props){
  const [name,setName] = useState("")
  const [gender,setGender] = useState("남자")
  const [country, setCountry] = useState("대한민국")

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleChangeGender = (event) => {
    setGender(event.target.value)
  }

  const handleChangeCountry = (event) => {
    setCountry(event.target.value)
  }

  const handleSubmit = (event) => {
    alert(`이름: ${name}, 성별: ${gender}, 국적:${country}`)
    event.preventDefault()
  }

  return (
    <form onSubmit = {handleSubmit}>
      <label>이름:
        <input type = "text" value = {name} onChange = {handleChangeName} />
      </label>
      <br />

      <label>
        성별:
        <select value = {gender} onChange = {handleChangeGender} >
          <option value = "남자">남자</option>
          <option value = "여자">여자</option>
        </select>
      </label>
      <br />
      <label>
        국적:
        <select value = {country} onChange = {handleChangeCountry} >
          <option value = "대한민국">대한민국</option>
          <option value = "일본">일본</option>
          <option value = "중국">중국</option>
        </select>
      </label>
      <button type = "submit">제출</button>
    </form>
  )
}

export default SignUp