import {
  Box,
  Grid,
  GridItem,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Form } from "antd";
import InputField from "../Fields/InputField";
import moment from "moment";
import DatePicker from "../Fields/DatePicker";
import { useContext } from "react";

const EventForm = ({ modal, refetch, record, handler, close }) => {
  console.log(modal)
  const textColor = useColorModeValue("gray", "white");

  const isView = modal.toLowerCase() === "view";
  const isUpdate = modal.toLowerCase() === "update";


  const onFinish = async (values) => {
    const formattedDate = moment(values.eventDate, "YYYY-MM-DD").format(
      "MMMM Do YYYY"
    );
    await handler(
      { ...values, eventDate: formattedDate },
      refetch,
      close,
    );
  };

  const initialValues = {
    _id: record ? record._id : "",
    eventDate: record
      ? moment(record.eventDate, "MMMM Do YYYY").format("YYYY-MM-DD")
      : "",
    name: record ? record.name : "",
    imageUrl: record ? record.imageUrl : "",
    venue: record ? record.venue : "",
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={initialValues}
      style={{
        color: textColor,
      }}
    >
      <Box p={4}>
        <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={4}>
          {record && (
            <GridItem colSpan={12}>
              <InputField
                disable={record}
                label={"Event ID"}
                name={"_id"}
                type={"text"}
              />
            </GridItem>
          )}
          <GridItem colSpan={12}>
            <InputField
              disable={isView}
              label={"Event Name"}
              name={"name"}
              message={"Please enter the event name"}
              placeholder={"Enter your Event Name"}
              type={"text"}
            />
          </GridItem>
          <GridItem colSpan={12}>
            <DatePicker
              disable={isView}
              label={"Event Date"}
              message={"Please Select the Event Date"}
              placeholder={"Enter your Event Date"}
              name="eventDate"
              initialValue={initialValues.eventDate}
            />
          </GridItem>
        </Grid>

        <Box mt={4}>
          <InputField
            disable={isView}
            label={"Image URL"}
            name={"imageUrl"}
            message={"Please enter the image URL"}
            placeholder={"Enter your image"}
            type={"text"}
          />
        </Box>

        <Box mt={4}>
          <InputField
            disable={isView}
            label={"Venue"}
            name={"venue"}
            message={"Please enter the event venue"}
            placeholder={"Enter your Event Venue"}
            type={"text"}
          />
        </Box>

        {!isView && (
          <Box display="flex" justifyContent="end" mt={4}>
            <Button
              type="primary"
              htmltype="submit"
              bg={"teal.400"}
              _hover={{ bg: "teal.500" }}
            >
              Submit
            </Button>
          </Box>
        )}
      </Box>
    </Form>
  );
};

export default EventForm;
