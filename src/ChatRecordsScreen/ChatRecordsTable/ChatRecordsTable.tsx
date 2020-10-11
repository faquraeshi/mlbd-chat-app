import React, { memo } from "react";
import { withTranslation, WithTranslation } from "react-i18next";
import moment from "moment";
import { Table } from "antd";
import { DateFormats } from "constants/dateConst";
import styles from "./ChatRecordsTable.module.scss";

const { Column } = Table;

interface IProps extends WithTranslation {
  data: any;
  openDetails: (id: number) => void;
}

const ChatRecordsTable = ({ data, openDetails, t }: IProps) => {
  return (
    <Table
      className={styles.table}
      dataSource={data}
      rowClassName={(record, index) => styles.row}
      onRow={(record: any) => ({
        onClick: () => {
          openDetails(record.id);
        }
      })}
    >
      <Column
        title={t("chatRecords.dateTime")}
        key="created_at"
        dataIndex="created_at"
        sorter={true}
        render={text => moment(text).format(DateFormats.DATE_TIME)}
      />
      <Column
        title={t("chatRecords.test")}
        key="test"
        dataIndex="test"
        sorter={true}
      />
      <Column
        title={t("chatRecords.testResult")}
        key="result"
        dataIndex="result"
        sorter={true}
      />
      <Column
        title={t("chatRecords.readerNo")}
        key="serial_no"
        dataIndex="serial_no"
        sorter={true}
      />
      <Column
        title={t("chatRecords.route")}
        key="route"
        dataIndex="route"
        sorter={true}
      />
      <Column
        title={t("chatRecords.site")}
        key="site"
        dataIndex="site.name"
        sorter={true}
      />
      <Column
        title={t("chatRecords.user")}
        key="user"
        dataIndex="user.firstname"
        sorter={true}
        render={(text, row: any) =>
          row.user.firstname + " " + row.user.lastname
        }
      />
    </Table>
  );
};

export default withTranslation()(memo(ChatRecordsTable));
