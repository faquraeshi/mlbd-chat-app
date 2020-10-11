import React, { memo } from "react";
import { Button, Modal, Row, Col, Card } from "antd";
import { withTranslation, WithTranslation } from "react-i18next";
import moment from "moment";
import cx from "classnames";
import { DateFormats } from "constants/dateConst";
import { TestRecordType } from "../chatRecordType";
import styles from "./ChatRecordDetails.module.scss";

interface IProps extends WithTranslation {
  /** Close function */
  close: () => void;
  /** Chat record data */
  data: TestRecordType;
  /** Toggles modal visibility */
  show: boolean;
}

const ChatRecordDetails = ({ close, data, show, t }: IProps) => {
  return (
    <Modal
      title={t("chatRecords.details")}
      visible={show}
      className={styles.modal}
      onCancel={() => close()}
      footer={
        <Button type="primary" onClick={() => close()}>
          {t("chatRecords.closeDetails")}
        </Button>
      }
    >
      <Row gutter={30}>
        <Col span={24} lg={12}>
          <Row className={styles.row}>
            <Col span={12}>
              <p className={styles.text}>{t("chatRecords.dateTime")}</p>
            </Col>
            <Col span={12}>
              <p className={styles.text}>
                {moment(data.created_at).format(DateFormats.DATE_TIME)}
              </p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <p className={styles.text}>{t("chatRecords.site")}</p>
            </Col>
            <Col span={12}>
              <p className={styles.text}>{data.site.name}</p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <p className={styles.text}>{t("chatRecords.route")}</p>
            </Col>
            <Col span={12}>
              <p className={styles.text}>{data.route}</p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <p className={styles.text}>{t("chatRecords.readerNo")}</p>
            </Col>
            <Col span={12}>
              <p className={styles.text}>{data.serial_no}</p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <p className={styles.text}>{t("chatRecords.user")}</p>
            </Col>
            <Col span={12}>
              <p className={styles.text}>
                {data.user.firstname} {data.user.lastname}
              </p>
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col span={12}>
              <p className={styles.text}>{t("chatRecords.location")}</p>
            </Col>
            <Col span={12}>
              <p className={styles.text}>-0.006004, -0.006505</p>
            </Col>
          </Row>
        </Col>
        <Col span={24} lg={12} className={styles.testDetails}>
          <Card>
            <Row className={styles.row}>
              <Col span={16}>
                <p className={cx(styles.text, styles.bold)}>
                  {t("chatRecords.test")}
                </p>
              </Col>
              <Col span={8}>
                <p className={cx(styles.text, styles.bold)}>{data.test}</p>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={16}>
                <p className={cx(styles.text, styles.bold)}>
                  {t("chatRecords.testResult")}
                </p>
              </Col>
              <Col span={8}>
                <p className={cx(styles.text, styles.bold)}>{data.result}</p>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={10}>
                <p className={styles.text}>Tetracyclines</p>
              </Col>
              <Col span={6}>
                <p className={styles.text}>5.00</p>
              </Col>
              <Col span={8}>
                <p className={styles.text}>{data.result}</p>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={10}>
                <p className={styles.text}>Ceftiofur</p>
              </Col>
              <Col span={6}>
                <p className={styles.text}>4.84</p>
              </Col>
              <Col span={8}>
                <p className={styles.text}>{data.result}</p>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={10}>
                <p className={styles.text}>Cephalexin</p>
              </Col>
              <Col span={6}>
                <p className={styles.text}>3.65</p>
              </Col>
              <Col span={8}>
                <p className={styles.text}>{data.result}</p>
              </Col>
            </Row>
            <Row className={styles.row}>
              <Col span={10}>
                <p className={styles.text}>Beta-lactams</p>
              </Col>
              <Col span={6}>
                <p className={styles.text}>3.81</p>
              </Col>
              <Col span={8}>
                <p className={styles.text}>{data.result}</p>
              </Col>
            </Row>
            <Row className={styles.image}>
              <img src="http://placehold.it/640x360" alt="" />
            </Row>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

export default withTranslation()(memo(ChatRecordDetails));
