import RankingTrendGraph from "../component/Ranking.jsx";
import UserBLock from "../component/UserBLock.jsx";
import AnswerDestribution from "../component/answerDestribution.jsx";
import ProgressOverTimeGraph from "../component/ProgressOverTimeGraph.jsx";
const Analysis = () => {
  return (
    <div className="flex flex-col space-y-2 ">
      <UserBLock />
      <div id="row2" className="flex justify-between space-x-4">
        <AnswerDestribution/> 
        <RankingTrendGraph />
      </div>
      <div id="row2" className="flex justify-between space-x-4 ">
        <ProgressOverTimeGraph/>
      </div>
    </div>
  );
};

export default Analysis;
