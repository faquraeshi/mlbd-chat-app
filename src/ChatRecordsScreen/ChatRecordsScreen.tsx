import React, { memo, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { formatRoute } from "react-router-named-routes";
import { Select, Row, Col, DatePicker } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import moment from "moment";
import styles from "./ChatRecordsScreen.module.scss";
import * as chatRecordsApi from "./chatRecordsApi";
import { PRIVATE_ROUTES } from "routers/Router.config";
import { DetailsParams } from "types/routerType";
import { TestRecordType } from "./chatRecordType";
import ChatRecordDetails from "./ChatRecordDetails/ChatRecordDetails";
import ChatRecordsTable from "./ChatRecordsTable/ChatRecordsTable";

const { Option } = Select;
const { RangePicker } = DatePicker;

const currentMonthStart = moment().startOf("month");
const currentMonthEnd = moment().endOf("month");

const data = [
  {
    id: 1,
    created_at: "2019-11-03T15:28:40+00:00",
    test: "2BC",
    result: "Negative",
    serial_no: "SQUFL545",
    route: "E11",
    site: {
      id: 1,
      name: "Arla Brabrand",
      contact_name: "John Doe",
      address: "Doe street 12",
      postcode: "8200",
      country: "Denmark",
    },
    user: {
      id: 1,
      firstname: "John",
      lastname: "Doe",
      email: "john@doe.com",
      phone: 12345678,
      site: {
        id: 1,
        name: "Arla Brabrand",
        contact_name: "John Doe",
        address: "Doe street 12",
        postcode: "8200",
        country: "Denmark",
      },
    },
  },
  {
    id: 2,
    created_at: "2019-11-03T15:28:40+00:00",
    test: "3BTC",
    result: "Positive",
    serial_no: "SQUFL545",
    route: "E12",
    site: {
      id: 2,
      name: "Arla København",
      contact_name: "Jane Doe",
      address: "Jane street 12",
      postcode: "2500",
      country: "Denmark",
    },
    user: {
      id: 2,
      firstname: "Jane",
      lastname: "Doe",
      email: "jane@doe.com",
      phone: 12345678,
      site: {
        id: 2,
        name: "Arla København",
        contact_name: "Jane Doe",
        address: "Jane street 12",
        postcode: "2500",
        country: "Denmark",
      },
    },
  },
];

interface IProps extends RouteComponentProps<DetailsParams>, WithTranslation {}

const chatRecordsScreen = ({ history, match, t }: IProps) => {
  const [chatRecords, setchatRecords] = useState<TestRecordType[]>();
  const [showModal, setShowModal] = useState(false);

  const detailsPath = PRIVATE_ROUTES.CHAT_RECORD_DETAILS_SCREEN.path;
  const filteredRecord =
    match.params.id && chatRecords
      ? chatRecords.find(record => match.params.id === record.id.toString())
      : null;

  /**
   * Get all chat records and update state
   */
  useEffect(() => {
    setchatRecords(data);
    chatRecordsApi.getAllChatRecords().then(response => {
      console.log(response);
    });
  }, []);

  /**
   * Handle modal visibility in relation to URL, which is itself
   * handled by the redirectTo function.
   */
  useEffect(() => {
    const modalVisibility = match.path === detailsPath;
    setShowModal(modalVisibility);
  }, [match.path, detailsPath]);

  /**
   * Handles URL redirects, which triggers modal visibility.
   * @param id
   */
  const redirectTo = (id?: number) => {
    if (id) {
      const newRoute = formatRoute(detailsPath, { id: id });
      history.push(newRoute);
    } else {
      history.push(PRIVATE_ROUTES.CHAT_RECORDS_SCREEN.path);
    }
  };

  return (
    <>
      <Row gutter={15}>
        <Col span={4}>
          <Select
            placeholder={t("chatRecords.selectCustomer")}
            className={styles.select}
          >
            <Option value="arla">Arla</Option>
          </Select>
        </Col>
        <Col span={4}>
          <Select
            placeholder={t("chatRecords.selectSite")}
            className={styles.select}
          >
            <Option value="brabrand">Arla Brabrand</Option>
            <Option value="odense">Arla Odense</Option>
          </Select>
        </Col>
        <Col span={6}>
          <RangePicker
            defaultValue={[moment(currentMonthStart), moment(currentMonthEnd)]}
            separator="-"
          />
        </Col>
      </Row>
      <ChatRecordsTable data={chatRecords} openDetails={redirectTo} />
      {filteredRecord && (
        <ChatRecordDetails
          show={showModal}
          data={filteredRecord}
          close={redirectTo}
        />
      )}
    </>
  );
};

export default withTranslation()(memo(chatRecordsScreen));
