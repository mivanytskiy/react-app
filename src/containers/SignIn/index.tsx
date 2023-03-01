import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from "../../assets/images/logo.jpg";

export const SignIn: React.FC = () => {
    const [emailValue, setEmailValue] = React.useState<string>('');
    const [passwordValue, setPasswordValue] = React.useState<string>('');

    const handleChangeEmailValue = React.useCallback((e: any) => {
        setEmailValue(e.target.value);
    }, []);

    const handleChangePasswordValue = React.useCallback((e: any) => {
        setPasswordValue(e.target.value);
    }, []);

    const handleClick = React.useCallback(() => {
        // 1. add validation of email
        // 2. if email is not valid => button should be disabled
        console.log(emailValue, passwordValue);
    }, [emailValue, passwordValue]);

    return (
        <div className="rectangle">
            <div className="head">
                <div className="image">
                    <img src={LogoImage} alt=""/>
                </div>
                <div className="title">Sign in</div>
            </div>
            <div className="body">
                <div className="form">
                    <div className="form-input">
                        <input type="email" value={emailValue} onChange={handleChangeEmailValue} placeholder="Email" /> 
                    </div>
                    <div className="form-input">
                        <input type="password" value={passwordValue} onChange={handleChangePasswordValue} placeholder="Password" /> 
                    </div>
                </div>
                <div className="body-footer">
                    <div className="body-footer-create">No account?
                        <Link to="/sign_up" relative="path" className="body-footer-create-button">
                            Create one!
                        </Link>
                    </div> 
                    <div className="body-footer-forgot">
                        <Link to="/sign_up" relative="path" className="body-footer-create-button">
                            Forgot password?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="button" onClick={handleClick}>
                    Sign in
                </div>
            </div>
        </div>
    );
}