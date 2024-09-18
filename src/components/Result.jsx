import { assets } from "../assets/assets";

const Result = ({ recentPrompt, loading, resultData }) => {
  return (
    <div className="result">
      <div className="result-title">
        <img src={assets.user} alt="" />
        <p>{recentPrompt}</p>
      </div>
      <div className="result-data">
        <img src={assets.gemini_icon} alt="" />
        {loading ? (
          <div className="loader">
            <hr />
            <hr />
            <hr />
          </div>
        ) : (
          <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
        )}
      </div>
    </div>
  );
};

export default Result;
