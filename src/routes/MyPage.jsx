import users from "../data/users";
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyPage = (user) => {
  return (
    <div>
      <div className="flex flex-row bg-white rounded-3xl m-5 p-5 text-black">
				<HiUserCircle size="150" />
				<div className="flex flex-col">	
					<div>
						<div>{user.name} 님 환영합니다!</div>
						<Link to="" className="button">나의 프롬프트 {/*myprompt.count*/}개</Link>
						<Link to="" className="button">스크랩한 프롬프트 {/*prompt.count*/}개</Link>
					</div>
				</div>
      </div>
    </div>
  );
};

export default MyPage;
