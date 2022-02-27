import React from "react";
import { BreadCrumbs, Card, Divider } from "@letswebdevelop/lwdds";
import "./App.css";

function App() {
  const cardContent = [
    { title: "LetsWebDevelop", body: "Well Hello World - Speaking to you from LWDDS Card" },
    { title: "LWDDS", body: "Pronounced as Lewds" },
  ];
  return (
    <div className="App">
      <div>
        <p>HELLO</p>
      </div>

      <BreadCrumbs
        currentPage="current page"
        currentPageColor="green"
        dividerColor="hsla(0, 56%, 3%, 0.35)"
        homePreviousPageColor="grey"
        hoverColor="blue"
        link={["Previous Page", "Previous Page 2"]}
      />
      <Divider size="xl" dividerColor="var(--color-primary)" thick={false} />
      <div style={{ marginTop: 25, display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
        {cardContent.map((content) => {
          return (
            <div key={content.title}>
              <Card
                label={content.title}
                size="medium"
                textAlignBody="left"
                body={content.body}
                border
                borderColor="wheat"
                borderRadius="5%"
              />
            </div>
          );
        })}
      </div>
      <Divider style={{ marginTop: 25 }} dividerColor="#a808f3" fade={true} size="l" thick />

      <div style={{ display: "flex", justifyContent: "center", marginTop: 25 }}>
        <Card
          backgroundColor="#3d3939"
          backgroundTitleColor="#3d3939"
          body="Dr. Dre"
          border
          borderColor="gold"
          borderRadius="1rem"
          color="#2aa200"
          image="https://oor.nl/media/2021/01/dr-dre-press-1024x683.jpg"
          label="The Chronic"
          size="large"
        />
      </div>
    </div>
  );
}

export default App;
