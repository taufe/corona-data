import { useSelector } from "react-redux";
import { Statistic, Card, Row, Col } from "antd";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
const GlobalStat = () => {
  const data = useSelector((state) => state.globalData);

  return (
    <div className="site-statistic-demo-card">
      <div className="div-to-center">
        <Row gutter={12}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Active"
                value={data.active}
                precision={2}
                valueStyle={{ color: "#9d9d64" }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Death"
                value={data.deaths}
                precision={2}
                valueStyle={{ color: "#cf1322" }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="critical"
                value={data.critical}
                precision={2}
                valueStyle={{ color: "#d2de74" }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Cases"
                value={data.cases}
                precision={2}
                valueStyle={{ color: "#706acd" }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="TodayCases"
                value={data.todayCases}
                precision={2}
                valueStyle={{ color: "#706acd" }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="population"
                value={data.population}
                precision={2}
                valueStyle={{ color: "#bb13cf" }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
        </Row>
        <Row gutter={16} style={{ marginTop: "20px" }}>
          <Col span={8}>
            <Card>
              <Statistic
                title="Recovered"
                value={data.recovered}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="Today Recovered"
                value={data.todayRecovered}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <Statistic
                title="tests"
                value={data.tests}
                precision={2}
                valueStyle={{ color: "#FF4500" }}
                prefix={<ArrowDownOutlined />}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default GlobalStat;
