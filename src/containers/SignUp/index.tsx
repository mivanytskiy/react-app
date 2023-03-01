import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from "../../assets/images/logo.jpg";

export const SignUp: React.FC = () => {
    const [emailValue, setEmailValue] = React.useState<string>('');
    const [passwordValue, setPasswordValue] = React.useState<string>('');
    const [confirmPasswordValue, setConfirmPasswordValue] = React.useState<string>('');

    const navigate = useNavigate();

    const handleChangeEmailValue = React.useCallback((e: any) => {
        setEmailValue(e.target.value);
    }, []);

    const handleChangePasswordValue = React.useCallback((e: any) => {
        setPasswordValue(e.target.value);
    }, []);

    const handleChangeConfirmPasswordValue = React.useCallback((e: any) => {
        setConfirmPasswordValue(e.target.value);
    }, []);

    const handleRedirectTo = React.useCallback((path: string) => {
        navigate(path);
    }, []);

    const handleClick = React.useCallback(() => {
        // TODO: validate password and confirm password
        // 1. confirmPasswordValue should be the same as passwordValue2
        // 2. add validation of email
        // 3. if email is not valid or confirmPassword is not the same as password => button should be disabled
        console.log(emailValue, passwordValue, confirmPasswordValue);
    }, [emailValue, passwordValue, confirmPasswordValue]);

    return (
        <div className="rectangle">
            <div className="head">
                <div className="image">
                    <img src={LogoImage} alt="" />
                </div>
                <div className="title">Sign up</div>
            </div>
            <div className="body">
                <div className="form">
                    <div className="form-input">
                        <input type="email" value={emailValue} onChange={handleChangeEmailValue} placeholder="Email" /> 
                    </div>
                    <div className="form-input">
                        <input type="password" value={passwordValue} onChange={handleChangePasswordValue} placeholder="Password" /> 
                    </div>
                    <div className="form-input">
                        <input type="password" value={confirmPasswordValue} onChange={handleChangeConfirmPasswordValue} placeholder="Confirm password" />
                    </div>
                </div>
                <div className="body-footer">
                    <div className="body-footer-create">
                        <div 
                            onClick={() => handleRedirectTo('/sign_in')} 
                            className="body-footer-create-button"
                        >
                            Log in for to your account
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="button-back">
                    {/* TODO: return user to the previous page */}
                    Back
                </div>
                <div className="button-create" onClick={handleClick}>
                    Sign up
                </div>
            </div>
        </div> 
    );
}