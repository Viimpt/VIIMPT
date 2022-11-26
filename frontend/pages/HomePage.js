import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import NewsList from "../components/common/NewsList";
import VideoList from "../components/common/VideoList";
import ResultList from "../components/common/ResultList";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

//95b8d71da2cc44268cde62d495c1e41b
const HomePage = () => {
  return (
    <>
      <HeaderContainer />

      <Tabs
        defaultActiveKey="profile"
        id="fill-tab-example"
        className="mb-3"
        fill
      >
        <Tab eventKey="news" title="실시간 뉴스">
          <NewsList />
        </Tab>
        <Tab eventKey="videos" title="실시간 동영상">
          <VideoList />
        </Tab>
        <Tab eventKey="results" title="투표 결과">
          <ResultList />
        </Tab>
      </Tabs>
    </>
  );
};

export default HomePage;
