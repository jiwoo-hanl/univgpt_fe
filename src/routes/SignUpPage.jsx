import { signUp } from "../api/api";
import { useState } from "react";


const SignUpPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirm_password: "",
	  });
	
	  const handleFormData = (e) => {
		const { id, value } = e.target;
		setFormData({ ...formData, [id]: value });
	  };

	  const handleSignUpSubmit = (e) => {
		e.preventDefault();
		signUp(formData);
		alert("회원가입이 완료되었습니다!");
	  };

 return (
    <div className="flex flex-col items-center w-1/2">
		<br></br>
		<br></br>
      <h3 className="font-semibold text-5xl">UnivGPT 회원가입</h3>
      <br></br>
	  <form className="form-a" onSubmit={handleSignUpSubmit}>
        <label className="label font-bold text-l" htmlFor="email">
          이메일
        </label>
        <input required type="email" id="email" className="input" onChange={handleFormData}
	        value={formData.email}/>
        <label htmlFor="password" className="label font-bold text-l">
          비밀번호 
        </label>
        <input required type="password" id="password" className="input" onChange={handleFormData}
	        value={formData.password}/>
        <label htmlFor="confirm_password" className="label font-bold text-l">
          비밀번호 확인 {" "}
        </label>
        <input
          required
          type="password"
          id="confirm_password"
          className="input"
		  onChange={handleFormData}
		  value={formData.confirm_password}
        />   
		<br></br>     
        <button type="submit" className="button mt-7">
          회원가입
        </button>
		<br></br>
		<h3 className=" text-l">이미 계정이 있으신가요? 로그인 하러가기</h3>
      </form>
    </div>
  );
};

export default SignUpPage;