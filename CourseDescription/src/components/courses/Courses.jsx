import {
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Container,
} from "reactstrap";
import { ToastContainer, toast } from "react-toastify";

const Courses = ({ course }) => {
  const notify = () => toast("Wow so easy!");

  return (
    <div>
      <Card className="text-center mt-3 mb-3">
        <CardSubtitle className="font-wight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger">Delete</Button>
          <Button color="warning ml-3">Update</Button>
        </Container>
      </Card>
    </div>
  );
};

export default Courses;
