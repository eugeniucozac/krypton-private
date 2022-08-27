import { useState } from "react";
import Alert from "./Alert";
import Chip from "./Chip";
import Avatar from "./Avatar";
import ProgressBar from "./ProgressBar";
import Spinner from "./Spinner";
import Icon from "./Icon";
import AdvancedAlert from "./AdvancedAlert";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import Rating from "./Rating";
import {
  Accordion,
  AccordionItem,
  AccordionDescription,
  AccordionTitle,
} from "./Accordion";
import Tooltip from "./Tooltip";
import { List, ListItem } from "./List";

function App() {
  const [alertOpen, isAlertOpen] = useState(true);
  const [advancedAlertOpen, isAdvancedAlertOpen] = useState(true);
  const [data, setData] = useState<any>([]);
  const [rating, setRating] = useState(4);
  const [panel, setPanel] = useState<number | null>(null);
  const [panels, setPanels] = useState<any>([5, 6, null]);

  const items = [
    { title: "Item 1", avatar: { name: "eugene" } },
    { title: "Item 2", avatar: { name: "Dorina Costin" } },
    {
      title: "Item 3",
      avatar: {
        name: "John Johnson",
        imgSrc:
          "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5",
      },
    },
  ];

  const itemsOld = [
    { title: "Item 1" },
    { title: "Item 2" },
    {
      title: "Item 3",
    },
  ];
  /*
  const StyledList = styled(List)`  font-size: 10px;  .ko-list-item {     padding: 10px;  }`
*/

  const onClickButton = () => {
    console.log("onClickButton");
  };

  const handleChangeAccordion = (val: any) => {
    setPanel(val);
  };

  return (
    <div className="App">
      <div className="App-header">
        <div style={{ width: "50%", marginTop: "20px" }}>
          {alertOpen && (
            <Alert
              color="warning"
              heading="Oh, vivamus vulputate neque"
              onClose={() => isAlertOpen(false)}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Alert>
          )}
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Avatar
            imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
            name="Cozac Eugeniu"
          />
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <ProgressBar value={20} color="info" showValue={true} />
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Chip variant="rounded" color="default">
            Textdata
          </Chip>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Spinner />
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          {advancedAlertOpen && (
            <AdvancedAlert
              color="success"
              onClose={() => isAdvancedAlertOpen(false)}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </AdvancedAlert>
          )}
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Button
            color="default"
            model="outline"
            onClick={onClickButton}
            endIcon={<Icon name="send" />}
          >
            Button
          </Button>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <ButtonGroup>
            <Button onClick={onClickButton}>Button</Button>
            <Button model="outline" onClick={onClickButton}>
              Button
            </Button>
            <Button model="outline" onClick={onClickButton}>
              Button
            </Button>
          </ButtonGroup>
        </div>
        <div style={{ width: "50%", marginTop: "20px" }}>
          <Rating value={rating} onChangeValue={setRating} variant="disabled" />
        </div>
        <div
          style={{
            width: "35%",
            margin: "20px 0",
            display: "flex",
            justifyContent: "right",
          }}
        >
          <Tooltip title="Tooltip" placement="top">
            <Button onClick={onClickButton}>Button</Button>
          </Tooltip>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <Accordion
            variant="toggle"
            expandedPanel={panel}
            onChange={handleChangeAccordion}
          >
            <AccordionItem>
              <AccordionTitle targetId={1}>Accordion Header 1</AccordionTitle>
              <AccordionDescription panelId={1}>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within th
              </AccordionDescription>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle targetId={2}>Accordion Header 2</AccordionTitle>
              <AccordionDescription panelId={2}>
                <strong>
                  You can modify any of this with custom CSS or overriding our
                  default variables. It's also worth noting that
                </strong>
                just about any HTML can go within th
              </AccordionDescription>
            </AccordionItem>
            <AccordionItem>
              <AccordionTitle targetId={3}>Accordion Header 3</AccordionTitle>
              <AccordionDescription panelId={3}>
                You can modify any of this with custom CSS or overriding our
                default variables. It's also worth noting that just about any
                HTML can go within th
              </AccordionDescription>
            </AccordionItem>
          </Accordion>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </div>
        <div style={{ width: "35%", margin: "20px 0 20px 30px" }}>
          <List>
            <ListItem>
              <Avatar imgSrc="" name="Cozac Eugeniu" />
              Item 1
            </ListItem>
            <ListItem>
              <Avatar
                imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                name="Cozac Eugeniu"
              />
              Item 2
            </ListItem>
            <ListItem>
              <Avatar
                imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                name="Cozac Eugeniu"
              />
              Item 3
            </ListItem>
            <ListItem>
              <Avatar
                imgSrc="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5"
                name="Cozac Eugeniu"
              />
              Item 4
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;
