import { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";

interface IParams {
  elements: {
    label: string;
    content: JSX.Element;
  }[];
}


export default function Tabs({ elements }: IParams): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0);

  const toggle = (tab: number) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav tabs>
        {elements.map((element, index) => (
          <NavItem>
            <NavLink
              role="button" tabindex="0"
              className={activeTab === index ? "active" : ""}
              onClick={() => toggle(index)}
            >
              <span>{element.label}</span>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        {elements.map((element, index) => (
          <TabPane tabId={index}>{element.content}</TabPane>
        ))}
      </TabContent>
    </>
  );
}
