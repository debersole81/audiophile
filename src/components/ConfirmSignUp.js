import React from 'react';
import '../App.css';
import audioPhileLogoTextBlack from '../assets/audiophile-logo-text-black.svg';
import { useViewPort } from '../custom-hooks/useViewPort';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

function ConfirmSignUp(props) {

    /* #region Props destructure */
    const { onFormChange } = props;
    const { formErrors } = props;
    const { confirmSignUp } = props;
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
            <Form className='authaccount-form'>
                <Image src={audioPhileLogoTextBlack} className='authaccount-logo' />
                <h3 className='authaccount-header'>Confirm your account</h3>
                <Form.Group>
                    <Form.Label>Username*</Form.Label>
                    <Form.Control
                        name='username'
                        placeholder='Username state data'
                        onChange={onFormChange}
                        isInvalid={!!formErrors.username}
                        required>
                    </Form.Control>
                    <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                        {formErrors.username}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirmation Code*</Form.Label>
                    <Form.Control
                        name='authCode'
                        placeholder='Enter your code'
                        onChange={onFormChange}
                        isInvalid={!!formErrors.authCode}
                        required>
                    </Form.Control>
                    <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                        {formErrors.authCode}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Row className='row authaccount-authcode-row'>
                    <Col className='col authaccount-authcode-col'>
                        <p>Lost your code?</p>
                        <Button variant='link'>Resend code</Button>
                    </Col>
                </Form.Row>
                <Form.Row className='row authaccount-link-row'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='dark' onClick={confirmSignUp} block>CONFIRM</Button>
                    </Col>
                    <Col className='col authaccount-link-col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='link' size='sm'>Return to sign in</Button>
                    </Col>
                </Form.Row>
            </Form>
        );
    };

    //Render mobile form
    return (
        <Form className='authaccount-form-mobile'>
            <Image src={audioPhileLogoTextBlack} className='authaccount-logo-mobile' />
            <h3 className='authaccount-header-mobile'>Sign in to AudioPhile</h3>
            <Form.Group>
                <Form.Label>Username*</Form.Label>
                <Form.Control
                    name='username'
                    placeholder='Username state data'
                    onChange={onFormChange}
                    isInvalid={!!formErrors.username}
                    required>
                </Form.Control>
                <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                    {formErrors.username}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirmation Code*</Form.Label>
                <Form.Control
                    name='authCode'
                    placeholder='Enter your code'
                    onChange={onFormChange}
                    isInvalid={!!formErrors.authCode}
                    required>
                </Form.Control>
                <Form.Control.Feedback className='global-form-feedback' type='inValid'>
                    {formErrors.authCode}
                </Form.Control.Feedback>
            </Form.Group>
            {(width > 370 && width < breakpoint) ?
                <Form.Row className='row authaccount-authcode-row-mobile'>
                    <Col className='col authaccount-authcode-link-col-mobile text-nowrap'>
                        <p>Forgot your password?</p>
                        <Button variant='link'>Reset password</Button>
                    </Col>
                </Form.Row>
                :
                <Form.Row className='row authaccount-authcode-row-mobile'>
                    <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button variant='link' size='sm' block>Forgot password? Reset</Button>
                    </Col>
                </Form.Row>
            }
            <Form.Row className='row authaccount-link-row'>
                <Col className='col' xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button variant='dark' size='sm' block>CONFIRM</Button>
                </Col>
                <Col className='col mt-2' xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Button variant='light' size='sm' block>RETURN TO SIGN UP</Button>
                </Col>
            </Form.Row>
        </Form>
    );
};

export default ConfirmSignUp;