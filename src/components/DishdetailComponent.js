import React from "react";
import {Card,CardImg,CardText,CardBody,CardTitle} from "reactstrap";


  function RenderComments({ comments }) {
    if (comments != null) {
      const com = comments.map(comData => {
        return (
          <li key={comData.id}>
            <p>{comData.comment}</p>
            <p>
              -- {comData.author}, {comData.date.slice(0, 10)}
            </p>
          </li>
        );
      });
      return <div>{com}</div>;
    } else {
      return <div></div>;
    }
  }

  function RenderDish({ dish }) {
    if (dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h1>Comments</h1>
            <ul className="list-unstyled">
              <RenderComments comments = {dish.comments} />
            </ul>
          </div>
        </div>
      );
    else {
      return <div></div>;
    }
  }

  const DishDetail = (props) => {
    return <div><RenderDish dish = {props.dish} /></div>;
  }


export default DishDetail;
