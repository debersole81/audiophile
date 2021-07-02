import React from "react";
import "../App.css";
import audioPhileLogoTextBlack from "../assets/audiophile-logo-text-black.svg";
import { useViewPort } from "../custom-hooks/useViewPort";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function ResetPassword(props) {
  /* #region Props destructure */
  const { onFormChange, formErrors, resetPassword, signInLink } =
    props.resetPasswordProps;
  /* #endregion Props destructure */

  /* #region Custom hooks */
  /** Implement custom hook to render mobile return at <= 761 px */
  //Destructure width variable from useViewPort hook
  const { width } = useViewPort();

  //Declare variable for minimum breakpoint value
  const breakpoint = 761;
  /* #endregion Custom hooks */

  if (width > breakpoint) {
    //Render desktop form
    return (
      <Form className="authaccount-form">
        <Image src={audioPhileLogoTextBlack} className="authaccount-logo" />
        <h3 className="authaccount-header">Reset your password</h3>
        <Form.Group>
          <Form.Label>Username*</Form.Label>
          <Form.Control
            name="username"
            placeholder="Enter your username"
            onChange={onFormChange}
            isInvalid={!!formErrors.username}
            required
          ></Form.Control>
          <Form.Control.Feedback
            className="global-form-feedback"
            type="inValid"
          >
            {formErrors.username}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Row className="row authaccount-link-row">
          <Col className="col" xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button variant="dark" onClick={resetPassword} block>
              Email My Code
            </Button>
          </Col>
          <Col
            className="col authaccount-link-col"
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            <Button variant="link" size="sm" onClick={signInLink}>
              Return to sign in
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }

  //Render mobile form
  return (
    <Form className="authaccount-form-mobile">
      <Image
        src={audioPhileLogoTextBlack}
        className="authaccount-logo-mobile"
      />
      <h3 className="authaccount-header-mobile">Reset your password</h3>
      <Form.Group>
        <Form.Label>Username*</Form.Label>
        <Form.Control
          name="username"
          placeholder="Enter your username"
          onChange={onFormChange}
          isInvalid={!!formErrors.username}
          required
        ></Form.Control>
        <Form.Control.Feedback className="global-form-feedback" type="inValid">
          {formErrors.username}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Row className="row authaccount-link-row">
        <Col className="col" xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button variant="dark" size="sm" onClick={resetPassword} block>
            Email My Code
          </Button>
        </Col>
        <Col className="col mt-2" xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button variant="light" size="sm" onClick={signInLink} block>
            Return To Sign In
          </Button>
        </Col>
      </Form.Row>
    </Form>
  );
}

export default ResetPassword;
