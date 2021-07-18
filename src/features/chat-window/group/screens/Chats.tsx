import { Button, Col, List, Row } from "antd";
import { AppIcons, msgActButtons } from "../../AppIcons";
import styles from "../../layout.module.scss";
import { IGetSingleGroup } from "../types/groput-chat.types";

export default function Chats({ groupItem }: any) {
  return (
    <Row className={styles.chatWindow}>
      <Col span={24} className={styles.chatMessage}>
        <Row className={styles.chatMessageName}>
          John Carrey
          <Col className={styles.chatMessageTime}>
            <span>10:20pm</span>
            <span>January 1, 2020</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads adsfjadlsfj
            adsfj adslf adsf ads
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item: any) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col
        span={24}
        className={styles.chatMessage + " " + styles.chatMessageReceiver}
      >
        <Row className={styles.chatMessageName}>
          You
          <Col className={styles.chatMessageTime}>
            <span>10:20pm</span>
            <span>January 1, 2020</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            Hello what's up? jolkjl lal oasfladsfj alsdf adsf ads adsfjadlsfj
            adsfj adslf adsf ads
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col span={24} className={styles.chatMessageDate}>
        <span>10 September</span>
      </Col>

      <Col
        span={24}
        className={styles.chatMessage + " " + styles.chatMessageReceiver}
      >
        <Row className={styles.chatMessageName}>
          You
          <Col className={styles.chatMessageTime}>
            <span>3:34pm</span>
            <span>June 7, 2020</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            This is a sample message to show how does it look.
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col span={24} className={styles.chatMessage}>
        <Row className={styles.chatMessageName}>
          John Carrey
          <Col className={styles.chatMessageTime}>
            <span>4:12pm</span>
            <span>June 8, 2021</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            This is the message that I received
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col span={24} className={styles.chatMessage}>
        <Row className={styles.chatMessageName}>
          John Carrey
          <Col className={styles.chatMessageTime}>
            <span>4:12pm</span>
            <span>June 8, 2021</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            Another message that I received here will be shown here. This is a
            test message that shows if my construction of this chat is good
            enough for production.
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col
        span={24}
        className={styles.chatMessage + " " + styles.chatMessageReceiver}
      >
        <Row className={styles.chatMessageName}>
          You
          <Col className={styles.chatMessageTime}>
            <span>3:34pm</span>
            <span>June 7, 2020</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            Hey what's up? How's your life going? Can you see this text message
            that's coming from me?
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col
        span={24}
        className={styles.chatMessage + " " + styles.chatMessageReceiver}
      >
        <Row className={styles.chatMessageName}>
          You
          <Col className={styles.chatMessageTime}>
            <span>3:34pm</span>
            <span>June 7, 2020</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            Or you want me to send it again?
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col span={24} className={styles.chatMessage}>
        <Row className={styles.chatMessageName}>
          John Carrey
          <Col className={styles.chatMessageTime}>
            <span>4:12pm</span>
            <span>June 8, 2021</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>Yes I can see your text</Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>

      <Col span={24} className={styles.chatMessage}>
        <Row className={styles.chatMessageName}>
          John Carrey
          <Col className={styles.chatMessageTime}>
            <span>4:12pm</span>
            <span>June 8, 2021</span>
          </Col>
        </Row>

        <Row className={styles.chatMessageTextPanel}>
          <Col className={styles.chatMessageText}>
            Maybe the connection is troubling.
          </Col>

          <Col className={styles.chatMessageAction}>
            {AppIcons.MoreOutlined}

            <List
              className={styles.chatMessageActionItems}
              dataSource={msgActButtons}
              renderItem={(item) => (
                <List.Item>
                  <Button type="link" icon={item.ico}></Button>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
