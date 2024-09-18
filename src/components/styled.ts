import { styled } from "styled-components";

export const SidebarWrapper = styled.div`
  min-height: 100vh;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #f0f4f9;
  padding: 25px 15px;

  .top {
    margin-top: 15px;
  }
  img {
    width: 20px;
  }
  .menu {
    display: block;
    margin-left: 10px;
    cursor: pointer;
  }
  .new-chat {
    margin-top: 50px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    background-color: #e6eaf1;
    border-radius: 50px;
    font-size: 14px;
    color: grey;
    cursor: pointer;
  }
  .recent {
    display: flex;
    flex-direction: column;
    animation: fadeIn 2s;
  }
  .recent-title {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .recent-entry {
    display: flex;
    align-items: start;
    gap: 10px;
    padding: 10px;
    padding-right: 40px;
    border-radius: 50px;
    color: #282828;
    cursor: pointer;
  }
  .recent-entry:hover {
    background-color: #e2e6eb;
  }
  .bottom {
    display: flex;
    flex-direction: column;
  }
  .bottom-item {
    padding-right: 10px;
    cursor: pointer;
  }

  @media (max-width: 600px) {
    .sidebar {
      display: none;
    }
  }
`;

export const ChatWrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  padding-bottom: 15vh;
  position: relative;

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    padding: 20px;
    color: #585858;
  }
  img {
    width: 40px;
    border-radius: 50px;
  }
  .main-container {
    max-width: 900px;
    margin: auto;
  }
  .greet {
    margin: 50px 0px;
    font-size: 36px;
    color: #c4c7c5;
    font-weight: 500px;
    span {
      background: -webkit-linear-gradient(16deg, #4b90ff, #ff5546);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 15px;
  }
  .card {
    height: 200px;
    padding: 15px;
    background-color: #f0f4f9;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
  }
  .card img {
    width: 35px;
    padding: 5px;
    position: absolute;
    border-radius: 20px;
    bottom: 10px;
    right: 10px;
    background: white;
  }
  .card p {
    color: #585858;
    font-size: 17px;
  }
  .card:hover {
    background-color: #dfe4ea;
  }
  .main-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 900px;
    padding: 0px 20px;
    margin: auto;
  }
  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: #f0f4f9;
    padding: 10px 20px;
    border-radius: 50px;
  }
  .search-box img {
    width: 24px;
    cursor: pointer;
  }
  .search-box input {
    flex: 1;
    background: transparent;
    border: 0;
    outline: 0;
    padding: 8px;
    font-size: 18px;
  }
  .search-box div {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .bottom-info {
    font-size: 13px;
    margin: 15px auto;
    text-align: center;
    font-weight: 300;
  }
  .result {
    padding: 0px 5%;
    max-height: 70vh;
    overflow-y: scroll;
  }
  .result::-webkit-scrollbar {
    display: none;
  }
  .result-title {
    margin: 40px 0px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .result img {
    width: 40px;
    border-radius: 50px;
  }
  .result-data {
    display: flex;
    align-items: start;
    gap: 20px;
  }
  .loader {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .loader hr {
    border-radius: 4px;
    border: none;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #9ed7ff, #ffffff, #9ed7ff);
    background-size: 800px 50px;
    height: 20px;
    animation: loader 4s infinite linear;
  }

  @keyframes loader {
    0% {
      background-position: -800px 0px;
    }
    100% {
      background-position: 800px 0px;
    }
  }

  .result-data p {
    font-size: 17px;
    font-weight: 300px;
    line-height: 1.8;
  }

  @media (max-width: 600px) {
    .main-bottom {
      flex: none;
      width: 150px;
    }
    .main-bottom img {
      width: 20px;
    }
    .search-box {
      padding: 5px 10px;
    }
  }
`;
