import { Input, Layout } from "antd";
import "./App.css";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { useState } from "react";
import { LogLine } from "./LogLine";

function App() {
  const [logData, setLogData] = useState([]);
  const [filter, setFilter] = useState("");
  const [interval, setIntervalId] = useState();

  const onChangeFile = (e) => {
    if (interval) {
      clearInterval(interval);
    }
    const acceptedFiles = e.target.files;

    const loadData = () => {
      const file = acceptedFiles[0];
      console.log(file);

      const reader = new FileReader();
      console.log(`loadingData`);

      reader.onload = (e) => {
        try {
          console.log(`onload`);
          const logText = e.target.result;
          // const logs = logText.split("\n").map((line) => JSON.parse(line));
          // setLogData(logs);
          setLogData(logText.split("\n").reverse());
        } catch (error) {
          console.error("Error parsing log file:", error);
        }
      };

      reader.readAsText(file);
    };
    loadData();
    // setIntervalId(setInterval(loadData, 3000));
  };

  const filteredLogs = logData.filter((log) =>
    JSON.stringify(log).includes(filter)
  );

  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div className="demo-logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      </Header>

      <Content style={{ padding: "20px 50px" }}>
        <label>Select your file</label>

        <Input type="file" onChange={onChangeFile} />
        <Input
          type="text"
          style={{ marginTop: 10, marginBottom: 10 }}
          placeholder="Filter logs..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />

        <div>
          {filteredLogs.map((log, index) => (
            <LogLine key={index} log={log} />
          ))}
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>@devmicaelomota ©2023</Footer>
    </Layout>
  );
}

export default App;
