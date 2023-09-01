import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/MainLayout";
import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Statistics } from "../../components/Data/statisticsData";
import StatisticCards from "../../components/Statistics/Statistics";
import EventView from "../../components/View/EventView";
import Chart from "../../components/Charts/Chart";
import ActiveUsers from "../../components/Statistics/Charts/ActiveUsers";
import SalesOverview from "../../components/Statistics/Charts/SalesOverview";
import {
  barChartDataDashboard,
  barChartOptionsDashboard,
} from "../../components/Data/barChart";
import {
  areaChartDataDashboard,
  areaChartOptionsDashboard,
} from "../../components/Data/areaChart";
import CustomTab from "../../components/Table/CustomTab";

export default function Dashboard() {
  const iconBoxInside = useColorModeValue("white", "white");

  return (
    <>
      <Layout>
        <Flex flexDirection="column" pt={{ base: "20px", md: "10px" }}>
          <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing="24px">
            {Statistics(iconBoxInside).map((item, index) => (
              <StatisticCards
                key={item.title}
                title={item.title}
                amount={item.amount}
                percentage={item.percentage}
                icon={item.icon}
              />
            ))}
          </SimpleGrid>

          <Box mt={"12px"}>
            <EventView />
          </Box>
          <Grid
            templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
            templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
            gap="24px"
            mb={{ lg: "26px" }}
          >
            <ActiveUsers
              title={"Active Users"}
              percentage={23}
              chart={
                <Chart
                  data={barChartDataDashboard}
                  options={barChartOptionsDashboard}
                  type={"bar"}
                />
              }
            />
            <SalesOverview
              title={"Sales Overview"}
              percentage={5}
              chart={
                <Chart
                  data={areaChartDataDashboard}
                  options={areaChartOptionsDashboard}
                  type={"area"}
                />
              }
            />
          </Grid>
          <Box>
            <CustomTab />
          </Box>
        </Flex>
      </Layout>
    </>
  );
}
