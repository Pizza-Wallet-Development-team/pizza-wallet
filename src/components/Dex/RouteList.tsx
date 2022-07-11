import { Route as RouteType } from "@lifinance/sdk";
import { Col, Row, Typography } from "antd";
import RouteCard from "./RouteCard";

interface RouteCarouselProps {
  // highlightedIndex: number;
  routes: RouteType[];
  routesLoading: boolean;
  noRoutesAvailable: boolean;
  // setHighlightedIndex: Function;
}

const RouteList = ({
  // highlightedIndex,
  routes,
  routesLoading,
  noRoutesAvailable,
}: // setHighlightedIndex,
RouteCarouselProps) => {
  return (
    <>
      {routes.length > 0 && (
        <Col span={24} style={{ padding: 0 }}>
          <div className="route-grid">
            {routes.map((route, index) => {
              return (
                <RouteCard
                  key={index}
                  route={route}
                  // selected={highlightedIndex === index}
                  // onSelect={() => setHighlightedIndex(index)}
                />
              );
            })}
          </div>
        </Col>
      )}
      {routesLoading && !routes.length && (
        <Col span={24}>
          <Row justify={"center"} align="middle" style={{ height: 200 }}>
            {/* <LoadingIndicator></LoadingIndicator> */}
            <div>Loading...</div>
          </Row>
        </Col>
      )}
      {!routesLoading && noRoutesAvailable && (
        <Col span={24} className="no-routes-found">
          <h3 style={{ textAlign: "left" }}>No Route Found</h3>
          <Typography.Text type="secondary" style={{ textAlign: "left" }}>
            We couldn't find suitable routes for your desired transfer. We do
            have some suggestions why that could be: <br />
          </Typography.Text>
          <Typography.Paragraph style={{ color: "grey", marginTop: 24 }}>
            A route for this transaction does not exist yet possibly due to
            liquidity issues or because the amount of tokens you are sending is
            below the bridge minimum amount. Please try again later or change
            the tokens you intend to swap. If the problem persists, come to our
            Discord and leave a message in the support channel.
          </Typography.Paragraph>
        </Col>
      )}
    </>
  );
};

export default RouteList;
